import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import LayoutThing from "./components/layout/Header"
import FooterThing from "./components/layout/Footer"
import Artist from "./components/artist/Artist"
import Edit from "./components/artist/ArtistEdit"
import Inbox from "./components/artist/ArtistInbox"

const Router = () => (
  <>
  <LayoutThing />
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/login" component={Login} />
    <Route path="/artist" component={Artist} />
    <Route path="/artist-edit" component={Edit} />
    <Route path="/artist-inbox" component={Inbox} />
  </Switch>
  <FooterThing />
  </>
);

export default Router;
