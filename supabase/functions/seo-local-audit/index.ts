
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// Define CORS headers for cross-origin requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const GOOGLE_API_KEY = Deno.env.get('GOOGLE_MAPS_API_KEY') || 'AIzaSyCaDpfjWxki1XQUSNkTBb3CA6LoXYofQNo';

// Handle HTTP requests
serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    // Parse the request body
    const requestData = await req.json();
    const { businessName, location } = requestData;
    
    if (!businessName || !location) {
      throw new Error("Se requiere el nombre del negocio y la ubicación");
    }

    console.log(`Searching for business: ${businessName} in location: ${location}`);
    
    // 1. First, search for the business using the Places API Text Search
    const searchQuery = `${businessName} ${location}`;
    const textSearchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(searchQuery)}&key=${GOOGLE_API_KEY}`;
    
    const searchResponse = await fetch(textSearchUrl);
    const searchData = await searchResponse.json();
    
    if (searchData.status !== 'OK' || !searchData.results || searchData.results.length === 0) {
      console.error("No se encontraron resultados:", searchData.status);
      throw new Error("No se encontró el negocio. Intenta con términos más específicos.");
    }
    
    // 2. Get the first result (most relevant)
    const placeId = searchData.results[0].place_id;
    
    // 3. Get detailed information about the place
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,formatted_address,formatted_phone_number,rating,user_ratings_total,types,website,opening_hours,photos,business_status&key=${GOOGLE_API_KEY}`;
    
    const detailsResponse = await fetch(detailsUrl);
    const detailsData = await detailsResponse.json();
    
    if (detailsData.status !== 'OK' || !detailsData.result) {
      console.error("Error al obtener detalles:", detailsData.status);
      throw new Error("No se pudieron obtener los detalles del negocio.");
    }
    
    const place = detailsData.result;
    
    // 4. Calculate the SEO score
    let score = 0;
    const hasReviews = place.user_ratings_total > 0;
    const hasManyReviews = place.user_ratings_total >= 25;
    const goodRating = place.rating >= 4.2;
    const keywordInTitle = place.name.toLowerCase().includes(businessName.toLowerCase());
    const relevantCategory = place.types && Array.isArray(place.types) && 
      place.types.some(type => type.includes(businessName.toLowerCase().replace(/\s/g, '')));
    const isVerified = place.business_status === "OPERATIONAL";
    const hasCompleteData = place.formatted_phone_number && place.website && place.opening_hours;
    const hasPhotos = place.photos && place.photos.length > 0;
    
    // Add points according to criteria
    if (hasReviews) score += 10;
    if (hasManyReviews) score += 10;
    if (goodRating) score += 10;
    if (keywordInTitle) score += 10;
    if (relevantCategory) score += 10;
    if (isVerified) score += 10;
    if (hasCompleteData) score += 10;
    if (hasPhotos) score += 10;
    
    // 5. Prepare the response with all data and score
    const result = {
      place_id: placeId,
      nombre_negocio: place.name,
      direccion: place.formatted_address,
      num_resenas: place.user_ratings_total || 0,
      valoracion: place.rating || 0,
      categoria: place.types ? place.types[0] : null,
      telefono: place.formatted_phone_number || null,
      sitio_web: place.website || null,
      horarios_configurados: place.opening_hours ? true : false,
      num_fotos: place.photos ? place.photos.length : 0,
      
      // Score data
      tiene_resenas: hasReviews,
      muchas_resenas: hasManyReviews,
      buena_valoracion: goodRating,
      keyword_en_titulo: keywordInTitle,
      categoria_correcta: relevantCategory,
      ficha_verificada: isVerified,
      datos_completos: hasCompleteData,
      tiene_fotos: hasPhotos,
      
      // Final score
      puntuacion: score,
      
      // Original search terms
      business_name: businessName,
      location: location
    };
    
    console.log("Analysis completed successfully", { placeId, score });
    
    return new Response(JSON.stringify(result), { 
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200 
    });
    
  } catch (error) {
    console.error("Error in SEO Local Audit function:", error.message);
    
    return new Response(JSON.stringify({ 
      error: error.message || "Ocurrió un error al analizar el negocio" 
    }), { 
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400 
    });
  }
});
