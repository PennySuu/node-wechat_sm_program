const express = require('express')
const router = express.Router()
const BirthdayModel = require('../models/birthday')

router.get('/birthday', (req, res, next) => {
  BirthdayModel.getBirthday().then(result => {
    res.send(result)
  })
})

module.exports = router
