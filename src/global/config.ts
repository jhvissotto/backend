import { cors } from '~/src/libs/helpers'
import { env } from '.'

export const config = () => {
  return {
    appName: 'Backend',
    security_salt: '$2b$10$BpiAbfRC6aNum2lC6CA0oO',
    security_iv: '5de006283df4d5b5d3d457d9b35a6cf8',
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
