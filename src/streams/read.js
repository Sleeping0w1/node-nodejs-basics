import { createReadStream } from "node:fs";
import path from "path";
import { fileURLToPath } from "url";
import { stdout } from "node:process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "/files/fileToRead.txt");

const read = async () => {
  const data = createReadStream(filePath);
  data.on('data', (x) => {
    stdout.write(x);
  })
  data.on('end', () => {
    stdout.write("\n");
  })
};

await read();
