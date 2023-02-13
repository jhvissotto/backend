// prettier-ignore
export function useCallback<D = any, E = Error>() {
  

  return {
    cb: {
      
      // ================ then ================ //
      then: (data: D) => {
        return ({
          data:       data  as D,
          error:      null  as E,
          isSuccess:  true,
          isError:    false,
        })
      },
      
      // ================ catch ================ //
      catch: (error: E) => {
        console.warn('>> error:', error)
        return ({
          data:       null  as D,
          error:      error as E,
          isSuccess:  false,
          isError:    true,
        })
      },


    },
  }

}
