const dotenv = require("dotenv");
const { Configuration, OpenAIApi } = require("openai");

dotenv.config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function fetchLLMResponse(req, res, next) {
  // Error handling
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message:
          "OpenAI API key not configured, please follow instructions in README.md",
      },
    });
    return;
  }
  try {
    userPrompt = req.body.submission;
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      max_tokens: 300,
      prompt: `${userPrompt}`,
      temperature: 0.6,
    });
    req.completionResult = completion.data.choices[0].text;
    next();
  } catch (error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
}

module.exports = fetchLLMResponse;
