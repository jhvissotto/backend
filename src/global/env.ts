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
    NODE_ENV:                 env.NODE_ENV,
    PORT:                     env.PORT,

    // SECURITY
    CORS_ORIGIN:              env.CORS_ORIGIN,
    APP_KEY_PUBLIC:           env.APP_KEY_PUBLIC,
    APP_KEY_PRIVATE:          env.APP_KEY_PRIVATE,

    // CACHE
    CACHE_APOLLO_ENABLE:      is.True.vs(env.CACHE_APOLLO_ENABLE),
    CACHE_EXPRESS_ENABLE:     is.True.vs(env.CACHE_EXPRESS_ENABLE),
    CACHE_EXPRESS_DEBUG:      is.True.vs(env.CACHE_EXPRESS_DEBUG),



    // ====================================== //
    // ================ DATA ================ //
    // ====================================== //

    // MYSQL
    DATABASE_URL:             env.DATABASE_URL,
    DATABASE_USER:            env.DATABASE_USER,
    DATABASE_PASS:            env.DATABASE_PASS,
    DATABASE_HOST:            env.DATABASE_HOST,
    DATABASE_PORT:            Number(env.DATABASE_PORT),
    DATABASE_NAME:            env.DATABASE_NAME,
    DATABASE_DEBUG:           is.True.vs(env.DATABASE_DEBUG),

    // MONGO
    DB_URL:                   env.DB_URL,

    // REDIS
    REDIS_BASE_URL:           env.REDIS_BASE_URL,



    // ===================================== //
    // ================ API ================ //
    // ===================================== //

    // API_SELF
    API_SELF_BASE_URL:        env.API_SELF_BASE_URL,
    API_SELF_CACHE_ENABLE:    is.True.vs(env.API_SELF_CACHE_ENABLE),
    API_SELF_CACHE_HOURS:     cast.number(env.API_SELF_CACHE_HOURS),

    // API_TEST
    API_TEST_BASE_URL:        env.API_TEST_BASE_URL,
    API_TEST_CACHE_ENABLE:    is.True.vs(env.API_TEST_CACHE_ENABLE),
    API_TEST_CACHE_HOURS:     cast.number(env.API_TEST_CACHE_HOURS),



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
    


    // ======================================= //
    // ================ FILES ================ //
    // ======================================= //

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
