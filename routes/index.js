const fs = require('fs')
const path = require('path')

module.exports = app => {
  let ref = path.join(__dirname, './')
  let dir = fs.readdirSync(ref)
  _.forOwn(dir, value => {
    let filePath = path.resolve(ref, value),
      file = fs.lstatSync(filePath),
      ext = path.extname(filePath)
    if (ext !== '.js') return
    let data = require(filePath)
    if (!~value.indexOf('index')) app.use(data)
  })
}
