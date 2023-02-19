import Sendgrid from '@sendgrid/mail'

export function createClient() {
  const client = Sendgrid
  return { client }
}
