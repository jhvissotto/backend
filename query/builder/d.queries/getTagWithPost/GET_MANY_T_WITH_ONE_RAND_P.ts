import { SetOptional } from '~/src/libs/Types'
import { Args } from '~/query/builder'
import { replacer } from '~/query/builder/a.fns'
import { WITH, ORDER_BY } from '~/query/builder/b.commands'
import { tf_, tj_, tm_, tp_, tv_ } from '~/query/builder/c.tables'

type OrderBy = SetOptional<Parameters<typeof tm_>[4], 'sort'>

// prettier-ignore
export function GET_MANY_T_WITH_ONE_RAND_P(
    tag:  { name: Args.Table },
    post: { name: Args.Table },
    props: {
        partBy?:    Parameters<typeof tm_>[3],
        orderBy?:   OrderBy,
        items:      Args.Items,
        page:       Args.Page,
    },
    opts?: {
        tm?: Parameters<typeof tm_>[5],
    } 
) {
    
    
    let qs = `--sql
        -- WITH
        -- # required 
        -- tm_tag_post,
        

        ${WITH([
            [tm_(tag.name, post.name, 
                { many: 1 }, 
                props?.partBy,
                { sort: 'WEIGHT_RAND', ...props.orderBy }, 
                opts?.tm
            )], 
        ])}

        
        tq_getTagWithPost AS (
            SELECT *
            FROM tm_tag_post
        )
        
        
        SELECT *
        FROM tq_getTagWithPost
        
        LIMIT  :items
        OFFSET :items * :page
    `



    qs = replacer(qs, {
        names: {
            tag:   tag.name,
            post: post.name,
        },
        values: {
            items: props.items,
            page:  props.page,
        }
    })



    // console.log('qs', qs)
    return qs
}
