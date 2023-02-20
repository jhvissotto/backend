import { z } from '~/src/libs/helpers/schema'

export const signals = {
  TEST: {
    name: 'test',
    zPayload: z.object({}),
  },
}
