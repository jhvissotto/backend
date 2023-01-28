import { z } from '~/src/libs/utils/validator'
import { cast } from '~/src/libs/functions'

// prettier-ignore
export const schemaReq = {
  params: z.object({
    table: z.string()
  }),
  query: z.object({
    wk: z.string().optional(),
    we: z.string().optional(),
    wv: z.string().optional(),
    items: z.preprocess((x) => cast.number(x) || undefined, z.number().optional()),
    page: z.preprocess((x) => cast.number(x) || undefined, z.number().optional()),
    randKey: z.string().optional()
  }),
  body: z.object({})
};

export const z_schemaReq = z.object(schemaReq)

export module SchemaReq {
  export type Params = z.infer<typeof schemaReq.params>
  export type Query = z.infer<typeof schemaReq.query>
  export type Body = z.infer<typeof schemaReq.body>
}
