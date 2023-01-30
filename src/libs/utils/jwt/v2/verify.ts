import { jwt } from '~/src/libs/utils'

// prettier-ignore
export function verify(...[token, secretOrPublicKey, options]: Parameters<typeof jwt.v1.verify>)
    : {
    content:    ReturnType<typeof jwt.v1.verify>;
    isValid:    true;
    isExpired:  false,
    error:      null;
  } | {
    content:    null;
    isValid:    false;
    isExpired:  boolean;
    error:      jwt.v1.Error_General | jwt.v1.Error_NotBefore | jwt.v1.Error_TokenExpired;
  }   {
  //
  // ================ foo body ================ //
  //
  try {
    return {
      content:    jwt.v1.verify(token, secretOrPublicKey, options),
      isValid:    true,
      isExpired:  false,
      error:      null
    };
  } catch (error) {
    console.warn('>> error:', error)
    return {
      content:    null,
      isValid:    false,
      isExpired:  error instanceof jwt.v1.Error_TokenExpired,
      error
    };
  }
}
