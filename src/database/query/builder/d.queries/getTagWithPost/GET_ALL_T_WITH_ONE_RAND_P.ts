import { Args } from '~/src/database/query/builder'
import { replacer } from '~/src/database/query/builder/a.fns'
import { WITH, ORDER_BY, PARTITION_BY } from '~/src/database/query/builder/b.commands'
import { tf_, tj_, tm_, tp_, tv_ } from '~/src/database/query/builder/c.tables'

// prettier-ignore
export function GET_ALL_T_WITH_ONE_RAND_P(
    tag: { 
        name: Args.Table, 
        tv?:  Parameters<typeof tv_>[1],
        withTableVisible?:  boolean,
    },
    post:  { 
        name: Args.Table,  
        tv?:  Parameters<typeof tv_>[1],
        withTableVisible?:  boolean,
    },
    opts?: {
        partBy?: {
            priorities?: Parameters<typeof PARTITION_BY>[0]
            avoid?:      Parameters<typeof PARTITION_BY>[2]
        },
        orderBy?: Parameters<typeof ORDER_BY>[1],
    } 
) {



    let qs = `-- sql
        -- # optional 
        -- tp_tag,
        -- tv_tag,
        -- tv_post,


        ${WITH([
            [tv_(tag.name,  tag?.tv),  { disable: !tag?.withTableVisible  }],
            [tv_(post.name, post?.tv), { disable: !post?.withTableVisible }],
        ])}


        tn_tag_post AS (
            SELECT
                -- /*withTP*/ tp_tag.sr_tag, 
                
                ROW_NUMBER() OVER(
                    -- PARTITION BY fk_tag 
                    -- ORDER BY RAND()
                     ${PARTITION_BY(opts?.partBy?.priorities, 'fk_tag', opts?.partBy?.avoid)} 
                     ${ORDER_BY('WEIGHT_RAND', opts?.orderBy)}
                ) AS rn_tag, -- post by tag
                
                td_tag.*,
                td_post.*


            FROM tr_post_tag
            -- /*withTP*/ JOIN tp_tag    ON  tp_tag.pk_tag  =  tr_post_tag.fk_tag

            JOIN td_tag     ON  td_tag.pk_tag    =  tr_post_tag.fk_tag
            JOIN td_post    ON  td_post.pk_post  =  tr_post_tag.fk_post

            -- /*withTVTag*/  JOIN tv_tag    ON  td_tag.pk_tag    =  tv_tag.pk_tag
            -- /*withTVPost*/ JOIN tv_post   ON  td_post.pk_post  =  tv_post.pk_post
        )
        ,
        tm_tag_post AS (
            SELECT *
            FROM tn_tag_post
            WHERE rn_tag <= 1
        ),






        
        tq_getTagWithPost AS (
            SELECT *
            FROM tm_tag_post
        )
        
        SELECT *
        FROM tq_getTagWithPost
    `



    qs = replacer(qs, {
        comments: {
            withTVTag:  tag?.withTableVisible,
            withTVPost: post?.withTableVisible,
        },
        names: {
            tag:    tag.name,
            post:   post.name,
        },
    })

    

    // console.log('qs', qs)
    return qs
}
