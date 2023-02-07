import { Args } from './Args'
import { tbl } from './_fns/tbl'
import { ORDER_BY } from './commands/ORDER_BY'
import { PIPE } from './commands/PIPE'
import { WITH } from './commands/WITH'

// prettier-ignore
export function BUILDER({ withs, pipe, sort, stream, order, ...props }: {
    withs:   Parameters<typeof WITH>[0],
    table:   [Args.TblKey, Args.Table, Args.Table?, Args.Table?],
    sort:    Args.Sort,
    order?:  Parameters<typeof ORDER_BY>[1],
    pipe?:   Args.GET,
    stream?: Parameters<typeof PIPE>[1],
}) {

    const [tk, tableX, tableY, tableZ] = props.table

    const qs = `
        ${WITH(withs)}

        SELECT *
        FROM ${tbl(tk, tableX, tableY, tableZ)}

        ${ORDER_BY(sort, order)}

        ${PIPE(pipe, stream)}
    `

    // console.log('qs', qs)
    return qs
}

// BUILDER({
//     withs: [
//         [tv_('post', { hasLaunchDate: true }), true],
//         [tj_('post', 'user'), false]
//     ],
//     table: ['tj', 'post', 'user'],
//     sort: 'TITLE_AZ',
//     order: { randKey: 123, field: 'fiedlNameTosort' },
//     pipe: 'MANY',
//     stream: { items: 10, page: 1 },
// })
