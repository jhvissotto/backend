// libs
import type { Ctrl } from '~/src/libs/packs/Express'
// app
import type { Validation } from '~/src/middlewares/validator'
import { E } from '~/src'

export type { Handler, Next } from '~/src/libs/packs/Express/Controller'

// ========================= //
// ======== REQUEST ======== //
// ========================= //
export type Req<
  Params,
  Query,
  Body
  // Other
> = Ctrl.Req<Params, never, Body, Query> & {
  validation: Validation
}

// ========================= //
// ======== REPONSE ======== //
// ========================= //
// prettier-ignore
export type Res<Body = any> = Ctrl.Res<Body, {
  errors: E.Locals
}>
