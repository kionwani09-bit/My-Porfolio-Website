
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  /**
   * Analyzes how the developer's background matches a user's prompt.
   */
  async analyzeCareerFit(recruiterPrompt: string) {
    // Guidelines: Always initialize GoogleGenAI with the apiKey property from process.env.API_KEY.
    // We instantiate it locally to follow best practices for dynamic key environments.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    try {
      // Guidelines: Use ai.models.generateContent to query the model with both name and prompt.
      // 'gemini-3-flash-preview' is the recommended model for basic text and reasoning tasks.
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are an AI Career Consultant specializing in Senior Engineering talent. 
        The developer behind this portfolio is a Full-Stack Engineer with 8+ years experience, expert in React, Node.js, AWS, and TypeScript.
        A user (likely a recruiter or founder) asks: "${recruiterPrompt}".
        
        Your task:
        1. Evaluate the user's specific context/needs.
        2. Explain why this developer's specific background (System Architecture, PWA optimization, Headless Commerce) is a high-value match.
        3. Use a tone that is professional, slightly sophisticated, and highly persuasive.
        4. Keep it under 200 words. Use clear structure.`,
        config: {
          temperature: 0.7,
        }
      });
      
      // Guidelines: Use response.text directly to access the generated content.
      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I'm having trouble analyzing the fit right now. However, I can confirm this developer excels at React, AWS, and building high-impact digital solutions.";
    }
  }
}

export const gemini = new GeminiService();