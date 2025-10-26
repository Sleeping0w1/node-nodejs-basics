import { Worker } from "worker_threads";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const workerFile = path.join(__dirname, "worker.js");

const performCalculations = async () => {
  const promises = os.cpus().map((cup, index) => {
    return new Promise((resolve) => {
      const worker = new Worker(workerFile, { workerData: 10 + index });
      worker.on("message", (data) => {
        resolve({ status: "resolved", data: data });
      });
      worker.on("error", () => {
        resolve({
          status: "error",
          data: null,
        });
      });
    });
  });
  console.log('Results:', await Promise.all(promises));
};

await performCalculations();
