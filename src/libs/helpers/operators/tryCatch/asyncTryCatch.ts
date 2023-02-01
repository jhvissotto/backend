// prettier-ignore
export async function asyncTryCatch<
// ================ Arg Type ================ //
    Result  =   void, 
    Catched =   void
// ================ arguments ================ //
>({ fnTry, fnCatch, prms = 'reflect' }: {
    fnTry:      (             ) => Result, 
    fnCatch?:   (error?: Error) => Catched,
    prms?:      'reflect' | 'resolve' | 'reject'  
}): 
// ================ Return Type ================ //
Promise<{
    result:     ReturnType<typeof fnTry>,
    error:      null,
    catched:    null,
    isSuccess:  true,
    isError:    false,
} | {
    result:     null,
    error:      Error,
    catched:    ReturnType<typeof fnCatch>,
    isSuccess:  false,
    isError:    true,
}> {
// ================ Foo Body ================ //
    return new Promise((resolve, reject) => {

        let resp, result, error, catched, isSuccess, isError
        // ================ try ================ //
        try {
            result      = fnTry()
            error       = null
            catched     = null
            isSuccess   = true
            isError     = false

        // ================ catch ================ //
        } catch (error) {
            console.warn('>> error:', error)

            result      = null
            error       = error
            catched     = fnCatch?.(error)
            isSuccess   = false
            isError     = true
        }

        
        // ================ resolver ================ //
        resp = { result, error, catched, isSuccess, isError }

        switch (prms) {
            case 'resolve': resolve(resp)
            case 'reject':   reject(resp)
            case 'reflect': 
                isSuccess ? resolve(resp) : reject(resp)
        }
    })
    
}
