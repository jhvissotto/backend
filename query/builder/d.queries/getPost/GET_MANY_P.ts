import { Args } from '~/query/builder'
import { replacer } from '~/query/builder/a.fns'
import { WITH, ORDER_BY } from '~/query/builder/b.commands'
import { tf_, tj_, tm_, tp_, tv_ } from '~/query/builder/c.tables'

// prettier-ignore
export function GET_MANY_P(tableP: Args.Table, 
    props: {
        items: Args.Items,
        page:  Args.Page,
    },
    opts?: {
        tv?:                Parameters<typeof tv_>[1],
        withTableVisible?:  boolean,
    }
) {


    let qs = `--sql
        -- WITH 
        -- # optional: 
        -- tv_post,
        
        ${WITH([
            [tv_(tableP, opts?.tv), { disable: !opts?.withTableVisible }],
        ])}


        tq_getPost AS (
            SELECT td_post.*
            FROM   td_post
            
            -- /*withTV*/ JOIN tv_post  ON  td_post.pk_post  =  tv_post.pk_post
        )
        
        
        SELECT *
        FROM tq_getPost
        
        LIMIT  :items
        OFFSET :items * :page
    `



    qs = replacer(qs, {
        comments: {
            withTV: opts?.withTableVisible,
        },
        names: {
            post: tableP,
        },
        values: {
            items: props.items,
            page:  props.page,
        }
    })



    // console.log('qs', qs)
    return qs
}
