import { argv } from "node:process";

const parseArgs = () => {
  const args = argv.slice(2);
  let result = "";

  for (let i = 0; i < args.length; i += 2) {
    result += `${args[i].replace('--', '')} is ${args[i + 1]}, `;
  }
  console.log(result);
};

parseArgs();
