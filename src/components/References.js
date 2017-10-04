import React, { Component } from 'react';

export default class References extends Component {
  render(){
    return(
      <div className = "references-wrapper">
        <h1>References</h1>
          <ul>
            <li><h2>Person #1</h2></li>
              <ul>
                <li>Phone</li>
                <li>Email</li>
              </ul>
          </ul>
          <ul>
            <li><h2>Person #2</h2></li>
              <ul>
                <li>Phone</li>
                <li>Email</li>
              </ul>
          </ul>
          <ul>
            <li><h2>Person #3</h2></li>
              <ul>
                <li>Phone</li>
                <li>Email</li>
              </ul>
          </ul>
      </div>
    )
  }
}
