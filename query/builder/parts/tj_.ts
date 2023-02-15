import { replacer } from '~/query/builder/_fns'
import { Args } from '../Args'

// prettier-ignore
export function tj_(tableP: Args.Table, tableT: Args.Table, 
    opts?: {
        withTableVisible?:      boolean,
        withTablePagination?:   boolean,
    },
) {

    let qs = `--sql
        -- tp_post,
        -- tv_post,
        -- tv_tag,

        tj_post_tag AS (
            SELECT
                -- /*withTP*/ tp_post.sr_post,
                td_post.*,
                td_tag.*
                
            FROM td_post
            -- /*withTP*/ JOIN tp_post        ON  td_post.pk_post  =  tp_post.pk_post  

            JOIN tr_post_tag    ON  td_post.pk_post  =  tr_post_tag.fk_post 
            JOIN td_tag         ON  td_tag.pk_tag    =  tr_post_tag.fk_tag

            -- /*withTV*/ JOIN tv_post        ON  td_post.pk_post  =  tv_post.pk_post
            -- /*withTV*/ JOIN tv_tag         ON  td_tag.pk_tag    =  tv_tag.pk_tag
        )
    `



    qs = replacer(qs, {
        comments: {
            withTV: opts?.withTableVisible,
            withTP: opts?.withTablePagination,
        },
        names: {
            post: tableP,
            tag:  tableT,
        },
    })



    // console.log('qs', qs)
    return qs
}
