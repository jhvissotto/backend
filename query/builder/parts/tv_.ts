import { Args } from '../Args'
import { __, replacer } from '~/query/builder/_fns'

// prettier-ignore
export function tv_(table: Args.Table, 
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
            post: table, 
        }, 
    })




    // console.log('qs', qs)
    return qs
}
