import { resolvers } from "~/src/libs/helpers";
import { client } from "./client";
import { config } from "~/src/global";

// prettier-ignore
export async function send(options: Parameters<typeof client.sendMail>[0]) {
  
  // service
  const { response, error, isSuccess, isError } = await resolvers.r(
    new Promise((resolve, reject) => {
      client.sendMail({
        ...config().emailDefault, 
        ...options,
      }, (error, resp) => {
        error ? reject(error) : resolve(resp);
      });
    })
  );

  // feedback
  const sending = { response, error, isSuccess, isError };
  return sending;
}
