import { createWriteStream } from "node:fs";
import path from "path";
import { fileURLToPath } from "url";
import { stdin } from "node:process";
import { pipeline } from "node:stream/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "/files/fileToWrite.txt");

const write = async () => {
  await pipeline(stdin, createWriteStream(filePath));
};

await write();
