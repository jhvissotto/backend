import { Args } from '../Args'
import { _ } from '../_fns/_'
import { tbl } from '../_fns/tbl'
import { JOIN } from '../commands/JOIN'
// import { AS } from '../commands/AS'

// prettier-ignore
export function tj_(
    left:  Args.Table,
    right: Args.Table,
    opts?: {
        tl?:    Args.TblKey,
        tr?:    Args.TblKey,
        join?:  Args.Join,
        steps?: Args.Steps
        mirror?: boolean,
    },
) {
    const tl = opts.tl || 'tv'
    const tr = opts.tr || 'tv'
    const mirror = opts?.mirror

    

    // ================ mirror ================ //
    if (mirror) {
        const qs = `
            ${tbl('tj', left, right)} AS (
                SELECT *
                FROM ${tbl(tl, left)}
            )
        `
        // console.log('qs', qs)
        return qs
    }


    
    // ================ query ================ //
    const qs = `
        ${tbl('tj', left, right)} AS (
            SELECT *
            FROM ${tbl(tl, left)}
        
            ${_(mirror)}  ${JOIN([tl, left], [tr, right], { 
                join:  opts?.join, 
                steps: opts?.steps
            })}
        )
    `
    // console.log('qs', qs)
    return qs
}
