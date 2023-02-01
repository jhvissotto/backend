import { resolvers } from '~/src/libs/helpers/operators'
import { sms } from '~/src/services'

// prettier-ignore
export async function send({
  from,
  to,
  text,
  options
}: {
  from: string;
  to: string;
  text: string;
  options: Parameters<typeof sms.nexmo.message.sendSms>[3]
}) {
  // foo
  const { response, error, isSuccess, isError } = await resolvers.r(
    new Promise((resolve, reject) => {
      sms.nexmo.message.sendSms(from, to, text, { ...options }, (error, response) => {
        error ? reject(error) : resolve(response);
      });
    })
  );

  // feedback
  const sending = { response, error, isSuccess, isError };
  return sending;
}
