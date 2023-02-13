import { env } from '~/src/global'
import { Cloudinary } from '~/src/libs/packs'

export const cloudinary = Cloudinary.config({
  cloud_name: env().CLOUDINARY_CLOUD_NAME,
  api_key: env().CLOUDINARY_KEY_API,
  api_secret: env().CLOUDINARY_KEY_SECRET,
  secure: true,
})
