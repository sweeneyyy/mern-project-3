import React, { Component } from 'react';
import Logout from '../auth/Logout.js';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render(){
    let links = <span />;
    if(this.props.user){
      links = (
        <span>
          <Link to="/saved/profile">Profile</Link>
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
        <div class="navbar-fixed">
          <nav class="transparent">
            <div class="nav-wrapper">
              <div class="row">
                <div class="col s12">
                  <a href="/">Home</a>
                  <a href="/#team">Team</a>
                  <Link to="/results">Search</Link>
                  {links}
                </div>
              </div>
            </div>
          </nav>
          <header className="App-header">
            <p className="App-title"><i className="large material-icons left">card_travel</i>Venture!</p>
          </header>
        </div>
      );
  }
}

export default Nav;
