import { __ } from '../_fns/__'

type Elem = [string, { disable?: boolean }?]
type List = Elem[]

// prettier-ignore
export function WITH(list: List) {

    const list_flt = list.filter(([cte, opts]) => !opts?.disable)

    const hasWith = Boolean(list_flt?.length)



    const qs = `
        ${__(hasWith)} WITH 
        ${list_flt.map(([cte, opts]) => cte).join('\n,\n')}
    `

    
    // console.log('qs', qs)
    return qs
}
