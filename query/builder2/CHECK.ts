import { Args } from './Args'
import { WITH } from './WITH'
import { tv_ } from './tv_'
import { tbl } from './tbl'
import { fld } from './fld'
import { WHERE } from './WHERE'

// prettier-ignore
export function CHECK(props: { 
    table:  string,
    by:     'PK' | 'SLUG',
    pk?:    string | number,
    slug?:  string,
    langs:  Args.Langs[]
}) {

    // props
    const table = props.table
    const by    = props.by
    // const PK    = props.by = 'PK'
    // const SLUG  = props.by = 'SLUG'
    const pk    = props?.pk
    const slug  = props?.slug
    const langs = props.langs
    

    // query
    return `
        ${WITH([
            tv_(table)
        ])}

        SELECT ${fld('pk', table)}

        FROM ${tbl('tv', table)}

        ${WHERE([{ field: table, by, pk, slug }], langs)}
    `
}
