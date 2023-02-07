import { Args } from '~/query/builder/Args'
import { WHERE } from '../commands/WHERE'
import { tbls } from '../_fns/tbls'
import { _ } from '../_fns/_'
// import { AS } from '../commands/AS'

// type Opts = Omit<Parameters<typeof WHERE>[0], 'field'>
type Opts = Parameters<typeof WHERE>[0]

// prettier-ignore
export function tf_(
    tables:  Parameters<typeof tbls>[1], 
    opts:    Opts & {
        fr?: Args.TblKey, 
        mirror?: boolean 
    },
    langs:   Args.Langs[]
) {

    // options
    const fr     = opts?.fr || 'tn'
    const mirror = opts?.mirror


    
    // ================ mirror ================ //
    if (mirror) {
        const qs = `
            ${tbls('tf', tables)} AS (
                SELECT *
                FROM ${tbls(fr, tables)}
            )
        `
        // console.log('qs', qs)
        return qs
    }



    // ================ query ================ //
    const qs = `
        ${tbls('tf', tables)} AS (
            SELECT *
            FROM ${tbls(fr, tables)}
        
            ${_(mirror)} ${WHERE(opts, langs)}
        )
    `
    // console.log('qs', qs)
    return qs
}
