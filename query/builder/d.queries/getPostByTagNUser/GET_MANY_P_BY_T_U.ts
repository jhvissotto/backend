import { Args } from '~/query/builder'
import { replacer } from '~/query/builder/a.fns'
import { WITH, ORDER_BY } from '~/query/builder/b.commands'
import { tf_, tj_, tm_, tp_, tv_ } from '~/query/builder/c.tables'

// prettier-ignore
export function GET_MANY_P_BY_T_U(
    post: {
        name: Args.Table,
        tv?:  Parameters<typeof tv_>[1],
        withTableVisible?:  boolean,
    }, 
    tag: Parameters<typeof tf_>[1] & {
        name: Args.Table,   
        tv?:  Parameters<typeof tv_>[1],
        tf?:  Parameters<typeof tf_>[2]
        withTableVisible?:  boolean,
    }, 
    user: Parameters<typeof tf_>[1] & {
        name: Args.Table,
        tv?:  Parameters<typeof tv_>[1],
        tf?:  Parameters<typeof tf_>[2]
        withTableVisible?:  boolean,
    },
    props: {
        items: Args.Items,
        page:  Args.Page,
    },
    opts?: {
        tj?: Parameters<typeof tj_>[1],
    }, 
) {


    let qs = `--sql
        -- WITH

        -- # optional 
        -- tv_post
        -- tv_tag
        -- tv_user

        -- # required 
        -- tj_post_tag_user,
        -- tf_tag,
        -- tf_user,


        
        ${WITH([
            [tv_(post.name, post?.tv), { disable: !post?.withTableVisible }],
            [tv_(tag.name,   tag?.tv), { disable: !tag?.withTableVisible  }],
            [tv_(user.name, user?.tv), { disable: !user?.withTableVisible }],

            [tj_([post.name, tag.name, user.name], opts?.tj)],

            [tf_(tag.name,  tag,    tag?.tf)],
            [tf_(user.name, user,  user?.tf)],
        ])}
        

        tq_getPostByTagNUser AS (
            SELECT tj_post_tag_user.*
            FROM   tj_post_tag_user
        
            JOIN tf_tag     ON  tj_post_tag_user.pk_tag     =  tf_tag.pk_tag
            JOIN tf_user    ON  tj_post_tag_user.pk_user    =  tf_user.pk_user

            -- /*withTVPost*/ JOIN tv_post    ON  tj_post_tag_user.pk_post    =  tv_post.pk_post
            -- /*withTVTag*/  JOIN tv_tag     ON  tj_post_tag_user.pk_tag     =  tv_tag.pk_tag
            -- /*withTVUser*/ JOIN tv_user    ON  tj_post_tag_user.pk_user    =  tv_user.pk_user
        )
        
        
        SELECT *
        FROM tq_getPostByTagNUser

        LIMIT  :items
        OFFSET :items * :page
    `


    qs = replacer(qs, {
        comments: {
            withTVPost: post?.withTableVisible,
            withTVTag:  tag?.withTableVisible,
            withTVUser: user?.withTableVisible,
        },
        names: {
            post: post.name,
            tag:   tag.name,
            user: user.name,
        },
        values: {
            items: props.items, 
            page:  props.page,
        },
    })
    


    // console.log('qs', qs)
    return qs
}
