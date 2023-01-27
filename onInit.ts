import { genSaltSync } from 'bcrypt'

export function onInit() {
  // require('@babel/core').transformSync('code', {
  //   plugins: ['@babel/plugin-transform-modules-commonjs'],
  // })

  const salt = genSaltSync()
  global.salt = salt
  globalThis.salt = salt
}
