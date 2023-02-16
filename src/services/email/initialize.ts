import * as nodemailer from './nodemailer'
import * as sendgrid from './sendgrid'

// prettier-ignore
export function initialize({ provider }: { provider?: 'Nodemailer' | 'Sendgrid' }) {
 
  if (provider == 'Nodemailer')
  return {
    send: nodemailer.send
  }

  
  if (provider == 'Sendgrid')
  return {
    send: sendgrid.send
  }

}
