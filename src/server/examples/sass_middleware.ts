// ============================================================= //
// ======== npx express-generator --view=ejs --css=sass ======== //
// ============================================================= //
import express from 'express'
import sass_middleware from 'node-sass-middleware'
import path from 'path'

const app = express()

// prettier-ignore
app.use(sass_middleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}))
