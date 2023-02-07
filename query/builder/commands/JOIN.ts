import { Args } from '../Args'

type Elem = [Args.TblKey, Args.Table]
type List = Elem[]

// prettier-ignore
export function JOIN(_left: Elem, _right: Elem, opts?: {
    join?:  Args.Join, 
    steps?: Args.Steps,
}) {
    
    const [tl, left ] = _left
    const [tr, right] = _right
    const join  = opts?.join
    const steps = opts?.steps

    
    const tl_left    = `${tl}_${left }`
    const tr_right   = `${tr}_${right}`
    const tr_left_right = `tr_${left}_${right}`

    
    const LEFT  = join == 'LEFT'
    const RIGHT = join == 'RIGHT'
    const FLAG  = LEFT || RIGHT || ''
    const JOIN  = `JOIN ${FLAG}`

    

    if (steps == '1')
    return ``

    const qs = `
        ${JOIN} ${tr_left_right}    ON ${tl_left }.pk_${left}   = ${tr_left_right}.fk_${left}
        ${JOIN} ${tr_right}         ON ${tr_right}.pk_${right}  = ${tr_left_right}.fk_${right}
    `

    // console.log('qs', qs)
    return qs
}
