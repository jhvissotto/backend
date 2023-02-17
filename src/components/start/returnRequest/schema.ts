// libs
import { z } from '~/src/libs/helpers/schema'
import { cast } from '~/src/libs/functions'
// app
import { ctrl } from '~/src'
import { model } from '~/src/database'

// ========================================================= //
// ======================== REQUEST ======================== //
// ========================================================= //
export const zReq = z.object({
  params: z.object({}),
  query: z.object({}),
  body: z.object({}),
})

export type Req = z.infer<typeof zReq>

//
//
//
// ========================================================== //
// ======================== RESPONSE ======================== //
// ========================================================== //
// prettier-ignore
export type Res = {
  ip:           string,
  ips:          string[],
  
  headers:      any,
  cookies:      string,
  token:        string,

  method:       string,
  protocol:     string,
  secure:       boolean,
  httpVersion:  string,

  subdomains:   string[],
  hostname:     string,
  
  baseUrl:      string,
  path:         string,
  url:          string,
  originalUrl:  string,

  params:       object,
  query:        object,
  body:         object,
}
