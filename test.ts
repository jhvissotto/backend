// =========================== //
// ======== EXAMPLE 1 ======== //
// =========================== //
import { app } from '~/src'

const canCache = app.comps.auth.defs.canCache

console.log('canCache', canCache)

// =========================== //
// ======== EXAMPLE 2 ======== //
// =========================== //
import { defs } from '~/src/components/auth/defs'

const { canCache } = defs

console.log('canCache', canCache)
