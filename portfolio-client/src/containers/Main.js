import React from "react";
import {Switch, Route, withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Homepage from "../components/Homepage";
import Bio from "../components/Bio";
import Recents from "../components/Recents";
import Contact from "../components/Contact";


const Main = props => {
  return (
      <div className="container">
        <Switch>
          <Route exact path="/" render={props => <Homepage {...props}/>}/>
          <Route exact path="/about" render={props => <Bio {...props}/>}/>
          <Route exact path="/gallery" render={props => <Recents {...props}/>}/>
          <Route exact path="/contact" render={props => <Contact {...props}/>}/>
        </Switch>
      </div>
  );
};

export default Main;
