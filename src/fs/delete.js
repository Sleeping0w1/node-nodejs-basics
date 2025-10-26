import fs from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "/files/fileToRemove.txt");

const remove = async () => {
  try {
    await fs.rm(filePath);
  } catch (err) {
    if (err.code == "ENOENT") {
      throw new Error("FS operation failed");
    }
    throw err;
  }
};

await remove();
