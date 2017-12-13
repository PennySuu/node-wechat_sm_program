const Star = require('../lib/mongo').Star
module.exports = {
  getStarsByDate: function getStarsByDate(date) {
    return Star.find({ date }).exec()
  },
  createStar: star => {
    return Star.create(star).exec()
  }
}
