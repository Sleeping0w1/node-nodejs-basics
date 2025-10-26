import { createReadStream } from "node:fs";
import { createHash } from "node:crypto";
import { stdout } from "node:process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "/files/fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const hash = createHash("sha256");
  const file = createReadStream(filePath);

  hash.setEncoding("hex");

  hash.on("data", (data) => {
    stdout.write(data);
  });

  hash.on("end", () => {
    stdout.write("\n"); // Добавляем перенос строки в конце
  });

  file.pipe(hash);
};

await calculateHash();
