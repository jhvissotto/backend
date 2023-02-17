// prettier-ignore
export type TR_user_level = {
  id_ainc_user_level:     number
  fk_user:	              string
  fk_level:	              number
  create_user_level:	    Date
  update_user_level:	    Date
}

// prettier-ignore
export const tr_user_level = {
  id_ainc_user_level:     'id_ainc_user_level',
  fk_user:                'fk_user',
  fk_level:               'fk_level',
  create_user_level:      'create_user_level',
  update_user_level:      'update_user_level',
}
