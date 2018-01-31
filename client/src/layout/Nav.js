import React, { Component } from 'react';
import Logout from '../auth/Logout.js';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render(){
    let links = <span />;
    if(this.props.user){
      links = (
        <span>
          <Link to="/profile">Profile</Link>
          <Logout updateUser={this.props.updateUser} />
        </span>);
    }
    else {
      links = (
        <span>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </span>);
    }

    return(
        <div>
          <nav className="nav">
            <a href="/">Home</a>
            <a href="/#team">Team</a>
            <Link to="/results">Search</Link>
            {links}
          </nav>
          <header className="App-header">
            <h1 className="App-title"><i className="large material-icons left">card_travel</i>Venture!</h1>
          </header>
        </div>
      );
  }
}

export default Nav;
