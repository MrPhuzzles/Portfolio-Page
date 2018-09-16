import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class Navbar extends Component {
  render(){
    return(
      <ul class="nav nav-tabs justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/gallery">Recent Work</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
    )
  }
}

export default Navbar;
