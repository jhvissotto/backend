import { Args } from '~/query/builder/Args'
import { tbl } from '../_fns/tbl'

// prettier-ignore
export function AS(props: {
    alias:  [Args.TblKey, Args.Table, Args.Table?],
    from:   [Args.TblKey, Args.Table],
    mirror?: boolean,
}, expression: string) {


    const alias = { tk: props.alias[0], nm_1: props.alias[1], nm_2: props.alias[2] }
    const from  = { tk: props.from[0],  nm_1: props.from[1]  }


    const mirror = `
        SELECT *
        FROM ${tbl(from.tk, from.nm_1)}
    `

    const qs = `
        ${tbl(alias.tk, alias.nm_1, alias.nm_2)} AS (
            ${props?.mirror ? mirror : expression}
        )
    `
    
    // console.log('qs', qs)
    return qs
}
