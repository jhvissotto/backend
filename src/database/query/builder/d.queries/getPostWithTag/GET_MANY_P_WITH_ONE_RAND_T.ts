import { Args } from '~/src/database/query/builder'
import { replacer } from '~/src/database/query/builder/a.fns'
import { WITH, ORDER_BY, PARTITION_BY } from '~/src/database/query/builder/b.commands'
import { tf_, tj_, tm_, tp_, tv_ } from '~/src/database/query/builder/c.tables'

// prettier-ignore
export function GET_MANY_P_WITH_ONE_RAND_T(
    post: { 
        name: Args.Table, 
        tv?:  Parameters<typeof tv_>[1],
        withTableVisible?:  boolean,
    },
    tag:  { 
        name: Args.Table,  
        tv?:  Parameters<typeof tv_>[1],
        withTableVisible?:  boolean,
    },
    props: {
        items:  Args.Items,
        page:   Args.Page,
    },
    opts?: {
        partBy?: {
            priorities?: Parameters<typeof PARTITION_BY>[0]
            avoid?:      Parameters<typeof PARTITION_BY>[2]
        },
        orderBy?: Parameters<typeof ORDER_BY>[1],
    } 
) {



    let qs = `--sql
        -- # optional 
        -- tp_post,
        -- tv_post,
        -- tv_tag,


        ${WITH([
            [tv_(post.name, post?.tv), { disable: !post?.withTableVisible }],
            [tv_(tag.name,   tag?.tv), { disable: !tag?.withTableVisible  }],
        ])}


        tn_post_tag AS (
            SELECT
                -- /*withTP*/ tp_post.sr_post, 
                
                ROW_NUMBER() OVER(
                    -- PARTITION BY fk_post 
                    -- ORDER BY RAND()
                     ${PARTITION_BY(opts?.partBy?.priorities, 'fk_post', opts?.partBy?.avoid)} 
                     ${ORDER_BY('WEIGHT_RAND', opts?.orderBy)}
                ) AS rn_post, -- tag by post
                
                td_post.*,
                td_tag.*


            FROM tr_post_tag
            -- /*withTP*/ JOIN tp_post    ON  tp_post.pk_post  =  tr_post_tag.fk_post

            JOIN td_post    ON  td_post.pk_post  =  tr_post_tag.fk_post
            JOIN td_tag     ON  td_tag.pk_tag    =  tr_post_tag.fk_tag

            -- /*withTVPost*/ JOIN tv_post    ON  td_post.pk_post  =  tv_post.pk_post
            -- /*withTVTag*/  JOIN tv_tag     ON  td_tag.pk_tag    =  tv_tag.pk_tag
        )
        ,
        tm_post_tag AS (
            SELECT *
            FROM tn_post_tag
            WHERE rn_post <= 1
        ),






        
        tq_getPostWithTag AS (
            SELECT *
            FROM tm_post_tag
        )
        
        SELECT *
        FROM tq_getPostWithTag

        LIMIT  :items
        OFFSET :items * :page
    `



    qs = replacer(qs, {
        comments: {
            withTVPost: post?.withTableVisible,
            withTVTag:   tag?.withTableVisible,
        },
        names: {
            post: post.name,
            tag:   tag.name,
        },
        values: {
            items: props.items, 
            page:  props.page,
        },
    })

    

    // console.log('qs', qs)
    return qs
}
