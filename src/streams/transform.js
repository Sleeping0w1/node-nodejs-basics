import { stdin, stdout } from "node:process";
import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

const transform = async () => {
  await pipeline(
    stdin,
    new Transform({
      transform(chunk, encoding, callback) {
        this.push(chunk.toString().split("").reverse().join("") + '\n');
        callback();
      },
    }),
    stdout
  );
};

await transform();
