// libs
import { Nodemailer } from '~/src/libs/packs'
// local
import { config } from '.'

// Nodemailer / Mailtrap
export const client = Nodemailer.createTransport({
  secure: true,
  auth: {
    user: config.access.user,
    pass: config.access.pass,
  },
  host: config.access.host,
  port: config.access.port,
})
