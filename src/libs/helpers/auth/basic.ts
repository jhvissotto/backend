// prettier-ignore
export function basic(credentials: { 
  username?: string, 
  password?: string, 
}) {
  return credentials
}

export type Basic = ReturnType<typeof basic>
