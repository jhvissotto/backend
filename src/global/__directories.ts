import { path } from '~/src/libs/helpers'

// prettier-ignore
export const __dir = {
  root:   process.cwd(),
  view:   path.join(__dirname, '../view'),
  public: path.join(__dirname, '../public'),
  upload: path.join(__dirname, '../public/upload'),
}
