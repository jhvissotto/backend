import { app } from '~/src'

const hash0 = app.security.bcrypt.hash_make('pass0').hash
console.log('hash0', hash0)
const hash1 = app.security.bcrypt.hash_make('pass1').hash
console.log('hash1', hash1)
const hash2 = app.security.bcrypt.hash_make('pass2').hash
console.log('hash2', hash2)
const hash3 = app.security.bcrypt.hash_make('pass3').hash
console.log('hash3', hash3)
