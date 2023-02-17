// prettier-ignore
export type TD_user = {
  id_ainc_user:   number
  pk_user:	      string
  name_user:	    string
  passHash:	      string
  isStaff:        boolean
  level_user:     number
  level_staff:    number
  create_user:	  Date
  update_user:	  Date
}

// prettier-ignore
export const td_user = {
  id_ainc_user:   'id_ainc_user',
  pk_user:        'pk_user',
  name_user:      'name_user',
  passHash:       'passHash',
  isStaff:        'isStaff',
  level_user:     'level_user',  
  level_staff:    'level_staff',    
  create_user:    'create_user',
  update_user:    'update_user',
}
