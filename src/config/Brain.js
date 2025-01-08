import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

//   const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_AI_API);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export async function StartBran(InpData) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });
  let result = "";
  if (InpData !== undefined) {
    result = await chatSession.sendMessage(String(InpData));
    return await result.response.text();
    // console.log(result.response.text());
  }
}

StartBran();
