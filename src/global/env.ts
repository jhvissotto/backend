import { environment } from '~/src/libs/helpers'
import { is } from '~/src/libs/functions/check'

export function env() {
  environment.initialize()

  return {
    // SERVER
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    BASE_URL: process.env.BASE_URL,

    // SECURITY
    CORS_ORIGIN: process.env.CORS_ORIGIN,
    APP_KEY_PUBLIC: process.env.APP_KEY_PUBLIC,
    APP_KEY_PRIVATE: process.env.APP_KEY_PRIVATE,

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
    CACHE_APOLLO_ENABLE: is.True.vs(process.env.CACHE_APOLLO_ENABLE),
    CACHE_EXPRESS_ENABLE: is.True.vs(process.env.CACHE_EXPRESS_ENABLE),
    CACHE_EXPRESS_DEBUG: is.True.vs(process.env.CACHE_EXPRESS_DEBUG),

    // EMAIL
    SGM_KEY_API: process.env.SGM_KEY_API,

    NODEMAILER_HOST: process.env.NODEMAILER_HOST,
    NODEMAILER_PORT: Number(process.env.NODEMAILER_PORT),
    NODEMAILER_USER: process.env.NODEMAILER_USER,
    NODEMAILER_PASS: process.env.NODEMAILER_PASS,

    // SMS
    NEXMO_KEY_PUBLIC: process.env.NEXMO_KEY_PUBLIC,
    NEXMO_KEY_PRIVATE: process.env.NEXMO_KEY_PRIVATE,

    // DBX
    DBX_KEY_API: process.env.DBX_KEY_API,
  }
}
