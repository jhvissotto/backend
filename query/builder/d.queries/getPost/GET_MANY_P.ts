import { Args } from '~/query/builder'
import { replacer } from '~/query/builder/a.fns'
import { WITH, ORDER_BY } from '~/query/builder/b.commands'
import { tf_, tj_, tm_, tp_, tv_ } from '~/query/builder/c.tables'

// prettier-ignore
export function GET_MANY_P(
    post: {
        name: Args.Table,
        tv?:  Parameters<typeof tv_>[1],
        withTableVisible?:  boolean,
    }, 
    props: {
        items: Args.Items,
        page:  Args.Page,
    },
) {


    const { items, page, ..._props } = props



    let qs = `--sql
        -- WITH 
        -- # optional: 
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
        
        LIMIT  :items
        OFFSET :items * :page
    `



    qs = replacer(qs, {
        comments: {
            withTV: post?.withTableVisible,
        },
        names: {
            post: post.name,
        },
        values: {
            items, 
            page,
        }
    })



    // console.log('qs', qs)
    return qs
}
