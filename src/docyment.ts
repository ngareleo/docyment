import OpenAI from "openai";
import { prompt } from "./prompt";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function explainCodeSnippet() {
  const snippet = await Bun.file("./src/sample.py").text();
  const promptWithSnippet = prompt.replace("{CODE_SNIPPET}", snippet);
  const completion = await client.chat.completions.create({
    messages: [{ role: "system", content: promptWithSnippet }],
    model: "gpt-3.5-turbo",
  });
  console.log(completion.choices[0]);
}
