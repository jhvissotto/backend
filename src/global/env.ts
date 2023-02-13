import { environment } from '~/src/libs/helpers'
import { is } from '~/src/libs/functions/check'
import { cast } from '~/src/libs/functions'

// prettier-ignore
export function env() {
  environment.initialize()
  const { env } = process

  return {
    // ====================================== //
    // ================ MAIN ================ //
    // ====================================== //
    
    // SERVER
    NODE_ENV:         env.NODE_ENV,
    PORT:             env.PORT,
    BASE_URL:         env.BASE_URL,

    // SECURITY
    CORS_ORIGIN:      env.CORS_ORIGIN,
    APP_KEY_PUBLIC:   env.APP_KEY_PUBLIC,
    APP_KEY_PRIVATE:  env.APP_KEY_PRIVATE,



    // ========================================== //
    // ================ DATABASE ================ //
    // ========================================== //

    // RELATIONAL
    DATABASE_USER:    env.DATABASE_USER,
    DATABASE_PASS:    env.DATABASE_PASS,
    DATABASE_HOST:    env.DATABASE_HOST,
    DATABASE_PORT:    Number(env.DATABASE_PORT),
    DATABASE_NAME:    env.DATABASE_NAME,
    DATABASE_DEBUG:   is.True.vs(env.DATABASE_DEBUG),

    // JSON
    DB_URL:           env.DB_URL,



    // ======================================= //
    // ================ CACHE ================ //
    // ======================================= //

    // REDIS
    REDIS_URL:              env.REDIS_URL,

    // CACHE
    CACHE_APOLLO_ENABLE:    is.True.vs(env.CACHE_APOLLO_ENABLE),
    CACHE_EXPRESS_ENABLE:   is.True.vs(env.CACHE_EXPRESS_ENABLE),
    CACHE_EXPRESS_DEBUG:    is.True.vs(env.CACHE_EXPRESS_DEBUG),

    // API_SELF
    CACHE_APISELF_ENABLE:   is.True.vs(env.CACHE_APISELF_ENABLE),
    CACHE_APISELF_HOURS:    cast.number(env.CACHE_APISELF_HOURS),


    
    // ========================================== //
    // ================ SERVICES ================ //
    // ========================================== //

    // EMAIL
    SGM_KEY_TOKEN:            env.SGM_KEY_TOKEN,

    NODEMAILER_HOST:          env.NODEMAILER_HOST,
    NODEMAILER_PORT:          Number(env.NODEMAILER_PORT),
    NODEMAILER_USER:          env.NODEMAILER_USER,
    NODEMAILER_PASS:          env.NODEMAILER_PASS,

    // SMS
    NEXMO_KEY_PUBLIC:         env.NEXMO_KEY_PUBLIC,
    NEXMO_KEY_PRIVATE:        env.NEXMO_KEY_PRIVATE,
    
    // ASSETS
    CLOUDINARY_CLOUD_NAME:    env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_KEY_PUBLIC:    env.CLOUDINARY_KEY_PUBLIC,
    CLOUDINARY_KEY_PRIVATE:   env.CLOUDINARY_KEY_PRIVATE,

    // STORAGE
    S3_KEY_PUBLIC:            env.S3_KEY_PUBLIC,
    S3_KEY_PRIVATE:           env.S3_KEY_PRIVATE,
    S3_BUCKET:                env.S3_BUCKET,
    S3_REGION:                env.S3_REGION,

    DBX_KEY_TOKEN:            env.DBX_KEY_TOKEN,
  }
}
