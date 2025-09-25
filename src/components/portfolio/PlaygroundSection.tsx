import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Play, 
  Zap, 
  MessageSquare, 
  TrendingUp, 
  Upload,
  Download,
  RefreshCw,
  Sparkles
} from 'lucide-react';

export function PlaygroundSection() {
  const [textInput, setTextInput] = useState('');
  const [chatInput, setChatInput] = useState('');
  const [analysisResult, setAnalysisResult] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const demoProjects = [
    {
      id: 'nlp',
      title: 'Text Sentiment Analyzer',
      description: 'Analyze the sentiment of any text using advanced NLP models',
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-500',
      features: ['Real-time analysis', 'Confidence scores', 'Emotion detection']
    },
    {
      id: 'forecasting',
      title: 'Time Series Forecaster',
      description: 'Upload CSV data and get intelligent forecasting predictions',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      features: ['CSV upload', 'Interactive charts', 'Multiple algorithms']
    },
    {
      id: 'chatbot',
      title: 'AI Assistant Demo',
      description: 'Chat with an intelligent AI assistant powered by custom models',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500',
      features: ['Context awareness', 'Multi-turn conversations', 'Code generation']
    }
  ];

  const handleTextAnalysis = async () => {
    if (!textInput.trim()) return;
    
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      const sentiment = Math.random() > 0.5 ? 'Positive' : 'Negative';
      const confidence = (Math.random() * 0.4 + 0.6).toFixed(2);
      const emotions = ['Joy', 'Surprise', 'Trust', 'Anticipation', 'Sadness', 'Fear', 'Anger', 'Disgust'];
      const topEmotion = emotions[Math.floor(Math.random() * emotions.length)];
      
      setAnalysisResult(`
**Sentiment Analysis Result:**

📊 **Overall Sentiment:** ${sentiment} (${(parseFloat(confidence) * 100).toFixed(0)}% confidence)

🎭 **Dominant Emotion:** ${topEmotion}

📈 **Detailed Breakdown:**
- Positivity Score: ${(Math.random() * 100).toFixed(1)}%
- Negativity Score: ${(Math.random() * 100).toFixed(1)}%
- Neutrality Score: ${(Math.random() * 100).toFixed(1)}%

🧠 **Model:** Custom BERT-based sentiment classifier trained on 1M+ samples
      `);
      setIsProcessing(false);
    }, 2000);
  };

  const chatMessages = [
    { type: 'user', message: 'Can you help me understand machine learning?' },
    { type: 'ai', message: 'Absolutely! Machine learning is a subset of AI that enables computers to learn and make decisions from data without being explicitly programmed. Would you like me to explain any specific aspect?' },
    { type: 'user', message: 'What about deep learning?' },
    { type: 'ai', message: 'Deep learning is a specialized form of machine learning that uses neural networks with multiple layers (hence "deep"). It excels at tasks like image recognition, natural language processing, and speech recognition. Think of it as inspired by how the human brain processes information!' }
  ];

  return (
    <section id="playground" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Interactive Playground
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Try My
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> AI Demos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the power of AI/ML through these interactive demos built with production-ready models
            </p>
          </div>

          {/* Demo Cards Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {demoProjects.map((demo) => {
              const Icon = demo.icon;
              return (
                <Card key={demo.id} className="group border-border/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${demo.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {demo.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">
                      {demo.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {demo.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Interactive Demos */}
          <Tabs defaultValue="nlp" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-muted/50">
              <TabsTrigger value="nlp" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                <span className="hidden sm:inline">NLP Demo</span>
              </TabsTrigger>
              <TabsTrigger value="forecasting" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                <span className="hidden sm:inline">Forecasting</span>
              </TabsTrigger>
              <TabsTrigger value="chatbot" className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                <span className="hidden sm:inline">AI Chat</span>
              </TabsTrigger>
            </TabsList>

            {/* NLP Demo */}
            <TabsContent value="nlp" className="space-y-6">
              <Card className="border-border/40">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    Text Sentiment Analyzer
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Enter any text to analyze its sentiment, emotions, and confidence scores using advanced NLP models.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Enter text to analyze:</label>
                    <Textarea 
                      placeholder="Type or paste your text here... (e.g., 'I love this new AI technology! It's incredibly impressive and makes my work so much easier.')"
                      value={textInput}
                      onChange={(e) => setTextInput(e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>
                  <Button 
                    onClick={handleTextAnalysis} 
                    disabled={!textInput.trim() || isProcessing}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90"
                  >
                    {isProcessing ? (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Zap className="mr-2 h-4 w-4" />
                        Analyze Sentiment
                      </>
                    )}
                  </Button>
                  
                  {analysisResult && (
                    <Card className="bg-muted/50 border-primary/20">
                      <CardContent className="pt-6">
                        <pre className="whitespace-pre-wrap text-sm text-foreground font-mono">
                          {analysisResult}
                        </pre>
                      </CardContent>
                    </Card>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Forecasting Demo */}
            <TabsContent value="forecasting" className="space-y-6">
              <Card className="border-border/40">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Time Series Forecasting Visualizer
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Upload your CSV data or use sample data to see AI-powered forecasting in action.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                        <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Drop your CSV file here or click to upload
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Supports time series data with date and value columns
                        </p>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-2">Or try with sample data:</p>
                        <Button variant="outline" size="sm">
                          <Play className="mr-2 h-4 w-4" />
                          Load Sample Stock Data
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-center min-h-[200px]">
                      <div className="text-center">
                        <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">Forecast chart will appear here</p>
                        <p className="text-xs text-muted-foreground">Upload data to see predictions</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">LSTM Neural Networks</Badge>
                    <Badge variant="outline">ARIMA Models</Badge>
                    <Badge variant="outline">Prophet Forecasting</Badge>
                    <Badge variant="outline">Seasonal Decomposition</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Chatbot Demo */}
            <TabsContent value="chatbot" className="space-y-6">
              <Card className="border-border/40">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    AI Assistant Demo
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Chat with an intelligent AI assistant that can help with coding, explanations, and problem-solving.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4 max-h-96 overflow-y-auto space-y-4">
                    {chatMessages.map((msg, index) => (
                      <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-lg ${
                          msg.type === 'user' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-background border border-border'
                        }`}>
                          <p className="text-sm">{msg.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Ask me anything about AI, coding, or technology..."
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      className="flex-1"
                    />
                    <Button 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90"
                      disabled={!chatInput.trim()}
                    >
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">GPT Integration</Badge>
                    <Badge variant="outline">Context Awareness</Badge>
                    <Badge variant="outline">Code Generation</Badge>
                    <Badge variant="outline">Technical Q&A</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Want a Custom AI Solution?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  These demos showcase just a fraction of what's possible. Let's discuss how AI can transform your business.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Let's Build Something Amazing
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}