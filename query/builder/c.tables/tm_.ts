import { Args } from '~/query/builder'
import { __, replacer } from '~/query/builder/a.fns'
import { ORDER_BY, PARTITION_BY } from '~/query/builder/b.commands'

// prettier-ignore
export function tm_(post: Args.Table, tag: Args.Table, 
    props: {
        many: Args.Many,
    },
    partBy: {
        priorities?: Parameters<typeof PARTITION_BY>[0]
        disable?:    Parameters<typeof PARTITION_BY>[1]
    }, 
    orderBy:  Parameters<typeof ORDER_BY>[1] & { 
        sort: Parameters<typeof ORDER_BY>[0] 
    },
    opts?: {
        withTableVisible?:      boolean,
        withTablePagination?:   boolean,
    },
) {


    let qs = `--sql

        -- # optional 
        -- tp_post,
        -- tv_post,
        -- tv_tag,

        

        tn_post_tag AS (
            SELECT
                -- /*withTP*/ tp_post.sr_post, 
                
                ROW_NUMBER() OVER(
                    -- PARTITION BY fk_post 
                    -- ORDER BY RAND()
                     ${PARTITION_BY(partBy?.priorities,  partBy?.disable)} 
                     ${ORDER_BY(    orderBy.sort,       orderBy)}
                ) AS rn_post, -- tag by post
                
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
            post,
            tag,
        },
        values: {
            many_tag: props.many,
        },
    })



    // console.log('qs', qs)
    return qs
}
