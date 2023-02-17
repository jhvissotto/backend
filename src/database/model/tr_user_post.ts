// prettier-ignore
export type TR_user_post = {
  id_ainc_user_post:    number
  fk_user:        	    string
  fk_post:        	    string
  create_user_post:     Date
  update_user_post:     Date
}

// prettier-ignore
export const tr_user_post = {
  id_ainc_user_post:    'id_ainc_user_post',
  fk_user:              'fk_user',
  fk_post:              'fk_post',
  create_user_post:     'create_user_post',
  update_user_post:     'update_user_post',
}
