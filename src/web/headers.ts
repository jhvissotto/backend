import { auth } from '~/src/libs/helpers'

export const headers = ({
  // ======== arguments ======== //
  CacheControl,
  Authorization,
  mode,
}: {
  // ======== arg types ======== //
  CacheControl?: 'no-cache'
  Authorization?: auth.Bearer // | auth.Basic
  mode?: 'cors' | 'no-cors'
}) => {
  // ======== return ======== //
  return {
    'Cache-Control': CacheControl,
    Authorization,
    mode,
  }
}
