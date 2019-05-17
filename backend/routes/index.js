const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("../handlers/passport");

router.get("/get-artists", (req, res, next) => {
  User.find({role: "Artist"})
  .then(users => res.json(users))
  .catch(err => res.status(500).json(err))
});

router.post('/signup', (req, res, next) => {
  console.log(req.body)
  User.register(new User(req.body), req.body.password)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err))
})

router.post('/login', passport.authenticate('local'), (req, res, next)=> {
  console.log('login')
  return res.send({user: 'user'})
})

router.get('/private', isLogged, (req, res, next) => {
  res.status(200).json({msg: "You're now logged in"})
})

router.patch('/artist/:id', (req, res, next) => {
  Artist.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(artist => res.status(200).json(artist))
    .catch(err => res.status(500).json(err))
})

router.get('/artist/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(artist => res.json(artist))
    .catch(err => res.json(err))
})

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});


function isLogged(req, res, next) {
  if (!req.isAuthenticated()) return res.status(401).json({ msg: "Check your info, something is not matching right"})
  next()
}



module.exports = router;
