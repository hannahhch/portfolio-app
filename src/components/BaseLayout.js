import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){
    return(
      <div>
        <nav>
          <div><button><Link to="/">Home</Link></button></div>
          <div><button><Link to="/about">About</Link></button></div>
          <div><button><Link to="/portfolio">Portfolio</Link></button></div>
        </nav>
        {this.props.children}
        <footer>
        </footer>
      </div>
    )
  }
}
