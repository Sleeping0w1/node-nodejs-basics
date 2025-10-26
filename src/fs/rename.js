import fs from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "/files/wrongFilename.txt");
const newFilePath = path.join(__dirname, "/files/properFilename.md");

const rename = async () => {
  try {
    await fs.access(newFilePath);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code == "ENOENT") {
      try {
        await fs.rename(filePath, newFilePath);
      } catch (err) {
        if (err.code == "ENOENT") {
          throw new Error("FS operation failed");
        }
        throw err;
      }
    } else {
      throw err;
    }
  }
};

await rename();
