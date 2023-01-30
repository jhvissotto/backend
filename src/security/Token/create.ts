import { jwt } from '~/src/libs/utils'
import { config } from '.'

type Secret = Parameters<typeof jwt.v3.sign>[1]
type Options = Parameters<typeof jwt.v3.sign>[2]

// prettier-ignore
export function create<Payload>({
  payload,
  secret      = config.secret,
  options: {
    issuer    = config.issuer,
    expiresIn = config.expiresIn,
    subject,
    ...options
  },
}: {
  payload: Payload,
  secret?: Secret,
  options: Partial<Options> & { subject: Options['subject'] },
}) {
  //
  // foo
  //

  const { token } = jwt.v3.sign({ payload }, secret, {
    issuer,
    expiresIn,
    noTimestamp: true,
    ...options,
    subject
  });


  return { token };
}
