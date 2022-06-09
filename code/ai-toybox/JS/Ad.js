const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "text-davinci-002",
  prompt: "Write a creative ad for the following product to run on Facebook aimed at parents:\n\nProduct: Learning Room is a virtual environment to help students from kindergarten to high school excel in school.",
  temperature: 0.5,
  max_tokens: 60,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
});