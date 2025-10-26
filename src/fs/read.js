import fs from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.join(__dirname, "/files/fileToRead.txt");

const read = async () => {
  try {
    console.log(await fs.readFile(file, { encoding: 'utf8' }));
  } catch (err) {
    if (err.code == "ENOENT") {
      throw new Error("FS operation failed");
    }
    throw err;
  }
};

await read();
