import React, { Component } from 'react';

class NavBar extends Component {
  state = {  }
  render() { 
    return ( 
        <nav className="navbar" style={{ backgroundColor:this.props.backgroundColor, height: 100 }}>
          <a className="navbar-brand" href="something" style={{ color: "#fff" }}>{this.props.title}</a>
        </nav>
      );
  }
}
 
export default NavBar;