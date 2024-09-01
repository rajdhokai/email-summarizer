import express from 'express';
import bodyParser from 'body-parser';
import { fetchEmails } from './nylasClient.js';
import { summarizeAndExtractWithOpenAI } from './openaiClient.js';
import { summarizeAndExtractWithGemini } from './geminiClient.js';

const app = express();
app.use(bodyParser.json());

// Route for summarizing emails and extracting actionable items using OpenAI
app.get('/emails', async (req, res) => {
  try {
    const emails = await fetchEmails();
    
    const summarizedEmails = await Promise.all(emails.map(async (email) => {
      const summary = await summarizeAndExtractWithOpenAI(email.body);
      return { ...email, summary };
    }));
    
    console.log('summarizedEmails with OpenAI', summarizedEmails);
    res.json(summarizedEmails);
  } catch (error) {
    res.status(500).send('Error summarizing or extracting actionable items from emails using OpenAI');
  }
});

// Route for summarizing emails and extracting actionable items using Gemini
app.get('/summarize-email-gemini', async (req, res) => {
  try {
    const emails = await fetchEmails();
    
    const summarizedEmails = await Promise.all(emails.map(async (email) => {
      const summary = await summarizeAndExtractWithGemini(email.body);
      return { ...email, summary };
    }));
    
    console.log('summarizedEmails with Gemini', summarizedEmails);
    res.json(summarizedEmails);
  } catch (error) {
    res.status(500).send('Error summarizing or extracting actionable items from emails using Gemini');
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
