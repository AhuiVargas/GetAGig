const mongoose = require('mongoose')

const invitationSchema = new mongoose.Schema(
  {
    to: String,
    from: String, //ref user
    contact: String
  }
)

module.exports = mongoose.model('Invitation', invitationSchema)

