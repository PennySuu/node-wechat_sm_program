const express = require('express')
const router = express.Router()
const HistoryModel = require('../models/history')

router.get('/history', (req, res, next) => {
  HistoryModel.getHistoryByDate(req.query.date).then(result => {
    res.send(result)
  })
})

module.exports = router
