import { nav } from '~/src'
import { auth } from '~/src/components'

// import { route as crypt_genSalt } from "~/src/components/crypt/genSalt/configs/route";
// import { route as database_select } from "~/src/components/database/select/configs/route";
// import { route as cache_test } from "~/src/components/cache/test/configs/route";
// import { route as cache_clear } from "~/src/components/cache/clear/configs/route";
// import { route as test } from "~/src/components/test/configs/route";
// import { route as home } from "~/src/components/home/configs/route";

export function initialize() {
  const routes: nav.Route[] = [
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

  return { routes }
}
