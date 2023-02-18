// libs
import { useCallback } from '~/src/libs/helpers'
// local
import type { Clients } from '.'
import { createClient, clients } from '.'

type Client_Select = ReturnType<typeof createClient>

type CBFn = Parameters<Client_Select['flushdb']>[1]

const { cb } = useCallback.r<Parameters<CBFn>[1], Parameters<CBFn>[0]>()

type CBThen = ReturnType<typeof cb.then>
type CBCatch = ReturnType<typeof cb.catch>

//
export async function flush(client: Clients): Promise<CBThen | CBCatch> {
  //
  const client_select = clients[client]

  return new Promise((resolve, reject) => {
    client_select.flushdb((error, response) => {
      error ? reject(cb.catch(error)) : resolve(cb.then(response))
    })
  })
}
