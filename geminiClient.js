import 'dotenv/config';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function summarizeAndExtractWithGemini(emailContent) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Start a chat session with the model, without initial system message
    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: 'You are an email summarizer. Summarize the email and identify any deadlines, tasks, and key points. Organize them into actionable items.' }],
        },
      ],
    });

    // Send the email content as a message to the model
    let result = await chat.sendMessage(emailContent);

    // Retrieve and return the model's response
    const summary = result.response.text();
    console.log('Summarized email with Gemini:', summary);
    return summary.trim();
  } catch (error) {
    console.error('Error summarizing email with Gemini:', error);
    throw error;
  }
}
