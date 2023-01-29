// import { config as envInit } from 'dotenv'
import { genSaltSync } from 'bcrypt'

export function onInit() {
  // envInit()

  const salt = genSaltSync()
  global['salt'] = salt
  globalThis['salt'] = salt
}
