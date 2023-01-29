// import { z } from '~/src/libs/utils/validator'
// import { model } from '~/src/database'

import { libs } from './src'

// try {
//   const S = z.enum(model.tables)

//   const val = 'td_postxx'

//   const r = S.parse(val)

//   console.log('r', r)
// } catch (e) {
//   console.log('e', e)
// }

// import B from 'node:buffer'

// const key = 'abc123'

// const payload = {
//   user: 'user',
//   level: 'level',
// }

// const KEY = B.Buffer.from(key, 'base64')
// const PL = B.Buffer.from(JSON.stringify(payload), 'base64')

// // console.log('PL', typeof PL)

// const x = Calc.privateEncrypt(KEY, PL)

// console.log('x', x)

// const salt = 'sald'
// const payload = 'message'

// const Cipher = crypto.createCipher('aes-128-cbc', salt)
// const ciphered = Cipher.update(payload, 'utf8', 'hex')

// console.log('ciphered', ciphered)

// var mykey = crypto.createCipheriv('aes-128-cbc', 'mypassword', 'hex')
// var mystr = mykey.update('abc', 'utf8', 'hex')
// // mystr += mykey.final('hex')

// console.log(mystr)

// const mykey = crypto.createDecipheriv('aes-128-cbc', 'mypassword', null);
// const mystr = mykey.update('34feb914c099df25794bf9ccb85bea72', 'hex', 'utf8')
// mystr += mykey.final('utf8');

// function createCipheriv(algorithm: CipherCCMTypes, key: CipherKey, iv: BinaryLike, options: CipherCCMOptions): CipherCCM;
// function createCipheriv(algorithm: CipherOCBTypes, key: CipherKey, iv: BinaryLike, options: CipherOCBOptions): CipherOCB;
// function createCipheriv(algorithm: CipherGCMTypes, key: CipherKey, iv: BinaryLike, options?: CipherGCMOptions): CipherGCM;
// function createCipheriv(algorithm: string, key: CipherKey, iv: BinaryLike | null, options?: stream.TransformOptions): Cipher;

// const key = crypto.randomBytes(32)
// // const iv = crypto.randomBytes(16)
// const iv = crypto.randomBytes(16)

// function encrypt(text) {
//   let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv)

//   let encrypted = cipher.update(text)

//   encrypted = Buffer.concat([encrypted, cipher.final()])

//   return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') }
// }

// var output = encrypt('GeeksforGeeks')
// console.log(output)

// const iv = 'b74f42388a36cce6363800db1796db22'
// const encryptedData = '257580c1b61098d10d6dd9f2b3697a2d'

// import { crypt } from '~/src/security'

// const payload = 'message'
// type Payload

// const x = crypt.cipher(payload)

// console.log('x', x)

// const y = crypt.decipher(x.ciphered)

// console.log('y', y)

import { json } from '~/src/libs/functions'

// const payload = 'message'
const payload = { user: 'user', pass: 1234 }
// const payload = [{ user: 'user', pass: 1234 }]

type Outcome1 = { user1: string; pass1: number }
type Outcome2 = { user2: boolean; pass2: boolean }
