import { path } from '~/src/libs/helpers'

// prettier-ignore
export const dir = {
  root:     process.cwd(),
  view:     path.v1.join(__dirname, '../../src/view'),
  public:   path.v1.join(__dirname, '../../src/public'),
  upload:   path.v1.join(__dirname, '../../src/public/upload'),
}
