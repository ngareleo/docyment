// Read code from project and encode that information
// Given a path, it will recursively read all files and directories until we eun out of tokens

import { readdir } from "node:fs/promises";

export async function encodeProject(path: string) {
  const encoding = [];
  const files = await readdir(path, { recursive: true });
  for (const file of files) {
    try {
      const content = await Bun.file(`${path}/${file}`).text();
      encoding.push({ content, file });
    } catch (error) {}
  }
  return encoding;
}
