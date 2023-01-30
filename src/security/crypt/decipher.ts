import { crypt } from '~/src/libs/helpers'
import { json } from '~/src/libs/functions'
import { config } from '.'

// prettier-ignore
export function decipher<Payload>(ciphered, key = config.key, iv = config.iv) {

  // prepare
  const CIPHERED  = Buffer.from(ciphered, 'hex')
  const KEY       = Buffer.from(key,      'hex')
  const IV        = Buffer.from(iv,       'hex')
  
  
  // instance
  const decipher = crypt.createDecipheriv(config.algo, KEY, IV)
  

  // deciphering
  const deciphered = Buffer.concat([
    decipher.update(CIPHERED), 
    decipher.final()
  ]).toString() 
  
  
  // formating
  const payload = json.parse<Payload>(deciphered).outcome


  // response
  return { payload }
}
