import { environment } from "~/src/libs/helpers";
import { is } from "~/src/libs/functions/check";

export function env() {
  environment.initialize();

  return {
    // SERVER
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    BASE_URL: process.env.BASE_URL,

    // SECURITY
    CORS_ORIGIN: process.env.CORS_ORIGIN,
    PUBLIC_KEY: process.env.PUBLIC_KEY,
    PRIVATE_KEY: process.env.PRIVATE_KEY,

    // DATABASE
    DATABASE_USER: process.env.DATABASE_USER,
    DATABASE_PASS: process.env.DATABASE_PASS,
    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_PORT: Number(process.env.DATABASE_PORT),
    DATABASE_NAME: process.env.DATABASE_NAME,
    DATABASE_DEBUG: is.True.vs(process.env.DATABASE_DEBUG),

    // DB
    DB_URL: process.env.DB_URL,

    // REDIS
    REDIS_URL: process.env.REDIS_URL,

    // CACHE
    APOLLO_CACHE_ENABLE: is.True.vs(process.env.APOLLO_CACHE_ENABLE),
    EXPRESS_CACHE_ENABLE: is.True.vs(process.env.EXPRESS_CACHE_ENABLE),
    EXPRESS_CACHE_DEBUG: is.True.vs(process.env.EXPRESS_CACHE_DEBUG),

    // EMAIL
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,

    NODEMAILER_HOST: process.env.NODEMAILER_HOST,
    NODEMAILER_PORT: Number(process.env.NODEMAILER_PORT),
    NODEMAILER_AUTH_USER: process.env.NODEMAILER_AUTH_USER,
    NODEMAILER_AUTH_PASS: process.env.NODEMAILER_AUTH_PASS,

    // SMS
    NEXMO_KEY_PUBLIC: process.env.NEXMO_KEY_PUBLIC,
    NEXMO_KEY_PRIVATE: process.env.NEXMO_KEY_PRIVATE
  };
}
