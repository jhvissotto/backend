import { __ } from './__'

// prettier-ignore
export function WITH(withs: string[]) {
  
    const hasWith = Boolean(withs.length)
    
    return `
        ${__(hasWith)} WITH 
        ${withs.join('\n,\n')}
    `
}
