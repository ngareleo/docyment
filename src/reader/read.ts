// Read code from project and encode that information
// Given a path, it will recursively read all files and directories until we eun out of tokens

import { readdir } from "node:fs/promises";

export async function encodeProject(path: string) {
  const encoding = [];
  const files = await readdir(path, { recursive: true });
  for (const file of files) {
    const f = Bun.file(`${path}/${file}`);
    if (!f.exists() || f.type === "") continue;
    const content = await f.text();
    encoding.push({ content, file });
  }
  return encoding;
}
