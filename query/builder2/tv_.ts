import { __ } from './__'
import { tbl } from './tbl'

// prettier-ignore
export function tv_(
    table: string, 
    opts?: { hasLaunchDate?: boolean }
) {
    // options
    const hasLaunchDate = opts?.hasLaunchDate

    // query
    return `
        ${tbl('tv', table)} AS (
            SELECT * 
            FROM ${tbl('td', table)}
            WHERE (
                    isVisible_${table}
                ${__(hasLaunchDate)} AND launchDate <= CURRENT_TIMESTAMP
            )
        )
    `
}
