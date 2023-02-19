// local
import { config, client } from '.'

export async function send(
  props: Parameters<typeof client.send>[0]
  // isMultiple: Parameters<typeof client.send>[1]
) {
  //
  const { response, error, isSuccess, isError } = await client.send({
    ...config.send,
    // ...props
  })

  // feedback
  const sending = { response, error, isSuccess, isError }
  return sending
}
