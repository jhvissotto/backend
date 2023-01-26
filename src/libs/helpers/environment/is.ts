// import { config as envInit } from "dotenv";

export function is() {
  // envInit();
  return {
    dev: ["dev", "development"].includes(process.env.NODE_ENV),
    prod: ["prod", "production"].includes(process.env.NODE_ENV),
  };
}
