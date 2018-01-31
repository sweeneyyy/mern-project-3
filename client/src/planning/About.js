import React, { Component } from 'react';
import '../App.css';

class About extends Component {
  render() {
    return(
      <div className="About-container">
        <h5>team</h5>
        <div className="container">
        <div className="row">
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img src="https://placebear.com/500/600" />
              </div>
              <div className="card-content">
                <p>Winston Summers</p>
              </div>
              <div className="card-action">
                <a href="#">github</a>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img src="https://placebear.com/g/500/600" />
              </div>
              <div className="card-content">
                <p>Tony Phan</p>
              </div>
              <div className="card-action">
                <a href="#">github</a>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img src="https://placebear.com/500/600" />
              </div>
              <div className="card-content">
                <p>Sweeney Arnett</p>
              </div>
              <div className="card-action">
                <a href="#">github</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}


export default About;
