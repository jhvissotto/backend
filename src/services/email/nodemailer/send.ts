// libs
import { resolvers } from '~/src/libs/helpers/operators'
// local
import { config, client } from '.'

// prettier-ignore
export async function send(props: Parameters<typeof client.sendMail>[0]) {
  

  // service
  const { response, error, isSuccess, isError, duration } = await resolvers.r(
    new Promise((resolve, reject) => {
      client.sendMail({
        ...config.send, 
        ...props,
      }, (error, resp) => {
        error ? reject(error) : resolve(resp)
      })
    })
  )


  // feedback
  const sending = { response, error, isSuccess, isError, duration }
  return sending
}
