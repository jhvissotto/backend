import { error } from '~/src'
import { newIstance } from '~/src/error'

const A = newIstance()
const B = newIstance()

A.createPush('INVALID_CREDENTIALS')
B.createPush('INVALID_PASS')
error.createPush()('INVALID_TOKEN')

console.log('A.list', A.list)
console.log('B.list', B.list)
console.log('error.list', error.list)
