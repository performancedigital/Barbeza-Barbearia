
import { GoogleGenAI } from "@google/genai";

// Lazy initialization to avoid crashes if API_KEY is missing during build
let aiInstance: GoogleGenAI | null = null;

const getAI = () => {
  if (!aiInstance) {
    const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY is missing. AI features will be disabled.");
      return null;
    }
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
};

export const getStyleConsultation = async (description: string) => {
  const ai = getAI();
  if (!ai) return "Nossos especialistas estão prontos para encontrar o melhor visual para você em sua visita.";

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Você é um consultor de estilo visagista da Barbeza Barbearia. Nossa marca foca em natureza, sofisticação, silêncio e bem-estar. 
      
      O cliente diz: "${description}". 
      
      Sugira um estilo de corte ou barba que combine com essa vibe de "respiro e sofisticação". 
      Responda de forma elegante, inspiradora e profissional em português do Brasil. 
      Foque em como o visual ajudará o cliente a se sentir renovado.`,
      config: {
        temperature: 0.7,
      }
    });
    
    return response.text || "Nossos especialistas estão prontos para encontrar o melhor visual para você em sua visita.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Houve um pequeno contratempo na nossa análise inteligente. Mas não se preocupe, nossos mestres barbeiros farão essa consultoria pessoalmente para você.";
  }
};
