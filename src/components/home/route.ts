import { createRoute } from "~/src/navigation/createRoute";
import { defs, _ctrl, z_schemaReq } from ".";

// prettier-ignore
export const route = createRoute({
    name: defs?.name, 
    active: defs?.active, 
    method: defs?.method, 
    pattern: defs?.pattern, 
    ctrl: _ctrl
}, {
    z_schema: z_schemaReq,
    canSanitize: defs?.canSanitize,
    canCache: defs?.canCache,
})
