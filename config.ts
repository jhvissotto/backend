import { genSaltSync } from 'bcrypt'

export function config() {
  const salt = genSaltSync()
  global.salt = salt
  globalThis.salt = salt
}
