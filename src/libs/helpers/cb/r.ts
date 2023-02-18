// prettier-ignore
export const r = {


    then: <R>(response: R) => {
      return ({
        response:   response,
        error:      null,
        isSuccess:  true,
        isError:    false,
      })
    }, 
  
  
    catch: <E>(error: E) => {
      console.warn('>> error:', error)
      return ({
        response:   null,
        error:      error,
        isSuccess:  false,
        isError:    true,
      })
    }
  
    
  }
