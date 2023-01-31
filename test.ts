// prettier-ignore
import { func } from '~/src/libs'
// import { app } from '~/src'

const isEmpty = func.check.is.empty(NaN)

console.log('isEmpty', isEmpty)

// import joi from 'ajv'

// const schema = joi.object({
//   id: joi.number(),
//   name: joi.string(),
//   good: joi.boolean(),
// })

// const test = {
//   id: '123',
//   name: 'user',
//   good: 'trues',
// }

// async function Main() {
//   const x = await schema.validate(test)
//   //   .then(r=>r,e=>e)

//   console.log('x', x)
// }

// Main()

// import * as Sss from 'superstruct'

// const schema = Sss.object({
//   id: Sss.number(),
//   name: Sss.string(),
//   good: Sss.boolean(),
// })

// const data = {
//   id: '123',
//   name: 'user',
//   good: 'trues',
// }

// const x = Sss.is(data, schema)

// console.log('x', x)
