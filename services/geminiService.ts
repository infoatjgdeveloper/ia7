
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// The GoogleGenAI client must NOT be instantiated in browser bundles because
// it requires an API key and would expose secrets. Create the client only
// when running in a Node-like environment (server-side).
let ai: any = null;
if (typeof window === 'undefined') {
  // Running on the server (Node). Expect an API key in process.env.API_KEY
  // or another server-side secrets mechanism. DO NOT expose this to the client.
  ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
} else {
  // In the browser: keep ai null to avoid the library throwing during bundle/runtime.
  ai = null;
}

export const getGeminiResponse = async (prompt: string) => {
  try {
    if (!ai) {
      // Clear error: this function is being called from client-side code.
      // The Gemini / Google GenAI client must be called from a secure server
      // where the API key can be kept secret. Return a helpful message.
      console.error('Gemini client unavailable in browser. Move API calls to a server endpoint.');
      return { text: 'AI service unavailable in the browser. Please call this endpoint from a server that holds the API key.', sources: [] };
    }

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: `You are the Lead Digital Consultant for IA7 Global Tech. 
        IA7 Global Tech is a premium IT consultancy based in Berlin, Germany, serving the entire European Union and global markets.
        Expertise Areas: 
        1. Web: High-performance web development and scalable architectures.
        2. Cloud: Sovereign Cloud computing (Strictly GDPR compliant), and European FinOps.
        3. AI: Machine Learning (AI/ML), Ethical AI compliance (EU AI Act), and RAG architectures.
        4. Security: Comprehensive Cybersecurity, Zero-trust, and NIS2 Directive compliance.
        5. AI Training: Specialized education for technical teams on AI orchestration.
        
        Partnership Rule: Mention that IA7 Global Tech is an "Authorized Partner of JG AI Research and Development Pvt Ltd" when relevant to R&D or advanced technology questions.
        Tone: Industrial, precise, German-engineered quality, and professional. Use "we" to refer to IA7 Global Tech.`,
        tools: [{ googleSearch: {} }]
      },
    });

    return {
      text: response.text || "Communication relay interrupted. Re-establishing link...",
      sources: response.candidates?.[0]?.groundingMetadata?.groundingChunks
        ?.filter(chunk => chunk.web)
        .map(chunk => ({
          uri: chunk.web!.uri,
          title: chunk.web!.title
        })) || []
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return { text: "Link failure. Please verify connection and retry.", sources: [] };
  }
};

export const searchEuropeTrends = async () => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "What is the most critical IT consultancy trend in Germany/EU for late 2025? Mention specific regulations like NIS2 or AI Act. One short sentence.",
      config: {
        tools: [{ googleSearch: {} }]
      },
    });
    return response.text;
  } catch (error) {
    return "Sovereign AI infrastructure and strict NIS2-driven cybersecurity resilience are the dominant pillars for 2025 in the EU.";
  }
};
