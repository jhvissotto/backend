import { z } from '~/src/libs/utils/validator'

export const formats = {
  USER_ACCESS: {
    subject: 'User Access',
    payload: z.object({ user_id: z.string(), user_level: z.number() }),
  },
  STAFF_ACCESS: {
    subject: 'Staff Access',
    payload: z.object({ staff_id: z.string(), staff_level: z.number() }),
  },
}
