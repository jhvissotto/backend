import { link } from '~/src/libs/functions'
import { createDefs } from '~/src/providers'
// import { z } from '~/src/libs/helpers/schema'

// prettier-ignore
export module getPosts {
  export type Schema = {
    params: {  }, 
    query:  {  }, 
    body:   {  }, 
  } 
  export const defs = createDefs<Schema['params'], Schema['query']>({
    name:   'getPosts',
    method: 'get',
    url:    (p, q) => link.stringify(`/posts`),
  })
}

// prettier-ignore
export module getPostById {
  export type Schema = {
    params: { id_post: number }, 
    query:  {  }, 
    body:   {  }, 
  } 
  export const defs = createDefs<Schema['params'], Schema['query']>({
    name:   'getPostById',
    method: 'get',
    url:    (p, q) => link.stringify(`/posts/${p.id_post}`),
  })
}

// prettier-ignore
export module getCommentsByPost {
  export type Schema = {
    params: {  }, 
    query:  { postId: number }, 
    body:   {  }, 
  } 
  export const defs = createDefs<Schema['params'], Schema['query']>({
    name:   'getCommentsByPost',
    method: 'get',
    url:    (p, q) => link.stringify(`/comments`, q),
  })
}
