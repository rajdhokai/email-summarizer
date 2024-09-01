import 'dotenv/config';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function summarizeAndExtractWithOpenAI(emailContent) {
  try {    
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo-instruct',
      messages: [
        {
          role: 'system',
          content: 'You are an email summarizer. Summarize the email and identify any deadlines, tasks, and key points. Organize them into actionable items.',
        },
        {
          role: 'user',
          content: emailContent,
        },
      ],
      max_tokens: 200,
    });

    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error summarizing email with OpenAI:', error);
    throw error;
  }
}
