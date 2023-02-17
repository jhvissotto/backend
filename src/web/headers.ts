export const headers = ({
  // ======== arguments ======== //
  CacheControl,
  Authorization,
  mode,
}: {
  // ======== arg types ======== //
  CacheControl?: 'no-cache'
  Authorization?: string
  mode?: 'cors' | 'no-cors'
}) => {
  // ======== return ======== //
  return {
    'Cache-Control': CacheControl,
    Authorization,
    mode,
  }
}
