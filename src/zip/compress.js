import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { createGzip } from "node:zlib";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "/files/fileToCompress.txt");
const zipPath = path.join(__dirname, "/files/archive.gz");

const compress = async () => {
  pipeline(
    createReadStream(filePath),
    createGzip(),
    createWriteStream(zipPath)
  );
};

await compress();
