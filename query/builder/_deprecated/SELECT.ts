import { self, _ } from './self'
import type { Args } from '.'

// prettier-ignore
// type Select = (
//     COUNT:  '' | 'ALL' | 'ONE' | 'MANY',
//     table:  string
// ) => ({
//     name:   string,
//     qs:     string
//     bind:   ReturnType<typeof self.bind>
// })

// prettier-ignore
// export const SELECT: Select = (COUNT, table) => {
export function SELECT(
    COUNT: Args.COUNT, 
    table: Args.Table
): {
    SLC_props : { 
        COUNT: Parameters<typeof SELECT>['0'], 
        table: Parameters<typeof SELECT>['1'] 
    },
    name:   ReturnType<typeof self.namer>['name'],
    qs:     ReturnType<typeof self.QS>['qs'], 
    bind:   ReturnType<typeof self.Bind>['bind'],
    BY:     ReturnType<typeof self.BY>
} {
    // props
    const props     = { COUNT, table }
    const SLC_props = props


    // ======== NAME ======== //
    const { name, namer_props } = self.namer({ COMMAND: 'SELECT', COUNT, table })



    // ======== BUILD ======== //
    const { qs, QS_props } = self.QS({ COUNT, table })
    

    
    // ======== BIND ======== //
    const { bind, Bind_deps } = self.Bind({ QS_props, name, table })
    

    
    // ======== NEXT ======== //
    const BY = self.BY({ 
        namer_props, 
        SLC_props, 
        QS_props,
        Bind_deps,
    })


    return { 
        SLC_props,
        name, 
        qs, 
        bind,
        BY,  
    }
}
