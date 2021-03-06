const mongoose = require("mongoose");
const PLM = require("passport-local-mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    picture: String,
    description: String,
    rating: Number,
    tag: {
      type: String,
      enum: ["DJ", "Band"]
    },
    role: {
      type: String,
      enum: ["Artist", "Employer"],
      default: "Artist"
    },
    // social: {
    //   gmail: String,
    //   facebook: String
    // },
    mixcloud: String,
    invitations: Array,
    // Invitations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Invitation" }],
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: "email" });

module.exports = mongoose.model("User", userSchema);
