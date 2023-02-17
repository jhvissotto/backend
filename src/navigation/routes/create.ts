import * as mids from '~/src/middlewares'
import type { Route } from '.'

// prettier-ignore
export function create({ name, active, method, pattern, ctrl }: Omit<Route, 'mids'>, {
    zSchema, 
    canSanitize, 
    canCache 
}: {
    zSchema:     Parameters<typeof mids.validator>[0], 
    canSanitize: Parameters<typeof mids.validator>[1]['canSanitize'], 
    canCache:    Parameters<typeof mids.cache>[0]['canCache'],
}) {
    return {
        name,
        active,
        method,
        pattern,
        mids: [
            mids.validator(zSchema, { canSanitize }),
            mids.cache({ canCache })
        ],
        ctrl
    }
}
