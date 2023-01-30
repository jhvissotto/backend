import { crypt } from '~/src/libs/helpers'
import { json } from '~/src/libs/functions'
import { config } from '.'

// prettier-ignore
export function cipher<Payload>(payload: Payload, key = config.key, iv = config.iv) {
  
  // prepare
  const PL  = json.stringify(payload).outcome
  const KEY = Buffer.from(key, 'hex')
  const IV  = Buffer.from( iv, 'hex')


  // instance
  const cipher = crypt.createCipheriv(config.algo, KEY, IV)
  
  
  // ciphering
  const ciphered = Buffer.concat([
    cipher.update(PL), 
    cipher.final()
  ]).toString('hex')
  
  
  // response
  return { ciphered }
}
