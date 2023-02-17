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
  params: z.object({
    table: z.enum(model.tables),
  }),
  query: z.object({
    wk: z.string().optional(),
    we: z.string().optional(),
    wv: z.string().optional(),
    items: z.preprocess(x => cast.number(x) || undefined, z.number().optional()),
    page: z.preprocess(x => cast.number(x) || undefined, z.number().optional()),
    randKey: z.string().optional(),
  }),
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
