import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){
    return(
      <div>
        <nav>
          <div><button><Link to="/">SplashPage</Link></button></div>
          I am a nav bar
        </nav>
        <header>
          I am a header
        </header>
        {this.props.children}
        <footer>
          I am a footer
        </footer>
      </div>
    )
  }
}
