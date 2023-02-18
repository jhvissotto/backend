// libs
import type { Ctrl } from '~/src/libs/packs/Express'
// app
import * as mids from '~/src/middlewares'
import { E } from '~/src'

//
//
// ========================================= //
// ================ HANDLER ================ //
// ========================================= //
export type Handler = Ctrl.Handler

// ========================================= //
// ================ REQUEST ================ //
// ========================================= //
export type Req<Params, Query, Body> = Ctrl.Req<Params, never, Body, Query> & {
  middlewares?: {
    validation?: mids.Validation
    auth?: mids.Auth
  }
}

// ========================================== //
// ================ RESPONSE ================ //
// ========================================== //
// prettier-ignore
export type Res<Body = any> = Ctrl.Res<Body, {
  errors: E.Locals
}>

// ====================================== //
// ================ NEXT ================ //
// ====================================== //
export type Next = Ctrl.Next
