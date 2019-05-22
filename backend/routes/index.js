const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("../handlers/passport");
const Invitation = require("../models/Invitation")

const { ObjectId } = require("mongoose").Types;


router.get("/get-artists", (req, res, next) => {
  User.find({ role: "Artist" })
    .then(users => res.json(users))
    .catch(err => res.status(500).json(err));
});

 router.post('/artist-inbox', (req, res) => {
   let employerEmail = req.body.employerEmail
   let artistEmail = req.body.artistEmail
   User.update(
     {email: employerEmail},
     {$push: {invitedArtists: artistEmail}}
   )
 })


//router.post("/artist-inbox", isLogged, (req,res,next) => {
//  if (!req.user) {
//    res.redirect("/login")
//  }
//  if (req.user.role === "Employer") {
//    Invitation.create({ ...req.body })
//    .then(invitation => {
//      console.log(invitation)
//      User.findByIdAndUpdate(    // ESTA MADRE TIENE QUE CREAR LA INVITACIÓN
//        req.user._id,
//        {
//          $push: { invitation: ObjectId(invitation._id)}
//        },
//        { new: true }
//      ).then(user => {
//        console.log(user)
//        res.redirect('/view-all')
//      })
//    })
//    .catch(err => next(err))
//  } else {
//    res.redirect('/login')
//  }
//})

router.post("/signup", (req, res, next) => {
  console.log(req.body);
  User.register(new User(req.body), req.body.password)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err));
});

router.post("/login", passport.authenticate("local"), (req, res, next) => {
  console.log("login");
  return res.send({ user: "user" });
});

router.get("/private", isLogged, (req, res, next) => {
  res.status(200).json({ msg: "You're now logged in" });
});

router.get("/artist/:id", (req, res, next) => {
  User.findById(req.params.id)
    .then(artist => res.json(artist))
    .catch(err => res.json(err));
});

router.patch("/artist/:id", isLogged, (req, res, next) => {
  Artist.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(artist => res.status(200).json(artist))
    .catch(err => res.status(500).json(err));
});

router.get("/logout", (req, res) => {
  req.logout()
  res.json({ message: 'You are logged out' })
})

function isLogged(req, res, next) {
  if (!req.isAuthenticated())
    return res
      .status(401)
      .json({ msg: "Check your info, something is not matching right" });
  next();
}

module.exports = router;
