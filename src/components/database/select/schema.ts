import { z } from '~/src/libs/helpers/schema'
import { cast } from '~/src/libs/functions'
import { model } from '~/src/database'

// prettier-ignore
export const zSchema = z.object({
  params: z.object({
    table: z.enum(model.tables)
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
})

export type Schema = z.infer<typeof zSchema>
