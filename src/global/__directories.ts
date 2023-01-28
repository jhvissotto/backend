import { path } from '~/src/libs/helpers'

export const __dir = {
  root: process.cwd(),
  public: path.join(__dirname, '../public'),
  upload: path.join(__dirname, '../public/upload'),
}
