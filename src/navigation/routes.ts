import * as auth from '~/src/components/auth'
console.log('auth', auth)
// import { route as crypt_genSalt } from "~/src/components/crypt/genSalt/configs/route";

// import { route as database_select } from "~/src/components/database/select/configs/route";
// import { route as cache_test } from "~/src/components/cache/test/configs/route";
// import { route as cache_clear } from "~/src/components/cache/clear/configs/route";
// import { route as test } from "~/src/components/test/configs/route";
// import { route as home } from "~/src/components/home/configs/route";

import * as router from './router/types'

export type Route = {
  name: string
  active: boolean
  method: router.Methods
  pattern: string
  mids: router.Handler[] | any[]
  ctrl: router.Handler | any
}

console.log('auth.route', auth.route)
export const routes: Route[] = [
  // // crypt
  // crypt_genSalt,
  // auth
  auth.route,
  // // database
  // database_select,
  // // cache
  // cache_test,
  // cache_clear,
  // // start
  // test,
  // home
]

console.log('routes', routes)
