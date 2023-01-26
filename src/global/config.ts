import { env } from "./env";
import { cors } from "~/src/libs/helpers";

export const config = () => {
  const salt = global.salt || globalThis.salt;

  return {
    appName: "Backend",
    salt,
    allowedOrigins: cors.parseAllowedOrigins(env().CORS_ORIGIN),
    cacheDuration: "8 hours",
    tokenExpiration: "3 hours",
    emailDefault: {
      from: "user1@provider1.com",
      to: "user2@provider2.com",
      subject: "Welcome",
      text: "Hello World"
    }
  };
};
