import { auth, crypt, database } from '~/src/components'
import { routes } from '.'

// prettier-ignore
export function initialize() {
  // ======== AUTH ======== //
  routes.add({
    name: auth.defs.name,
    active: auth.defs.active,
    method: auth.defs.method,
    pattern: auth.defs.pattern,
    ctrl: auth._ctrl
  }, {
    z_schema: auth.z_schemaReq,
    canSanitize: auth.defs.canSanitize,
    canCache: auth.defs.canCache
  })
  // ======== CRYPT ======== //
  routes.add({
    name: crypt.saltCreate.defs.name,
    active: crypt.saltCreate.defs.active,
    method: crypt.saltCreate.defs.method,
    pattern: crypt.saltCreate.defs.pattern,
    ctrl: crypt.saltCreate._ctrl
  }, {
    z_schema: crypt.saltCreate.z_schemaReq,
    canSanitize: crypt.saltCreate.defs.canSanitize,
    canCache: crypt.saltCreate.defs.canCache
  })
  routes.add({
    name: crypt.hashMake.defs.name,
    active: crypt.hashMake.defs.active,
    method: crypt.hashMake.defs.method,
    pattern: crypt.hashMake.defs.pattern,
    ctrl: crypt.hashMake._ctrl
  }, {
    z_schema: crypt.hashMake.z_schemaReq,
    canSanitize: crypt.hashMake.defs.canSanitize,
    canCache: crypt.hashMake.defs.canCache
  })
  // ======== DATABASE ======== //
  routes.add({
    name: database.select.defs.name,
    active: database.select.defs.active,
    method: database.select.defs.method,
    pattern: database.select.defs.pattern,
    ctrl: database.select._ctrl
  }, {
    z_schema: database.select.z_schemaReq,
    canSanitize: database.select.defs.canSanitize,
    canCache: database.select.defs.canCache
  })
}
