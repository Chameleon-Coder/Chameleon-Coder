const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "text-davinci-002",
  prompt: "Brainstorm some ideas combining VR and fitness:",
  temperature: 0.6,
  max_tokens: 150,
  top_p: 1.0,
  frequency_penalty: 1,
  presence_penalty: 1,
});
