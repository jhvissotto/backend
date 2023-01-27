// local
import * as comp from '../'
// app
import { createRoute } from '~/src/navigation'

// prettier-ignore
export const route = createRoute({
    name:           comp.defs.name, 
    active:         comp.defs.active, 
    method:         comp.defs.method, 
    pattern:        comp.defs.pattern, 
    ctrl:           comp._ctrl
}, {
    z_schema:       comp.z_schemaReq,
    canSanitize:    comp.defs.canSanitize,
    canCache:       comp.defs.canCache,
})
