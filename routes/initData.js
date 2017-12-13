const express = require('express')
const router = express.Router()

const fs = require('fs')
const path = require('path')

router.get('/init', (req, res, next) => {
  let ref = path.join(__dirname, '../initData')
  let dir = fs.readdirSync(ref)
  _.forOwn(dir, value => {
    let filePath = path.resolve(ref, value),
      file = fs.lstatSync(filePath),
      ext = path.extname(filePath)
    if (ext !== '.js') return
    let data = require(filePath)
    let name = value.substring(0, value.length - 3)
    create(name, data)
  })
  res.send('done')
})

function create(name, data) {
  let table = require('../lib/mongo')[name]
  _.forEach(data, item => {
    table.create(item).exec()
  })
}

module.exports = router
