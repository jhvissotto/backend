import { Args } from '~/src/database/query/builder'
import { __, tbl } from '~/src/database/query/builder/a.fns'
import {} from '~/src/database/query/builder/b.commands'

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
