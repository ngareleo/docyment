import OpenAI from "openai";
import { prompt } from "./prompts/simple.simple";
import { encodeProject } from "./reader/read";

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

export async function explainProject() {
  const encoding = await encodeProject("./src/labs/control-tower");
  const promptWithSnippet = prompt.replace(
    "{CODE_SNIPPET}",
    JSON.stringify(encoding)
  );
  const completion = await client.chat.completions.create({
    messages: [{ role: "system", content: promptWithSnippet }],
    model: "gpt-4",
  });
  console.log(completion.choices[0].message.content);
}
