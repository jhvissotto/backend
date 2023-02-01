// prettier-ignnce
// import { app } from '~/src'
// import {  } from '~/src/libs'

import { promiser } from '~/src/libs/helpers/operators'

// async function asyncFoo(): Promise<{ data: string; error: string }> {
//   return new Promise((resolve, reject) => {
//     reject({
//       data: 'data',
//       error: 'error',
//     })
//   })
// }

async function Main() {
  await promiser({
    cond: true,
    prms: 'reject',
    wait: 1500,
  })
}

Main()
