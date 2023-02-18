import { link } from '~/src/libs/functions'
import { createDef } from '~/src/providers'
// import { z } from '~/src/libs/helpers/schema'

// prettier-ignore
export module getPosts {
  export type Req = {
    params?:  never, 
    query?:   never, 
    body?:    never, 
  } 
  export const defs = createDef<Req['params'], Req['query']>({
    name:   'getPosts',
    method: 'get',
    url:    (p, q) => link.stringify(`/posts`),
  })
}

// prettier-ignore
export module getPostById {
  export type Req = {
    params:   { id_post: number }, 
    query?:   never, 
    body?:    never, 
  } 
  export const defs = createDef<Req['params'], Req['query']>({
    name:   'getPostById',
    method: 'get',
    url:    (p, q) => link.stringify(`/posts/${p.id_post}`),
  })
}

// prettier-ignore
export module getCommentsByPost {
  export type Req = {
    params?:  never, 
    query:    { postId: number }, 
    body?:    never, 
  } 
  export const defs = createDef<Req['params'], Req['query']>({
    name:   'getCommentsByPost',
    method: 'get',
    url:    (p, q) => link.stringify(`/comments`, q),
  })
}
