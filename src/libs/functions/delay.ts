export async function delay(wait: number, cb?: () => any, value?: any) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(cb?.()), wait, value);
  });
}
