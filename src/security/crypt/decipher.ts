import { crypt } from '~/src/libs/helpers'
import { config } from '.'

// prettier-ignore
export function decipher<Payload>(ciphered, key = config.key, iv = config.iv) {

  // prepare
  let CIPHERED = Buffer.from(ciphered, 'hex')
  let      KEY = Buffer.from(     key, 'hex')
  let       IV = Buffer.from(      iv, 'hex')
  
  
  // instance
  let decipher = crypt.createDecipheriv(config.algo, KEY, IV)
  

  // transform
  let payload = Buffer.concat([
    decipher.update(CIPHERED), 
    decipher.final()
  ]).toString() as Payload
  


  // response
  return { payload }
}
