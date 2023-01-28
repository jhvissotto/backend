import { env } from '~/src/global'
import { Nodemailer } from '~/src/libs/packs/Nodemailer'

// Nodemailer / Mailtrap
export const client = Nodemailer.createTransport({
  host: env().NODEMAILER_HOST,
  port: env().NODEMAILER_PORT,
  secure: true,
  auth: {
    user: env().NODEMAILER_USER,
    pass: env().NODEMAILER_PASS,
  },
})
