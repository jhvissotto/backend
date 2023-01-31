import { path } from '~/src/libs/helpers'

// prettier-ignore
export const dir = {
  root:     process.cwd(),
  view:     path.join(__dirname, '../../src/view'),
  public:   path.join(__dirname, '../../src/public'),
  upload:   path.join(__dirname, '../../src/public/upload'),
}
