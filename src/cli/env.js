import { env } from 'node:process';
const parseEnv = () => {
  let result = '';
  for (const key in env) {
    if (key.startsWith('RSS_')) {
      result += `${key}=${env[key]}; `;
    }
  }
  console.log(result);
};

parseEnv();
