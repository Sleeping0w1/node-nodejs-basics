import fs from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const files = path.join(__dirname, "/files");
const filesCopy = path.join(__dirname, "/files_copy");

const copy = async () => {
  try {
    await fs.access(filesCopy);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      try {
        await fs.access(files);
        await fs.cp(files, filesCopy, { recursive: true });
        console.log("Directory copied successfully!");
      } catch (error) {
        if (error.code === "ENOENT") {
          throw new Error("FS operation failed");
        }
        throw error;
      }
    } else {
      throw err;
    }
  }
};

await copy();
