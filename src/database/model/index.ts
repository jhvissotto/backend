import { ValueOf } from '~/src/libs/Types'

export * from './td_level'
export * from './td_post'
export * from './td_user'

export * from './tr_post_level'
export * from './tr_user_level'
export * from './tr_user_post'

// prettier-ignore
export const nm = {
  level:        'level',
  post:         'post',
  user:         'user',

  post_level:   'post_level',
  user_level:   'user_level',
  user_post:    'user_post',
}

// prettier-ignore
export const td = {
  level:        'td_level',
  post:         'td_post',
  user:         'td_user',
} as const

// prettier-ignore
export const tr = {
  post_level:   'tr_post_level',
  user_level:   'tr_user_level',
  user_post:    'tr_user_post',
} as const

export type Tables = ValueOf<typeof td> | ValueOf<typeof tr>

export const tables = [...Object.values(td), ...Object.values(tr)]
