// prettier-ignore
export function r<R = any, E = Error>() {
  
    const start = Date.now()
  
    return {
      cb: {
        
        // ================ then ================ //
        then: (response: R) => {
  
          const end      = Date.now()
          const duration = (end - start) / 1000
  
          return ({
            response:   response    as R,
            error:      null        as E,
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
            response:   null    as R,
            error:      error   as E,
            isSuccess:  false,
            isError:    true,
            duration:   duration,
          })
        },
  
  
      },
    }
  
  }
