import { config } from '~/src/global'
import { resolvers } from '~/src/libs/helpers'
import { client, prepare } from '.'

// prettier-ignore
export async function send(
  options: Parameters<typeof client.send>[0],
  // isMultiple: Parameters<typeof client.send>[1]
) {
  prepare()

  // service
  const { response, error, isSuccess, isError } = await resolvers.r(
    new Promise((resolve, reject) => {
      client.send({
        ...config().emailDefault, 
        ...options,
      }, undefined, (error, resp) => {
        error ? reject(error) : resolve(resp);
      });
    })
  );

  // feedback
  const sending = { response, error, isSuccess, isError };
  return sending
}
