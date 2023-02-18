// prettier-ignore
export const d = {


    then: <D>(data: D) => {
      return ({
        data:       data,
        error:      null,
        isSuccess:  true,
        isError:    false,
      })
    }, 
  
  
    catch: <E>(error: E) => {
      console.warn('>> error:', error)
      return ({
        data:       null,
        error:      error,
        isSuccess:  false,
        isError:    true,
      })
    }
  
    
  }
