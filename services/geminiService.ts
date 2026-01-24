
import { GoogleGenAI } from "@google/genai";

const getAIInstance = () => {
  const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('Gemini API key is not configured. Please set GEMINI_API_KEY environment variable.');
  }
  return new GoogleGenAI({ apiKey });
};

export const getDecorAdvice = async (roomDescription: string) => {
  // Validate input
  if (!roomDescription || roomDescription.trim().length < 10) {
    return "Please provide a more detailed description of your room to receive personalized design advice.";
  }
  
  try {
    const ai = getAIInstance();
    const response = await ai.models.generateContent({
      model: 'gemini-pro',
      contents: [{
        role: 'user',
        parts: [{
          text: `You are an expert interior designer for Homiee. Based on this room description: "${roomDescription}", provide 3 brief, bulleted tips for improving the space's aesthetic and comfort. Use a warm, professional tone. Respond in well-formatted text with line breaks between each tip.`
        }]
      }],
      config: {
        temperature: 0.7,
      },
    });
    
    const textResponse = response.text;
    
    if (!textResponse) {
      return "I couldn't generate advice right now. Please try again with a different description.";
    }
    
    return textResponse;
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    // More specific error handling
    if (error.status === 400) {
      return "Invalid request. Please check your room description and try again.";
    } else if (error.status === 401) {
      return "Authentication error. Please check your API configuration.";
    } else if (error.status === 403) {
      return "Access denied. Please check your API permissions.";
    } else if (error.status === 429) {
      return "Too many requests. Please try again later.";
    } else if (error.status === 500) {
      return "Internal server error. Please try again later.";
    } else {
      return "Error connecting to our design assistant. Please try again later.";
    }
  }
};
