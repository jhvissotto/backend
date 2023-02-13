import { auth } from '~/src/libs/helpers'

export const headers = ({
  // ======== arguments ======== //
  CacheControl,
  Authorization,
}: {
  // ======== arg types ======== //
  CacheControl?: 'no-cache'
  Authorization?: auth.Bearer // | auth.Basic
}) => {
  // ======== return ======== //
  return {
    'Cache-Control': CacheControl,
    Authorization,
  }
}
