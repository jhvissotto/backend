import { replacer } from '~/query/builder/_fns'
import { Args } from '~/query/builder/Args'

// prettier-ignore
export function tm_(tableP: Args.Table, tableT: Args.Table, 
    props: {
        many: number,
    },
    opts?: {
        withTableVisible?:      boolean,
        withTablePagination?:   boolean,
    },
) {


    let qs = `--sql
        -- tp_post,
        -- tv_post,
        -- tv_tag,

        tn_post_tag AS (
            SELECT
                -- /*withTP*/ tp_post.sr_post, 
                ROW_NUMBER() OVER(PARTITION BY fk_post ORDER BY RAND()) AS rn_post, -- tag by post
                td_post.*,
                td_tag.*

            FROM tr_post_tag
            -- /*withTP*/ JOIN tp_post    ON  tp_post.pk_post  =  tr_post_tag.fk_post

            JOIN td_post    ON  td_post.pk_post  =  tr_post_tag.fk_post
            JOIN td_tag     ON  td_tag.pk_tag    =  tr_post_tag.fk_tag

            -- /*withTV*/ JOIN tv_post    ON  td_post.pk_post  =  tv_post.pk_post
            -- /*withTV*/ JOIN tv_tag     ON  td_tag.pk_tag    =  tv_tag.pk_tag
        )
        ,
        tm_post_tag AS (
            SELECT *
            FROM tn_post_tag
            WHERE rn_post <= :many_tag
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
        values: {
            many_tag: props.many,
        },
    })



    // console.log('qs', qs)
    return qs
}
