import { __ } from '../../builder/_fns/__'
import { Args } from '~/query/builder/Args'
import { tbl } from '~/query/builder/_fns/tbl'

// prettier-ignore
export function tv_(
    table:  Args.Table, 
    opts?:  { 
        hasLaunchDate?: boolean 
        mirror?:        boolean,
    }
) {
    // options
    const hasLaunchDate = opts?.hasLaunchDate
    const mirror        = opts?.mirror



    // ================ mirror ================ //
    if (mirror) {
        const qs = `
            ${tbl('tv', table)} AS (
                SELECT * 
                FROM ${tbl('td', table)}
            )
        `
        // console.log('qs', qs)
        return qs
    }



    // ================ query ================ //
    const qs = `
        ${tbl('tv', table)} AS (
            SELECT * 
            FROM ${tbl('td', table)}
            WHERE (
                    isVisible_${table}
                ${__(hasLaunchDate)} AND launchDate <= CURRENT_TIMESTAMP
            )
        )
    `
    // console.log('qs', qs)
    return qs
}
