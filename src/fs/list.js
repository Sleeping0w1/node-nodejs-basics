import fs from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesPath = path.join(__dirname, "/files");

const list = async () => {
  try {
    const files = await fs.readdir(filesPath);
    files.forEach((file) => console.log(file));
  } catch (err) {
    if (err.code == "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await list();
