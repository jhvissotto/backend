import { Args } from '~/query/builder'
import { __, replacer } from '~/query/builder/a.fns'
import { ORDER_BY, PARTITION_BY } from '~/query/builder/b.commands'

// prettier-ignore
export function tf_(post: Args.Table, 
    props: { 
        BY:     Args.BY 
        pk?:    Args.PK, 
        slug?:  Args.Slug, 
    }, 
    opts?: { 
        skip?:              boolean, 
        withTableVisible?:  boolean,
    }
) {


    
    let qs = opts?.skip
    
    ? `tf_post AS (SELECT td_post * FROM td_post)`
    
    : `--sql
        -- # optional 
        -- tv_post,

        tf_post AS (
            SELECT td_post.* 
            FROM   td_post
            
            -- /*withTV*/ JOIN tv_post  ON  td_post.pk_post  =  tv_post.pk_post

            WHERE (
            -- /*PK*/       pk_post         = :pk_post
            -- /*SLUG*/     slug_en_post    = :slug_post  
            -- /*SLUG*/ OR  slug_pt_post    = :slug_post
            )
        )
    `


    
    qs = replacer(qs, {
        comments: {
            withTV: opts?.withTableVisible,
            PK:     props.BY == 'PK',
            SLUG:   props.BY == 'SLUG',
        },
        names: {
            post,
        },
        values: {
            pk_post:    props?.pk,
            slug_post:  props?.slug,
        }
    })



    // console.log('qs', qs)
    return qs
}
