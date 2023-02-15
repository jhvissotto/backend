import { z } from '~/src/libs/helpers/schema'
import { cast } from '~/src/libs/functions'

export const schema = z.object({
  params: z.object({}),
  query: z.object({}),
  body: z.object({}),
})

export type Schema = z.infer<typeof schema>
