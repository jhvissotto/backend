import { Args } from '~/query/builder'
import { replacer } from '~/query/builder/a.fns'
import { WITH, ORDER_BY } from '~/query/builder/b.commands'
import { tf_, tj_, tm_, tp_, tv_ } from '~/query/builder/c.tables'

// prettier-ignore
export function GET_ALL_P_BY_T_U(
    post: {
        name: Args.Table,
    }, 
    tag: Parameters<typeof tf_>[1] & {
        name: Args.Table,
        tf?:  Parameters<typeof tf_>[2]
    }, 
    user: Parameters<typeof tf_>[1] & {
        name: Args.Table,
        tf?:  Parameters<typeof tf_>[2]
    },
    opts?: {
        tj?: Parameters<typeof tj_>[1],
    }, 
) {


    let qs = `--sql
        -- WITH

        -- # required 
        -- tj_post_tag_user,
        -- tf_tag,
        -- tf_user,

        

        ${WITH([
            [tj_([post.name, tag.name, user.name], opts?.tj)],

            [tf_(tag.name,  tag,    tag?.tf)],
            [tf_(user.name, user,  user?.tf)],
        ])}
        

        tq_getPostByTagNUser AS (
            SELECT tj_post_tag_user.*
            FROM   tj_post_tag_user
        
            JOIN tf_tag   ON  tj_post_tag_user.pk_tag   =  tf_tag.pk_tag
            JOIN tf_user  ON  tj_post_tag_user.pk_user  =  tf_user.pk_user
        )
        
        
        SELECT *
        FROM tq_getPostByTagNUser
    `



    qs = replacer(qs, {
        names: {
            post: post.name,
            tag:   tag.name,
            user: user.name,
        },
    })
    


    // console.log('qs', qs)
    return qs
}
