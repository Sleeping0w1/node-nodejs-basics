import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { createGzip, createUnzip } from "node:zlib";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "/files/fileToCompress.txt");
const zipPath = path.join(__dirname, "/files/archive.gz");

const decompress = async () => {
  pipeline(
    createReadStream(zipPath),
    createUnzip(),
    createWriteStream(filePath)
  );
};

await decompress();
