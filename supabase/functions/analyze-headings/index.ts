
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import * as cheerio from "https://esm.sh/cheerio@1.0.0-rc.12";

// Set up CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Handle the request
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { url } = await req.json();
    
    if (!url) {
      return new Response(
        JSON.stringify({ error: "URL is required" }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Analyzing URL: ${url}`);
    
    // Fetch the URL content with better browser emulation
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Referer': 'https://www.google.com/',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
      },
    });
    
    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: `Failed to fetch URL: ${response.status} ${response.statusText}` }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const html = await response.text();
    
    // Debug: Check if we're getting HTML content
    if (!html || html.length < 100) {
      console.error("Received empty or very short HTML content");
      return new Response(
        JSON.stringify({ error: "Received insufficient HTML content" }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    console.log(`Received HTML length: ${html.length}`);
    
    const $ = cheerio.load(html);
    
    // Extract all headings with more detailed logging
    const headings = [];
    let headingCount = 0;
    
    // Try different selectors that might capture headings
    const selectors = [
      'h1, h2, h3, h4, h5, h6',                   // Standard HTML headings
      '[role="heading"]',                          // ARIA role headings
      '.heading, .header, .title',                 // Common CSS classes
      'div[class*="heading"], div[class*="title"]' // Classes containing these words
    ];
    
    // Try each selector to find headings
    selectors.forEach(selector => {
      $(selector).each((_, element) => {
        // For standard heading tags
        if (/^h[1-6]$/i.test(element.tagName)) {
          const level = parseInt(element.tagName.substring(1));
          const text = $(element).text().trim();
          
          // Skip empty headings or likely navigation/button text
          if (text && text.length > 1 && text.length < 500) {
            headings.push({ level, text });
            headingCount++;
          }
        } 
        // For elements with heading role or relevant classes
        else {
          // Try to determine heading level from aria-level or class names
          let level = 2; // Default to h2 if we can't determine
          
          if ($(element).attr('aria-level')) {
            level = parseInt($(element).attr('aria-level'));
          } else if ($(element).hasClass('h1') || $(element).hasClass('title')) {
            level = 1;
          } else if ($(element).hasClass('h2') || $(element).hasClass('subtitle')) {
            level = 2;
          } else if ($(element).hasClass('h3')) {
            level = 3;
          }
          
          const text = $(element).text().trim();
          
          // Only add if not already in our list and not empty
          if (text && text.length > 1 && text.length < 500) {
            // Check if this text isn't already in our list
            if (!headings.some(h => h.text === text)) {
              headings.push({ level, text });
              headingCount++;
            }
          }
        }
      });
    });
    
    console.log(`Found ${headingCount} headings using all selectors`);
    
    // If we still have no headings, try a more aggressive approach
    if (headings.length === 0) {
      console.log("No headings found with standard selectors, trying alternative methods");
      
      // Look for elements that might be headings based on styling or position
      $('div, p, span').each((_, element) => {
        const $el = $(element);
        const fontSize = $el.css('font-size');
        const fontWeight = $el.css('font-weight');
        const text = $el.text().trim();
        
        // If element has large font size and is bold, it might be a heading
        if (
          text && 
          text.length > 1 && 
          text.length < 100 &&
          (
            (fontSize && parseInt(fontSize) >= 16) ||
            (fontWeight && parseInt(fontWeight) >= 600) ||
            $el.css('display') === 'block'
          )
        ) {
          // Guess heading level based on styling
          let level = 2;
          
          if (fontSize) {
            const size = parseInt(fontSize);
            if (size >= 24) level = 1;
            else if (size >= 20) level = 2;
            else level = 3;
          }
          
          // Only add if not already in our list
          if (!headings.some(h => h.text === text)) {
            headings.push({ level, text });
          }
        }
      });
      
      console.log(`Found ${headings.length} headings after additional processing`);
    }

    // Analysis logic
    const analysis = analyzeHeadings(headings);
    
    return new Response(
      JSON.stringify(analysis),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error("Error analyzing URL:", error);
    
    return new Response(
      JSON.stringify({ error: error.message || "Unknown error occurred" }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

/**
 * Analyzes heading structure and calculates SEO score
 */
function analyzeHeadings(headings) {
  // Initialize analysis results
  const results = {
    score: 0,
    totalHeadings: headings.length,
    h1Count: 0,
    hierarchyIssues: 0,
    skipLevelIssues: 0,
    feedback: [],
    headings: headings,
  };

  if (headings.length === 0) {
    results.feedback.push("No se encontraron encabezados en la página.");
    results.score = 0;
    return results;
  }

  // Count H1 tags
  results.h1Count = headings.filter(h => h.level === 1).length;
  
  // Check for single H1
  if (results.h1Count === 0) {
    results.feedback.push("Tu página no tiene un encabezado H1. Cada página debería tener exactamente un H1.");
  } else if (results.h1Count === 1) {
    results.feedback.push("✅ Tu página tiene un único H1, que es lo correcto.");
  } else {
    results.feedback.push(`Tu página tiene ${results.h1Count} encabezados H1. Lo ideal es tener solo uno.`);
  }

  // Check heading hierarchy
  let expectedNextLevel = 1;
  let lastLevel = 0;
  
  for (let i = 0; i < headings.length; i++) {
    const current = headings[i];
    
    // First heading check
    if (i === 0 && current.level !== 1) {
      results.feedback.push("La página no comienza con un H1.");
      results.hierarchyIssues++;
    }
    
    // Skip level check (e.g., H2 -> H4, skipping H3)
    if (current.level > lastLevel + 1 && i > 0) {
      results.skipLevelIssues++;
      results.feedback.push(`Salto brusco de nivel de encabezado de H${lastLevel} a H${current.level} con el texto "${current.text}".`);
    }
    
    lastLevel = current.level;
  }
  
  // Check for minimum number of headings
  if (headings.length < 3) {
    results.feedback.push("Tu página tiene muy pocos encabezados. Considera añadir más para mejorar la estructura y SEO.");
  } else if (headings.length >= 3 && headings.length <= 5) {
    results.feedback.push("Tu página podría beneficiarse de tener más encabezados para mejorar la estructura.");
  } else if (headings.length > 15) {
    results.feedback.push("Tu página tiene muchos encabezados. Asegúrate de que todos sean necesarios y relevantes.");
  } else {
    results.feedback.push("✅ Tu página tiene un buen número de encabezados.");
  }
  
  // Calculate score (0-100)
  let score = 100;
  
  // Penalize for H1 issues (-30 points for no H1, -20 for multiple H1s)
  if (results.h1Count === 0) {
    score -= 30;
  } else if (results.h1Count > 1) {
    score -= 20;
  }
  
  // Penalize for hierarchy issues (-10 points each, max -30)
  score -= Math.min(results.hierarchyIssues * 10, 30);
  
  // Penalize for skip level issues (-5 points each, max -25)
  score -= Math.min(results.skipLevelIssues * 5, 25);
  
  // Penalize for too few headings
  if (headings.length < 3) {
    score -= 15;
  } else if (headings.length >= 3 && headings.length <= 5) {
    score -= 5;
  }
  
  // Ensure score stays within 0-100 range
  results.score = Math.max(0, Math.min(100, score));
  
  // Add overall assessment
  if (results.score >= 90) {
    results.assessment = "¡Excelente! Tu estructura de encabezados es casi perfecta.";
  } else if (results.score >= 70) {
    results.assessment = "Buen trabajo. Tu estructura de encabezados es buena, pero hay espacio para mejorar.";
  } else if (results.score >= 50) {
    results.assessment = "Tu estructura de encabezados necesita mejoras para optimizar tu SEO.";
  } else {
    results.assessment = "Tu estructura de encabezados tiene problemas significativos que deberías resolver.";
  }
  
  return results;
}
