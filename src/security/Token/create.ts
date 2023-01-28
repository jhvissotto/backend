import { env, config } from '~/src/global'
import { jwt } from '~/src/libs/utils'

type Args = Parameters<typeof jwt.v3.sign>
type Key = Args[1]
type Opts = Args[2]

// prettier-ignore
export function create<   Payload >(
  { payload }: { payload: Payload },
  secret?:    Key,
  options?:   Partial<Opts> & {
    subject:  Opts['subject']
  } 
) {
  //
  // foo
  //

  const { token } = jwt.v3.sign({ payload }, secret || env().APP_KEY_PRIVATE, {
    // from
    issuer: config().appName,
    // exp
    expiresIn: config().tokenExpiration,
    // createdAt
    noTimestamp: true,
    // others
    ...options,
    // subject
    subject: options.subject
  });


  return { token };
}
