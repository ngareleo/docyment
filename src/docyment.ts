import OpenAI from "openai";
import { prompt } from "./prompts/simple.prompt";
import { encodeProject } from "./reader/read";
import fullProjectPrompt from "./prompts/explain-project.prompt";

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
  const encoding = await encodeProject("./labs/control-tower");
  const promptWithSnippet = fullProjectPrompt.replace(
    "{GROUNDING_DATA}",
    JSON.stringify(encoding)
  );
  console.log(promptWithSnippet);
  const completion = await client.chat.completions.create({
    messages: [{ role: "system", content: promptWithSnippet }],
    model: "gpt-4",
  });
  console.log(completion.choices[0].message.content);
}
