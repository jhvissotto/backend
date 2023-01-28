import { auth, cache, crypt, database, home, test } from '~/src/components'
import { routes } from '.'

// prettier-ignore
export function initialize() {
  // ====================== //
  // ======== AUTH ======== //
  // ====================== //
  routes.add({
    name:         auth.defs.name,
    active:       auth.defs.active,
    method:       auth.defs.method,
    pattern:      auth.defs.pattern,
    ctrl:         auth._ctrl
  }, {
    z_schema:     auth.z_schemaReq,
    canSanitize:  auth.defs.canSanitize,
    canCache:     auth.defs.canCache
  })
  // ======================= //
  // ======== CACHE ======== //
  // ======================= //
  routes.add({
    name:         cache.test.defs.name,
    active:       cache.test.defs.active,
    method:       cache.test.defs.method,
    pattern:      cache.test.defs.pattern,
    ctrl:         cache.test._ctrl
  }, {
    z_schema:     cache.test.z_schemaReq,
    canSanitize:  cache.test.defs.canSanitize,
    canCache:     cache.test.defs.canCache
  })
  routes.add({
    name:         cache.clear.defs.name,
    active:       cache.clear.defs.active,
    method:       cache.clear.defs.method,
    pattern:      cache.clear.defs.pattern,
    ctrl:         cache.clear._ctrl
  }, {
    z_schema:     cache.test.z_schemaReq,
    canSanitize:  cache.test.defs.canSanitize,
    canCache:     cache.test.defs.canCache
  })
  // ======================= //
  // ======== CRYPT ======== //
  // ======================= //
  routes.add({
    name:         crypt.saltCreate.defs.name,
    active:       crypt.saltCreate.defs.active,
    method:       crypt.saltCreate.defs.method,
    pattern:      crypt.saltCreate.defs.pattern,
    ctrl:         crypt.saltCreate._ctrl
  }, {
    z_schema:     crypt.saltCreate.z_schemaReq,
    canSanitize:  crypt.saltCreate.defs.canSanitize,
    canCache:     crypt.saltCreate.defs.canCache
  })
  routes.add({
    name:         crypt.hashMake.defs.name,
    active:       crypt.hashMake.defs.active,
    method:       crypt.hashMake.defs.method,
    pattern:      crypt.hashMake.defs.pattern,
    ctrl:         crypt.hashMake._ctrl
  }, {
    z_schema:     crypt.hashMake.z_schemaReq,
    canSanitize:  crypt.hashMake.defs.canSanitize,
    canCache:     crypt.hashMake.defs.canCache
  })
  // ========================== //
  // ======== DATABASE ======== //
  // ========================== //
  routes.add({
    name:         database.select.defs.name,
    active:       database.select.defs.active,
    method:       database.select.defs.method,
    pattern:      database.select.defs.pattern,
    ctrl:         database.select._ctrl
  }, {
    z_schema:     database.select.z_schemaReq,
    canSanitize:  database.select.defs.canSanitize,
    canCache:     database.select.defs.canCache
  })
  // ======================= //
  // ======== START ======== //
  // ======================= //
  routes.add({
    name:         test.defs.name,
    active:       test.defs.active,
    method:       test.defs.method,
    pattern:      test.defs.pattern,
    ctrl:         test._ctrl
  }, {
    z_schema:     test.z_schemaReq,
    canSanitize:  test.defs.canSanitize,
    canCache:     test.defs.canCache
  })
  
  routes.add({
    name:         home.defs.name,
    active:       home.defs.active,
    method:       home.defs.method,
    pattern:      home.defs.pattern,
    ctrl:         home._ctrl
  }, {
    z_schema:     home.z_schemaReq,
    canSanitize:  home.defs.canSanitize,
    canCache:     home.defs.canCache
  })
}
