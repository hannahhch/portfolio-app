import React, { Component } from 'react';

export default class Contacts extends Component {
  render(){
    return(
      <div className = "contacts-wrapper">
        <h1>Contact Me.</h1>
          <ul>
            <li><h2>Email</h2></li>
            <li><h2>LinkedIn</h2></li>
            <li><h2>GitHub</h2></li>
          </ul>
      </div>
    )
  }
}
