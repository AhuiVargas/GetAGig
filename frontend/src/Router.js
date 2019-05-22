import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import LayoutThing from "./components/layout/Header";
//import FooterThing from "./components/layout/Footer";
import ArtistInbox from "./components/artist/ArtistInbox";
import ViewAll from "./components/artist/ViewAll";
import PreSignUp from "./components/signup/PreSignUp";
import ArtistSignUp from "./components/signup/ArtistSignUp";
import EmployerSignUp from "./components/signup/EmployerSignUp";

const Router = () => (
  <>
    <LayoutThing />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route path="/pre-signup" component={PreSignUp} />
      <Route path="/artist-signup" component={ArtistSignUp} />
      <Route path="/employer-signup" component={EmployerSignUp} />
      <Route exact path="/login" component={Login} />
      <Route path="/artist-inbox" component={ArtistInbox} />
      <Route path="/view-all" component={ViewAll} />
      <Route component={() => <p>404</p>} />
    </Switch>
  </>
);

export default Router;
