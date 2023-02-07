import { tbl } from '~/query/builder/_fns/tbl'

export function GET_ALL_X_BY_Y() {
  const qs = `
        SELECT *
        FROM td_post

        JOIN tr_post_tag    ON td_post.pk_post  = tr_post_tag.fk_post
        JOIN td_tag         ON td_tag.pk_tag    = tr_post_tag.fk_tag

        WHERE pk_tag = :pk_tag
    `

  console.log('qs', qs)
  return qs
}
