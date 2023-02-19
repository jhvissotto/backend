// libs
import { resolvers } from '~/src/libs/helpers/operators'
// local
import { config, client, prepare } from '.'

//
// prettier-ignore
export async function send(
  props: Parameters<typeof client.send>[0],
  // isMultiple: Parameters<typeof client.send>[1]
) {
  prepare()

  

  type Response = Awaited<ReturnType<typeof client.send>>

  // service
  const { response, error, isSuccess, isError, duration } = await resolvers.arr.r<Response[0]>(
    new Promise((resolve, reject) => {
      client.send({
        ...config.send, 
        ...props,
      }, undefined, (error, resp) => {
        error ? reject(error) : resolve(resp)
      })
    })
  )


  // feedback
  const sending = { response, error, isSuccess, isError, duration }
  return sending
}
