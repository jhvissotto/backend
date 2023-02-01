// prettier-ignore
export async function asyncTryCatch<
// ================ Arg Type ================ //
    Result  = void, 
    Catched = void
>(
// ================ arguments ================ //
    fnTry:      (             ) => Result, 
    fnCatch?:   (error?: Error) => Catched
): 
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

    return new Promise((resolve, reject) => {
        // ================ try ================ //
        try {
            const result = fnTry()
            resolve({
                result:     result,
                error:      null,
                catched:    null,
                isSuccess:  true,
                isError:    false,
            })

        // ================ catch ================ //
        } catch (error) {
            console.warn('>> error:', error)

            const catched = fnCatch?.(error)
            reject({
                result:     null,
                error:      error,
                catched:    catched,
                isSuccess:  false,
                isError:    true,
            })
        }
    })
    
}
