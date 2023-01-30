import { crypt } from '~/src/libs/helpers'

type Args = Parameters<typeof crypt.scryptSync>

// prettier-ignore
export function keyFrom(
  password: Args[0],
  salt?:    Args[1],
  keylen?:  Args[2],
  options?: Args[3]
) {
  //
  //
  //
  function execute() {
    return crypt.scryptSync(
      password, 
      salt      || password, 
      keylen    || 24, 
      options   
    ).toString('hex')
  }

  try {
    return {
      result:     execute(),
      error:      null,
      isSuccess:  true,
      isError:    false
    }
  } catch (error) {
    console.warn('>> error:', error)
    return {
      result:     null,
      error,
      isSuccess:  false,
      isError:    true
    }
  }
}
