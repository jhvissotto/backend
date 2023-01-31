// libs
import type { Mid } from '~/src/libs/packs/Express'
// app
import type { E } from '~/src'
//
//
//
//
//
//
//
export type { Req, Next, Handler } from '~/src/libs/packs/Express/Middleware'

// ========================== //
// ======== RESPONSE ======== //
// ========================== //
// prettier-ignore
export type Res<Body = any> = Mid.Res<Body, {
    errors: E.Locals
}>
