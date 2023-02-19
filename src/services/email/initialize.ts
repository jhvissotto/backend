// local
import { nodemailer, sendgrid } from '.'

// prettier-ignore
export function initialize({ provider }: { provider: 'Nodemailer' | 'Sendgrid' }) {
 
  if (provider == 'Nodemailer')
  return {
    send: nodemailer.send
  }

  
  if (provider == 'Sendgrid')
  return {
    send: sendgrid.send
  }

}
