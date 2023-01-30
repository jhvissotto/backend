import { z } from '~/src/libs/helpers/schema'

// prettier-ignore
export const formats = {
  USER_ACCESS: {
    subject: 'User Access',
    zSchema: z.object({
      user_isStaff: z.boolean(),
      user_id:      z.string(),
      user_level:   z.number(),
    }),
  },
}
