import React, { Component } from 'react';

class NavBar extends Component {
  state = {  }
  render() { 
    return ( 
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="something">{this.props.title}</a>
        </nav>
      );
  }
}
 
export default NavBar;