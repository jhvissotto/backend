import { z } from '~/src/libs/helpers/schema'
import { cast } from '~/src/libs/functions'

export const zSchema = z.object({
  params: z.object({}),
  query: z.object({
    rounds: z.preprocess(x => cast.number(x) || undefined, z.number().optional()),
  }),
  body: z.object({
    KEY: z.string().optional(),
    password: z.string().optional(),
  }),
})

export type Schema = z.infer<typeof zSchema>
