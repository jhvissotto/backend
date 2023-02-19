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


  // service
  const { response, error, isSuccess, isError, duration } = await resolvers.r(
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
