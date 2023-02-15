import { Args } from '~/query/builder'
import { replacer } from '~/query/builder/a.fns'
import { WITH, ORDER_BY } from '~/query/builder/b.commands'
import { tf_, tj_, tm_, tp_, tv_ } from '~/query/builder/c.tables'

// prettier-ignore
export function GET_ONE_P_BY_ID(tableP: Args.Table, 
    props: {
        pk: Args.PK,
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
        
        WHERE pk_post = :pk_post
        -- LIMIT 1
    `



    qs = replacer(qs, {
        comments: {
            withTV: opts?.withTableVisible,
        },
        names: {
            post: tableP,
        },
        values: {
            pk_post: props.pk,
        }
    })



    // console.log('qs', qs)
    return qs
}
