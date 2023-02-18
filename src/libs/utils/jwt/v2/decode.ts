import { jwt } from '~/src/libs/utils'

// prettier-ignore
export function decode(...[token, options]: Parameters<typeof jwt.v1.decode>)
  : {
    content:    ReturnType<typeof jwt.v1.decode>
    isDecoded:  true
} | {
    content:    null
    isDecoded:  false
}   {
  //
  // ================ foo ================ //
  //
  const content = jwt.v1.decode(token, options)


  // ==== has content ==== //
  if (content) 
  return ({ 
    content:    content,
    isDecoded:  true, 
  })


  // ==== no content ==== //
  else 
  return ({ 
    content:    null, 
    isDecoded:  false, 
  })

}
