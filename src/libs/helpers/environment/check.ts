// import { config as envInit } from 'dotenv'

export function check() {
  // envInit()
  return {
    isDev: ['dev', 'development'].includes(process.env.NODE_ENV),
    isTest: ['test'].includes(process.env.NODE_ENV),
    isProd: ['prod', 'production'].includes(process.env.NODE_ENV),

    isServer: typeof window == 'undefined',
    isClient: typeof process == 'undefined',
  }
}
