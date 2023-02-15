import { faker } from '.'

// prettier-ignore
export const sample = { 
    imei: '20-862145-690479-9', 
    number: '569.890.4684' 
}

// prettier-ignore
export const {
    imei,
    number
} = faker.phone

// prettier-ignore
export function all({
    imei    = [],       
    number  = [],         
} : {
    imei?:   Parameters<typeof faker.phone.imei>,
    number?: Parameters<typeof faker.phone.number>,
}) {

    return {
        imei:    faker.phone.imei(  ...imei),
        number:  faker.phone.number(...number),           
    } 
}
