
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getStyleConsultation = async (description: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Você é um consultor de estilo visagista da Barbeza Barbearia. Nossa marca foca em natureza, sofisticação, silêncio e bem-estar. O cliente diz: "${description}". Sugira um estilo de corte ou barba que combine com essa vibe de "respiro e sofisticação". Responda de forma curta, elegante e inspiradora em português do Brasil.`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 200,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Nossos especialistas estão prontos para encontrar o melhor visual para você em sua visita.";
  }
};
