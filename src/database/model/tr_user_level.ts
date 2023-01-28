export type TR_user_level = {
  id_user_level: number
  fk_email: string
  fk_level: number
  crd_user_level: Date
  upd_user_level: Date
}

export const tr_user_level = {
  id_user_level: 'id_user_level',
  fk_email: 'fk_email',
  fk_level: 'fk_level',
  crd_user_level: 'crd_user_level',
  upd_user_level: 'upd_user_level',
}
