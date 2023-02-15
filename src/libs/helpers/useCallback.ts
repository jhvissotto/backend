// prettier-ignore
export function useCallback<D = any, E = Error>() {
  
  const start = Date.now()

  return {
    cb: {
      
      // ================ then ================ //
      then: (data: D) => {

        const end      = Date.now()
        const duration = (end - start) / 1000

        return ({
          data:       data  as D,
          error:      null  as E,
          isSuccess:  true,
          isError:    false,
          duration:   duration,
        })
      },
      
      
      // ================ catch ================ //
      catch: (error: E) => {
        console.warn('>> error:', error)

        const end      = Date.now()
        const duration = (end - start) / 1000
        
        return ({
          data:       null  as D,
          error:      error as E,
          isSuccess:  false,
          isError:    true,
          duration:   duration,
        })
      },


    },
  }

}
