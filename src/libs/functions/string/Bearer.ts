export function Bearer(token: string) {
  if (token) {
    return `Bearer ${token}`;
  } else {
    return null;
  }
}
