import { crypt } from '~/src/libs/helpers'
import { config } from '.'

// prettier-ignore
export function cipher(payload, key = config.key, iv = config.iv) {
  
  // prepare
  let KEY = Buffer.from(key, 'hex')
  let  IV = Buffer.from( iv, 'hex')


  // instance
  let cipher = crypt.createCipheriv(config.algo, KEY, IV)
  
  
  // transform
  let ciphered = Buffer.concat([
    cipher.update(payload), 
    cipher.final()
  ]).toString('hex')
  
  
  // response
  return { ciphered }
}
