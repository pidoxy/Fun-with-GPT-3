import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const prompt = req.body.prompt || '';
  if (prompt.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid prompt",
      }
    });
    return;
  }

  try {
    // const completion = await openai.createCompletion({
    //   model: "text-davinci-003",
    //   prompt: generatePrompt(prompt),
    //   temperature: 0.6,
    // });
    const response = await openai.createImage({
      // prompt: "A cute baby sea otter",
      prompt: generatePrompt(prompt),
      n: 2,
      size: "1024x1024",
    });
    res.status(200).json({ result: response.data[0].url });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(prompt) {
  const capitalizedPrompt =
    prompt[0].toUpperCase() + prompt.slice(1).toLowerCase();
  return `Suggest three names for an prompt that is a superhero.

Prompt: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Prompt: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Prompt: ${capitalizedPrompt}
Names:`;
}
