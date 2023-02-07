import { __ } from '../_fns/__'

// prettier-ignore
export function WITH(list: Array<{
    cte: string,
    disable?: boolean,
}>) {

    const list_flt = list.filter(i => !i?.disable)

    const hasWith = Boolean(list_flt?.length)



    const qs = `
        ${__(hasWith)} WITH 
        ${list_flt.map(i => i.cte).join('\n,\n')}
    `

    
    console.log('qs', qs)
    return qs
}
