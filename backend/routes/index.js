const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("../handlers/passport");
const Invitation = require("../models/Invitation");
const path = require("path");

const { ObjectId } = require("mongoose").Types;

router.get("/get-artists", (req, res, next) => {
  User.find({ role: "Artist" })
    .then(users => res.json(users))
    .catch(err => res.status(500).json(err));
});

router.get("/artist-inbox", isLogged, (req, res, next) => {
  Invitation.find({ to: req.user._id })
    .populate("from")
    .populate("to")
    .then(invites => {
      console.log(invites)
      res.json(invites)
    })
    .catch(err => next(err));
});

router.post("/artist-inbox", (req, res, next) => {
  console.log(req.user);
  res.send(req.body.id);
  if (req.user.role === "Employer") {
    Invitation.create({
      from: req.user._id,
      to: req.body.id
    })
      .then(invitation => {
        console.log(invitation);
        User.findByIdAndUpdate(req.body.id, {
          $push: { invitation: invitation._id }
        }).then(user => {
          console.log(user);
        });
      })
      .catch(err => next(err));
  }
});

router.post("/signup", (req, res, next) => {
  console.log(req.body);
  User.register(new User(req.body), req.body.password)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err));
});

router.post("/login", passport.authenticate("local"), (req, res, next) => {
  return res.json({ user: req.user });
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
  req.logout();
  res.json({ message: "You are logged out" });
});

function isLogged(req, res, next) {
  if (!req.isAuthenticated())
    return res
      .status(401)
      .json({ msg: "Check your info, something is not matching right" });
  next();
}

module.exports = router;
