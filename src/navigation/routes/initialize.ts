import { security, cache, database, start } from '~/src/components'
import { routes } from '.'

// prettier-ignore
export function initialize() {
  // ========================== //
  // ======== SECURITY ======== //
  // ========================== //
  routes.add({
    name:           security.keygen.defs.name,
    active:         security.keygen.defs.active,
    method:         security.keygen.defs.method,
    pattern:        security.keygen.defs.pattern,
    ctrl:           security.keygen._ctrl
  }, {
    zSchema:        security.keygen.schema.zReq,
    canSanitize:    security.keygen.defs.canSanitize,
    user_levelReq:  security.keygen.defs.user_levelReq,
    staff_levelReq: security.keygen.defs.staff_levelReq,
    withAuth:       security.keygen.defs.withAuth,
    canCache:       security.keygen.defs.canCache
  })
  routes.add({
    name:           security.auth.defs.name,
    active:         security.auth.defs.active,
    method:         security.auth.defs.method,
    pattern:        security.auth.defs.pattern,
    ctrl:           security.auth._ctrl
  }, {
    zSchema:        security.auth.schema.zReq,
    canSanitize:    security.auth.defs.canSanitize,
    user_levelReq:  security.auth.defs.user_levelReq,
    staff_levelReq: security.auth.defs.staff_levelReq,
    withAuth:       security.auth.defs.withAuth,
    canCache:       security.auth.defs.canCache
  })
  // ======================= //
  // ======== CACHE ======== //
  // ======================= //
  routes.add({
    name:           cache.test.defs.name,
    active:         cache.test.defs.active,
    method:         cache.test.defs.method,
    pattern:        cache.test.defs.pattern,
    ctrl:           cache.test._ctrl
  }, {
    zSchema:        cache.test.schema.zReq,
    canSanitize:    cache.test.defs.canSanitize,
    user_levelReq:  cache.test.defs.user_levelReq,
    staff_levelReq: cache.test.defs.staff_levelReq,
    withAuth:       cache.test.defs.withAuth,
    canCache:       cache.test.defs.canCache
  })
  routes.add({
    name:           cache.clear.defs.name,
    active:         cache.clear.defs.active,
    method:         cache.clear.defs.method,
    pattern:        cache.clear.defs.pattern,
    ctrl:           cache.clear._ctrl
  }, {
    zSchema:        cache.clear.schema.zReq,
    canSanitize:    cache.clear.defs.canSanitize,
    user_levelReq:  cache.clear.defs.user_levelReq,
    staff_levelReq: cache.clear.defs.staff_levelReq,
    withAuth:       cache.clear.defs.withAuth,
    canCache:       cache.clear.defs.canCache
  })
  // ========================== //
  // ======== DATABASE ======== //
  // ========================== //
  routes.add({
    name:           database.select.defs.name,
    active:         database.select.defs.active,
    method:         database.select.defs.method,
    pattern:        database.select.defs.pattern,
    ctrl:           database.select._ctrl
  }, {
    zSchema:        database.select.schema.zReq,
    canSanitize:    database.select.defs.canSanitize,
    user_levelReq:  database.select.defs.user_levelReq,
    staff_levelReq: database.select.defs.staff_levelReq,
    withAuth:       database.select.defs.withAuth,
    canCache:       database.select.defs.canCache
  })
  // ======================= //
  // ======== START ======== //
  // ======================= //
  routes.add({
    name:           start.returnRequest.defs.name,
    active:         start.returnRequest.defs.active,
    method:         start.returnRequest.defs.method,
    pattern:        start.returnRequest.defs.pattern,
    ctrl:           start.returnRequest._ctrl
  }, {
    zSchema:        start.returnRequest.schema.zReq,
    canSanitize:    start.returnRequest.defs.canSanitize,
    user_levelReq:  start.returnRequest.defs.user_levelReq,
    staff_levelReq: start.returnRequest.defs.staff_levelReq,
    withAuth:       start.returnRequest.defs.withAuth,
    canCache:       start.returnRequest.defs.canCache
  })
  
  routes.add({
    name:           start.test.defs.name,
    active:         start.test.defs.active,
    method:         start.test.defs.method,
    pattern:        start.test.defs.pattern,
    ctrl:           start.test._ctrl
  }, {
    zSchema:        start.test.schema.zReq,
    canSanitize:    start.test.defs.canSanitize,
    user_levelReq:  start.test.defs.user_levelReq,
    staff_levelReq: start.test.defs.staff_levelReq,
    withAuth:       start.test.defs.withAuth,
    canCache:       start.test.defs.canCache
  })
  
  routes.add({
    name:           start.home.defs.name,
    active:         start.home.defs.active,
    method:         start.home.defs.method,
    pattern:        start.home.defs.pattern,
    ctrl:           start.home._ctrl
  }, {
    zSchema:        start.home.schema.zReq,
    canSanitize:    start.home.defs.canSanitize,
    user_levelReq:  start.home.defs.user_levelReq,
    staff_levelReq: start.home.defs.staff_levelReq,
    withAuth:       start.home.defs.withAuth,
    canCache:       start.home.defs.canCache
  })
}
