export type TD_user = {
  id_user: number
  pk_email: string
  name: string
  passHash: string
  crd_user: Date
  upd_user: Date
}

export const td_user = {
  id_user: 'id_user',
  pk_email: 'pk_email',
  name: 'name',
  passHash: 'passHash',
  crd_user: 'crd_user',
  upd_user: 'upd_user',
}
