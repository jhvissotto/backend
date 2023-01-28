import { z } from '~/src/libs/utils/validator'
import { cast } from '~/src/libs/functions'

export const schemaReq = {
  params: z.object({}),
  query: z.object({
    rounds: z.preprocess(x => cast.number(x) || undefined, z.number().optional()),
  }),
  body: z.object({}),
}

export const z_schemaReq = z.object(schemaReq)

export module SchemaReq {
  export type Params = z.infer<typeof schemaReq.params>
  export type Query = z.infer<typeof schemaReq.query>
  export type Body = z.infer<typeof schemaReq.body>
}
