export type TR_user_post = {
  id_user_post: number
  fk_email: string
  fk_slug: string
  crd_user_post: Date
  upd_user_post: Date
}

export const tr_user_post = {
  id_user_post: 'id_user_post',
  fk_email: 'fk_email',
  fk_slug: 'fk_slug',
  crd_user_post: 'crd_user_post',
  upd_user_post: 'upd_user_post',
}
