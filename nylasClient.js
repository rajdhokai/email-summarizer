// nylasClient.js
import 'dotenv/config';
import Nylas from 'nylas';

const NylasConfig = {
  apiKey: process.env.NYLAS_API_KEY,
  apiUri: process.env.NYLAS_API_URI,
};

const nylas = new Nylas(NylasConfig);

export async function fetchEmails() {
  try {
    const messages = await nylas.messages.list({
      identifier: process.env.NYLAS_GRANT_ID,
      queryParams: {
        limit: 2,
      },
    });    
    return messages.data;
  } catch (error) {
    console.error('Error fetching emails:', error);
    throw error;
  }
}