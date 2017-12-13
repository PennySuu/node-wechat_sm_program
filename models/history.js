const History = require('../lib/mongo').History
module.exports = {
  getHistoryByDate: function getHistoryByDate(date) {
    return History.find({ date }).exec()
  }
}
