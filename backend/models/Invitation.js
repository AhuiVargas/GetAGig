const mongoose = require('mongoose')

const invitationSchema = new Mongoose.Schema(
  {
    title: String,
    description: String,
    contact: String
  }
)

module.exports = mongoose.model('Invitation', invitationSchema)

