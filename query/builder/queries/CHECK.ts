import { Args } from '~/query/builder/Args'
import { tv_ } from '../parts/tv_'
import { BUILDER } from '../BUILDER'
import { tf_ } from '../parts/tf_'
import { WITH } from '../commands/WITH'
import { fld } from '../_fns/fld'
import { tbl } from '../_fns/tbl'
import { WHERE } from '../commands/WHERE'

// prettier-ignore
export function CHECK({ withVisible, table, by, pk, slug, langs }: {
    withVisible: boolean, 
    table:  Args.Table,
    by:     'PK' | 'SLUG',
    pk?:    Args.PK,
    slug?:  Args.Slug,
    langs?: Args.Langs[]
}) {

    // define
    const fr = withVisible ? 'tv' : 'td'


    // query
    const qs = `
        ${WITH([
            { cte: tv_(table), disable: !withVisible },
        ])}

        SELECT ${fld('pk', table)}

        FROM ${tbl(fr, table)}

        ${WHERE({ field: table, by, pk, slug }, langs)}
    `


    // console.log('qs', qs)
    return qs
}
