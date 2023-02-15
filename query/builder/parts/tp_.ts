import { Args } from '~/query/builder/Args'
import { replacer } from '~/query/builder/_fns'

// prettier-ignore
export function tp_(tableX: Args.Table, tableY: Args.Table, 
    props: {
        GET:    Args.GET,
        items?: number,
        page?:  number,
    },
    opts?: {
        withTableVisible?:  boolean,
        withTableFilter?:   boolean,
    },
) {

    
    let qs = `--sql
        -- tv_post,
        -- tf_post,

        tu_post AS (
            SELECT DISTINCT fk_post
            FROM tr_post_tag

            -- /*withTV*/ JOIN tv_post  ON  tv_post.pk_post  =  tr_post_tag.fk_post
            -- /*withTF*/ JOIN tf_post  ON  tf_post.pk_post  =  tr_post_tag.fk_post
        )
        ,
        ts_post AS (
            SELECT 
                DENSE_RANK() OVER(ORDER BY RAND()) AS sr_post
                , td_post.*
                
            FROM tu_post
            JOIN td_post  ON  td_post.pk_post  =  tu_post.fk_post
        )
        ,
        tp_post AS (
            SELECT * 
            FROM ts_post
            
            -- /*paginated*/ WHERE sr_post
            -- /*paginated*/ BETWEEN (:items_post *  :page_post + 1) 
            -- /*paginated*/ AND     (:items_post * (:page_post + 1))
        )
    `



    qs = replacer(qs, {
        comments: {
            withTV:     opts?.withTableVisible,
            withTF:     opts?.withTableFilter,
            paginated:  props.GET == 'MANY'
        },
        names: {
            post: tableX,
            tag:  tableY,
        },
        values: {
            items_post: props?.items,
            page_post:  props?.page,
        }
    })




    // console.log('qs', qs)
    return qs
}
