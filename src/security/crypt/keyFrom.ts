import { crypt } from '~/src/libs/helpers'

type Args = Parameters<typeof crypt.scryptSync>

// prettier-ignore
export function keyFrom(
  pass: Args[0],
  salt?: Args[1],
  keylen?: Args[2],
  options?: Args[3]
) {
    //
    return crypt.scryptSync(
        pass, 
        salt || pass, 
        keylen || 24, 
        options
    ).toString('hex')
}
