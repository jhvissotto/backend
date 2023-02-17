import { parsers } from '~/src/libs/extensions/express'

export function getCredentials(
  req: Parameters<typeof parsers.authBasic.getCredentials>[0]
) {
  // library
  const parsed = parsers.authBasic.getCredentials(req)

  // user & pass
  const user = parsed?.name ?? null
  const pass = parsed?.pass ?? null

  // has
  const hasUser = Boolean(user)
  const hasPass = Boolean(pass)
  const hasBoth = hasUser && hasPass

  // missing
  const missingUser = !hasUser
  const missingPass = !hasPass
  const missingAny = !hasUser || !hasPass
  const missingBoth = !hasUser && !hasPass

  // return
  const credentials = {
    user,
    pass,
    hasUser,
    hasPass,
    hasBoth,
    missingUser,
    missingPass,
    missingAny,
    missingBoth,
  }

  return { credentials }
}
