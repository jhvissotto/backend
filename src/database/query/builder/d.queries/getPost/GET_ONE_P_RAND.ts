import { Args } from '~/src/database/query/builder'
import { replacer } from '~/src/database/query/builder/a.fns'
import { WITH, ORDER_BY } from '~/src/database/query/builder/b.commands'
import { tf_, tj_, tm_, tp_, tv_ } from '~/src/database/query/builder/c.tables'

// prettier-ignore
export function GET_ONE_P_RAND(
    post: {
        name: Args.Table,
        tv?:  Parameters<typeof tv_>[1],
        withTableVisible?:  boolean,
    }, 
    opts?: {
        order?: Parameters<typeof ORDER_BY>[1] 
    }
) {


    let qs = `-- sql
        -- WITH 
        -- # optional 
        -- tv_post,
        
        ${WITH([
            [tv_(post.name, post?.tv), { disable: !post?.withTableVisible }],
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
            withTV: post?.withTableVisible,
        },
        names: {
            post: post.name,
        },
    })



    // console.log('qs', qs)
    return qs
}
