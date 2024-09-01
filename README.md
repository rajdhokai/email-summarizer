# Email Summarizer and Actionable Insights Generator

This project is designed to simplify email management by summarizing long email threads and extracting actionable items such as deadlines, tasks, and key points. The extracted insights are then organized into a to-do list or calendar events.

## Features

- **Email Summarization:** Automatically summarize long email threads.
- **Actionable Insights:** Extract key points, tasks, and deadlines from emails.
- **Integration with Nylas:** Access and analyze email content from various providers.
- **AI-Powered:** Uses OpenAI and Google Gemini (optional) for natural language processing.

## Prerequisites

Before you start, make sure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **NPM**: Comes with Node.js, used for managing project dependencies.
- **Git**: [Download and install Git](https://git-scm.com/)

## Environment Setup

1. **Clone the Repository**

   Clone the project repository to your local machine using Git:

   ```bash
   git clone https://github.com/your-username/email-summarizer.git
   cd email-summarizer
   ```

2. **Install Dependencies**

   Navigate to the project directory and install the required Node.js packages:

   ```bash
   npm install
   ```

3. **Create an Environment File**

   Create a `.env` file in the root directory of the project and add the following environment variables:

   ```env
   NYLAS_API_KEY=your_nylas_api_key
   NYLAS_API_URI=your_nylas_api_uri
   NYLAS_USER_GRANT_ID=your_user_grant_id
   GEMINI_API_KEY=your_gemini_api_key
   OPENAI_API_KEY=your_openai_api_key
   ```

   Replace `your_nylas_api_key`, `your_nylas_api_uri`, `your_user_grant_id`, `your_openai_api_key`, and `your_gemini_api_key` with your actual API keys and user grant ID.


   Replace the placeholder values (`your_nylas_client_id`, etc.) with your actual API credentials.

   - **Nylas API Keys**: Sign up at [Nylas](https://www.nylas.com/) and create a new application to get your `Client ID`, `Client Secret`, and `Access Token`.
   - **OpenAI API Key**: Sign up at [OpenAI](https://platform.openai.com/) to obtain your API key.
   - **Google Gemini API Key**: If you're using Google Gemini, sign up at [Google Cloud](https://cloud.google.com/) to get your API key.

## Running the Project

1. **Start the Server**

   Run the following command to start the Express server:

   ```bash
   node server.js
   ```

   The server will start running on `http://localhost:3000`.

2. **Access the API**

   - **Summarize Emails with OpenAI**: Visit `http://localhost:3000/emails` in your browser or use a tool like Postman to make a GET request. This will fetch emails and summarize them using OpenAI.
   - **Summarize Emails with Gemini**: Visit `http://localhost:3000/categorize-email-gemini` to fetch and summarize emails using Google Gemini.

3. **View the Results**

   The API will return JSON data containing the summarized emails and extracted actionable items. You can use this data to build further applications, such as integrating it with a to-do list or calendar.

## Project Structure

Here's a brief overview of the project structure:

```
email-summarizer/
│
├── server.js                # Main server file
├── nylasClient.js           # Nylas API interaction
├── openaiClient.js          # OpenAI interaction for summarization
├── geminiClient.js          # Google Gemini interaction for summarization
├── package.json             # Project dependencies
└── .env                     # Environment variables (not pushed to GitHub)
```

## Troubleshooting

- **Common Errors:**
  - Ensure that your `.env` file is correctly configured with valid API keys.
  - Double-check that all dependencies are installed by running `npm install`.
  - If the server isn't running, check for errors in the terminal output and ensure Node.js is correctly installed.

- **Testing API Calls:**
  - Use [Postman](https://www.postman.com/) or [cURL](https://curl.se/) to test your API routes.

## Contributing

Feel free to open issues or submit pull requests if you have suggestions or improvements for the project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, you can ping me.