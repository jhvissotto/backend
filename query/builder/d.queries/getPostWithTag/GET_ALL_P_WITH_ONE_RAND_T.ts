import { SetOptional } from '~/src/libs/Types'
import { Args } from '~/query/builder'
import { replacer } from '~/query/builder/a.fns'
import { WITH, ORDER_BY } from '~/query/builder/b.commands'
import { tf_, tj_, tm_, tp_, tv_ } from '~/query/builder/c.tables'

type OrderBy = SetOptional<Parameters<typeof tm_>[4], 'sort'>

// prettier-ignore
export function GET_ALL_P_WITH_ONE_RAND_T(
    post: { name: Args.Table },
    tag:  { name: Args.Table },
    props: {
        partBy?:    Parameters<typeof tm_>[3],
        orderBy?:   OrderBy,
    },
    opts?: {
        tm?: Parameters<typeof tm_>[5],
    } 
) {


    let qs = `--sql
        -- WITH
        -- # required
        -- tm_post_tag,
        

        ${WITH([
            [tm_(post.name, tag.name, 
                { many: 1 }, 
                props?.partBy,
                { sort: 'WEIGHT_RAND', ...props.orderBy }, 
                opts?.tm
            )], 
        ])}

        
        tq_getPostWithTag AS (
            SELECT *
            FROM tm_post_tag
        )
        
        
        SELECT *
        FROM tq_getPostWithTag

    `



    qs = replacer(qs, {
        names: {
            post: post.name,
            tag:   tag.name,
        },
    })

    

    // console.log('qs', qs)
    return qs
}
