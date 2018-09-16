import React, { Component } from 'react';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";

const App = () => (
  <Router>
  <div className="onBoarding">
    <Navbar />
    <Main />
  </div>
</Router>
);

export default App;
