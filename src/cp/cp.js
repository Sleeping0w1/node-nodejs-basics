import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const scriptFile = path.join(__dirname, "files/script.js");

const spawnChildProcess = async (args) => {
  spawn('node', [scriptFile, ...(Array.isArray(args) ? args : [args])], {stdio: 'inherit'});
};

// Put your arguments in function call to test this functionality
spawnChildProcess([123, 11, 3]);
