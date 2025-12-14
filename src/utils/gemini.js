import { GoogleGenerativeAI } from "@google/generative-ai";

// Read API key
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

// Safety check
if (!apiKey) {
  throw new Error("VITE_GEMINI_API_KEY is missing");
}

// Initialize Gemini
const genAI = new GoogleGenerativeAI(apiKey);

// ⚠️ Use stable model to avoid quota = 0 issues
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

// Generation configuration
const generationConfig = {
  temperature: 0.7,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 1024,
  responseMimeType: "text/plain",
};

// MAIN FUNCTION
export async function generateText(prompt) {
  try {
    if (!prompt || typeof prompt !== "string") {
      throw new Error("Invalid prompt");
    }

    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);

    // Defensive checks
    if (!result || !result.response) {
      throw new Error("Empty response from Gemini");
    }

    const text = result.response.text();

    if (!text || typeof text !== "string") {
      throw new Error("Gemini returned no text");
    }

    return text.trim();
  } catch (error) {
    console.error("Gemini API Error:", error);

    // IMPORTANT: throw error so UI can handle it
    throw error;
  }
}
