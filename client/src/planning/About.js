import React, { Component } from 'react';
import '../App.css';

class About extends Component {
  render() {
    return(
      <div className="About-container z-depth-3">
      <section id="team">
        <h5>The Team</h5>
        <p id="team-description">A full-stack project for General Assembly Web Development Immersive created by:</p>
        <div className="container">
<<<<<<< HEAD
        <div className="row">
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <a href="https://github.com/winstonsummers" className="team-link">
                  <img className="profile-pic" src="https://i.imgur.com/d2WbTpOm.jpg" alt="Winston" />
                </a>
              </div>
=======
          <div className="row">
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img className="profile-pic" src="https://i.imgur.com/d2WbTpOm.jpg" alt="Winston" />
                </div>
>>>>>>> b63747d8dd899c0a5d1d5b37418ef05f4e86fd6d
              <div className="card-content team-members">
                <a href="https://github.com/winstonsummers" className="team-link">Winston Summers</a>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <a href="https://github.com/rallysport206" className="team-link">
                  <img className="profile-pic" src="https://i.imgur.com/Xoe7tBpl.jpg?1" alt="Tony" />
                </a>
              </div>
              <div className="card-content">
                <a href="https://github.com/rallysport206" className="team-link">Tony Phan</a>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <a href="https://github.com/sweeneyyy" className="team-link">
                  <img className="profile-pic" src="https://i.imgur.com/SMoWjxim.jpg?2" alt="Sweeney" />
                </a>
              </div>
              <div className="card-content">
                <a href="https://github.com/sweeneyyy" className="team-link">Sweeney Arnett</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
    );
  }
}

export default About;
