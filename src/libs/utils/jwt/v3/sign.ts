import { jwt } from "~/src/libs/utils";

type Args = Parameters<typeof jwt.v1.sign>;
type Key = Args[1];
type Opts = Args[2];

// prettier-ignore
export function sign<     Payload >(
  { payload }: { payload: Payload },
  secretOrPrivateKey:     Key      ,
  options?:               Opts &  {
    issuer:               Opts['issuer'],
    expiresIn:            Opts['expiresIn'],
    noTimestamp:          Opts['noTimestamp'],
    subject:              Opts['subject']
  }
) {
  //
  // foo
  //
  const token = jwt.v1.sign({ payload }, secretOrPrivateKey, {
    issuer:       options.issuer,
    expiresIn:    options.expiresIn,
    noTimestamp:  true,
    ...options,
    subject:      options.subject
  });

  return { token };
}
