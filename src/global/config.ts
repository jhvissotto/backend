import { cors } from '~/src/libs/helpers'
import { env } from '.'

export const config = () => {
  const salt = global.salt || globalThis.salt

  return {
    appName: 'Backend',
    salt,
    cryptIV: '5de006283df4d5b5d3d457d9b35a6cf8',
    allowedOrigins: cors.parseAllowedOrigins(env().CORS_ORIGIN),
    cacheDuration: '8 hours',
    tokenExpiration: '3 hours',
    emailDefault: {
      from: 'user1@provider1.com',
      to: 'user2@provider2.com',
      subject: 'Welcome',
      text: 'Hello World',
    },
  }
}
