export function bearer(token: string) {
  if (token) {
    return `Bearer ${token}`
  } else {
    console.warn('>> token is missing')
    return null
  }
}

export type Bearer = ReturnType<typeof bearer>
