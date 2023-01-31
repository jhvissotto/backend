// prettier-ignore
// import {  } from '~/src/libs'
// import { app } from '~/src'

import { promisify } from '~/src/libs/functions/operators'

async function Main() {
  const { result, error, catched, isError, isSuccess } = await promisify(() => {})
}

// type Route = {
//   pattern: string
//   active: boolean
// }

// type R = Record<string, Route>

// const routes: R = {
//   first: {
//     pattern: '/home',
//     active: true,
//   },
//   second: {
//     pattern: '/contact',
//     active: false,
//   },
// }
