import { routes } from '~/src/navigation'
import { defs, schema, _ctrl } from '../'

// prettier-ignore
export const route = routes.create({
    name:       defs?.name,
    active:     defs?.active,
    method:     defs?.method,
    pattern:    defs?.pattern,
    ctrl:       _ctrl
}, {
    zSchema:        schema.zReq,
    canSanitize:    defs?.canSanitize,
    user_levelReq:  defs?.user_levelReq,
    staff_levelReq: defs?.staff_levelReq,
    withAuth:       defs?.withAuth,
    canCache:       defs?.canCache
})
