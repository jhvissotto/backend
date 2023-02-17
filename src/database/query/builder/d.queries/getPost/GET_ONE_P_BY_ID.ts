import { Args } from '~/src/database/query/builder'
import { replacer } from '~/src/database/query/builder/a.fns'
import { WITH, ORDER_BY } from '~/src/database/query/builder/b.commands'
import { tf_, tj_, tm_, tp_, tv_ } from '~/src/database/query/builder/c.tables'

// prettier-ignore
export function GET_ONE_P_BY_ID(
    post: {
        name: Args.Table,
        pk:   Args.PK,
        tv?:  Parameters<typeof tv_>[1],
        withTableVisible?:  boolean,
    }, 
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
        
        WHERE pk_post = :pk_post
        -- LIMIT 1
    `



    qs = replacer(qs, {
        comments: {
            withTV: post?.withTableVisible,
        },
        names: {
            post: post.name,
        },
        values: {
            pk_post: post.pk,
        }
    })



    // console.log('qs', qs)
    return qs
}
