import * as mids from '~/src/middlewares'
import type { Route } from '.'

// prettier-ignore
export function create(
    // ================ controller ================ //
    { name, active, method, pattern, ctrl }: Omit<Route, 'mids'>, 
    // ================ middlewares ================ //
    { zSchema, canSanitize,  user_levelReq, staff_levelReq, withAuth,  canCache }: {
        zSchema:        Parameters<typeof mids.validator>[0], 
        canSanitize:    Parameters<typeof mids.validator>[1]['canSanitize'], 
        user_levelReq:  Parameters<typeof mids.auth>[0]['user_levelReq'], 
        staff_levelReq: Parameters<typeof mids.auth>[0]['staff_levelReq'], 
        withAuth:       Parameters<typeof mids.auth>[1]['withAuth'], 
        canCache:       Parameters<typeof mids.cache>[0]['canCache'],
    }
)   {
    // ================ body ================ //
    return {
        name,
        active,
        method,
        pattern,
        mids: [
            mids.validator(zSchema, { canSanitize }),
            mids.auth({ user_levelReq, staff_levelReq }, { withAuth }),
            mids.cache({ canCache })
        ],
        ctrl
    }
}
