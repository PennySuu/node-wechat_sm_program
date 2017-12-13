const express = require('express')
const router = express.Router()
const StarModel = require('../models/star')

router.get('/stars', (req, res, next) => {
  StarModel.getStarsByDate(req.query.date).then(result => {
    res.send(result)
  })
})

module.exports = router
