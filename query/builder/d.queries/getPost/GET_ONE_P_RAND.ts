import { Args } from '~/query/builder'
import { replacer } from '~/query/builder/a.fns'
import { WITH, ORDER_BY } from '~/query/builder/b.commands'
import { tf_, tj_, tm_, tp_, tv_ } from '~/query/builder/c.tables'

// prettier-ignore
export function GET_ONE_P_RAND(tableP: Args.Table, 
    opts?: {
        tv?:                Parameters<typeof tv_>[1],
        withTableVisible?:  boolean,
        order?:             Parameters<typeof ORDER_BY>[1] 
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
        
        -- ORDER BY RAND()
         ${ORDER_BY('WEIGHT_RAND', opts?.order)}
        LIMIT 1
    `



    qs = replacer(qs, {
        comments: {
            withTV: opts?.withTableVisible,
        },
        names: {
            post: tableP,
        },
    })



    // console.log('qs', qs)
    return qs
}
