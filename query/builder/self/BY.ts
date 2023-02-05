import type { Args } from '..'
import { SELECT } from '..'
import { self } from '.'

// prettier-ignore
export const BY = (deps: {
    SLC_props:   ReturnType<typeof SELECT    >['SLC_props'] 
    namer_props: ReturnType<typeof self.namer>['namer_props'] 
    QS_props:    ReturnType<typeof self.QS   >['QS_props']
    Bind_deps:   ReturnType<typeof self.Bind >['Bind_deps']
}) => (
    KEY: Args.KEY,
) => {
    
    // ======== NAME ======== //
    const { name } = self.namer({ ...deps.namer_props, KEY })



    // ======== BUILD ======== //
    const { qs } = self.QS({ ...deps.QS_props, KEY })
    

    
    // ======== BIND ======== //
    const { bind } = self.Bind({ ...deps.Bind_deps, name })
    
    
    return { 
        name, 
        qs, 
        bind,
    }
}
