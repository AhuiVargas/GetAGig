const mongoose = require('mongoose')

const invitationSchema = new mongoose.Schema(
  {
    artistLiked: String,
    likedBy: String,
    description: String,
    contact: String
  }
)

module.exports = mongoose.model('Invitation', invitationSchema)

