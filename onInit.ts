import { genSaltSync } from 'bcrypt'

export function onInit() {
  const salt = genSaltSync()
  global['salt'] = salt
  globalThis['salt'] = salt
}
