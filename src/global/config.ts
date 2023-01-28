// global
// import {  } from '~/src/global'
// libs
import { cors } from '~/src/libs/helpers'
// app
// import {  } from '~/src'
// local
import { env } from '.'

export const config = () => {
  const salt = global.salt || globalThis.salt

  return {
    appName: 'Backend',
    salt,
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
