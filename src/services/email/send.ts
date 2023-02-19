import { config } from '~/src/global'
import { client } from '.'

export async function send(
  options: Parameters<typeof client.send>[0]
  // isMultiple: Parameters<typeof client.send>[1]
) {
  //
  const { response, error, isError, isSuccess } = await client.send({
    ...config().emailDefault,
    // ...options
  })

  // feedback
  const sending = { response, error, isError, isSuccess }
  return sending
}
