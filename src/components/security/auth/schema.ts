// libs
import { z } from '~/src/libs/helpers/schema'
import { cast } from '~/src/libs/functions'
// app
import { ctrl } from '~/src'
import { model } from '~/src/database'

// ========================================================= //
// ======================== REQUEST ======================== //
// ========================================================= //
export const zReq = z.object({
  params: z.object({}),
  query: z.object({}),
  body: z.object({}),
})

export type Req = z.infer<typeof zReq>

//
//
//
// ========================================================== //
// ======================== RESPONSE ======================== //
// ========================================================== //
export type Res = ReturnType<
  typeof ctrl.newForm<
    // ======== validation ======== //
    /* Validation_Params */ {},
    /* Validation_Query */ {},
    /* Validation_Body */ {},
    // ======== output ======== //
    /* Props_Meta */ {},
    /* Props */ {},
    // ======== list ======== //
    /* List_Meta */ {},
    /* List_Item */ {},
    // ======== multiple lists ======== //
    /* Resources_Meta */ {},
    /* Resources */ {}
  >
>
