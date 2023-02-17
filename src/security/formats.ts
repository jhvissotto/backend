import { z } from '~/src/libs/helpers/schema'

// prettier-ignore
export const formats = {
  USER_ACCESS: {
    subject: 'User Access',
    zSchema: z.object({
      user_id:      z.string(),
      user_isStaff: z.boolean(),
      user_level:   z.number(),
    }),
  },
}
