const mongoose = require('mongoose')

const invitationSchema = new mongoose.Schema(
  {
    to: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    from: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, //ref user
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = mongoose.model('Invitation', invitationSchema)

