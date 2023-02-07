import { Args } from '~/query/builder/Args'
import { tbls } from '../_fns/tbls'
import { RN } from '../commands/RN'
import { _ } from '../_fns/_'

// prettier-ignore
export function tn_(
    tables:    Parameters<typeof tbls>[1],
    field:     Parameters<typeof RN>[0],
    partOpts:  Parameters<typeof RN>[1],
    orderOpts: Parameters<typeof RN>[2],
    opts?: {
        fr?: Args.TblKey,
        mirror?: boolean
    },
) {

    const fr = opts?.fr || 'tj'
    const mirror = opts?.mirror



    // ================ mirror ================ //
    if (mirror) {
        const qs =  `
            ${tbls('tn', tables)} AS (
                SELECT *
                FROM ${tbls(fr, tables)}
            )
        `
        // console.log('qs', qs)
        return qs
    }


    
    // ================ query ================ //
    const qs =  `
        ${tbls('tn', tables)} AS (
            SELECT *
            ${_(mirror)}, ${RN(field, partOpts, orderOpts)}
        
            FROM ${tbls(fr, tables)}
        )
    `
    // console.log('qs', qs)
    return qs
}
