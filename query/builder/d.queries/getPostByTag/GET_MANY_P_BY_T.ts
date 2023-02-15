import { Args } from '~/query/builder'
import { replacer } from '~/query/builder/a.fns'
import { WITH, ORDER_BY } from '~/query/builder/b.commands'
import { tf_, tj_, tm_, tp_, tv_ } from '~/query/builder/c.tables'

// prettier-ignore
export function GET_MANY_P_BY_T(
    post: { 
        name: Args.Table 
        tv?:  Parameters<typeof tv_>[1],
        withTableVisible?: boolean,
    }, 
    tag: { 
        name: Args.Table 
        tv?:  Parameters<typeof tv_>[1],
        withTableVisible?: boolean,
    }, 
    props: Parameters<typeof tf_>[1] & {
        items: Args.Items,
        page:  Args.Page,
    },
    opts?: {
        tj?:    Parameters<typeof tj_>[2],
        tf?:    Parameters<typeof tf_>[2],
        // order?: Parameters<typeof ORDER_BY>[1]
    }
) {

    const { 
        // items, page, 
        ..._props 
    } = props



    let qs = `--sql
        -- WITH 

        -- # optional: 
        -- tv_post,
        -- tv_tag,

        -- # required: 
        -- tj_post_tag,
        -- tf_tag,
        


        ${WITH([
            [tv_(post.name, post.tv), { disable: !post.withTableVisible }],
            [tv_(tag.name,  tag.tv),  { disable: !tag.withTableVisible  }],

            [tj_(post.name, tag.name,  opts?.tj)],
            [tf_(tag.name, _props,     opts?.tf)],
        ])}


        
        tq_getPostByTag AS (
            SELECT tj_post_tag.*
            FROM   tj_post_tag
        
            JOIN tf_tag     ON  tj_post_tag.pk_tag  =  tf_tag.pk_tag
        
            -- /*withTVPost*/ JOIN tv_post    ON  td_post.pk_post     =  tv_post.pk_post
            -- /*withTVTag*/  JOIN tv_tag     ON  td_tag.pk_tag       =  tv_tag.pk_tag
        )
        

        
        SELECT *
        FROM tq_getPostByTag
        
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
            tag:  tag.name,
        },
        values: {
            // items, page,
        },
    })



    // console.log('qs', qs)
    return qs
}
