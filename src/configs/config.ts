import { readFileSync } from "fs";
import { join } from "path";

interface Config {
  port: number;
}

const configFile = join(process.cwd(), "./config.json");
const configData: Config = JSON.parse(readFileSync(configFile, "utf-8"));
export default configData;
