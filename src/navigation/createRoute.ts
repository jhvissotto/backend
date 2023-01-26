import type { Route } from "~/src/navigation";
import * as mids from "~/src/middlewares";

// prettier-ignore
export function createRoute({ name, active, method, pattern, ctrl }: Omit<Route, 'mids'>, { 
    z_schema, 
    canSanitize, 
    canCache 
}: {
    z_schema:    Parameters<typeof mids.validator>[0], 
    canSanitize: Parameters<typeof mids.validator>[1]['canSanitize'], 
    canCache:    Parameters<typeof mids.cache>[0]['canCache'],
}) {
    return {
        name,
        active,
        method,
        pattern,
        mids: [
            mids.validator(z_schema, { canSanitize }),
            mids.cache({ canCache })
        ],
        ctrl
    }
}
