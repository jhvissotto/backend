import { Args } from '~/src/database/query/builder'
import { __, replacer } from '~/src/database/query/builder/a.fns'
import { ORDER_BY, PARTITION_BY } from '~/src/database/query/builder/b.commands'

// prettier-ignore
export function tv_(post: Args.Table, 
    opts?: { 
        skip?:          boolean, 
        hasLaunchDate?: boolean,
    }
) {



    let qs = opts?.skip 
    
    ? `tv_post AS (SELECT * FROM td_post)`
    
    : `--sql
        tv_post AS (
            SELECT * 
            FROM td_post
            
            WHERE (
                    isVisible_post
                -- /*hasLaunchDate*/ AND launchDate <= CURRENT_TIMESTAMP
            )   
        )
    `

    

    qs = replacer(qs, {
        comments: {
            hasLaunchDate: opts?.hasLaunchDate, 
        },
        names: {
            post, 
        }, 
    })




    // console.log('qs', qs)
    return qs
}
