import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
  render(){
    return(
      <div className = "about-wrapper">
        <h1>About Me.</h1>
        <ul>
          <li><h2>Junior Web Developer</h2></li>
          <li><h2>Iron Yard Graduate</h2></li>
          <li><h2>Front-end Enthusiast</h2></li>
        </ul>
      </div>
    )
  }
}
