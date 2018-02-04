import React, { Component } from 'react';
import '../App.css';

class About extends Component {
  render() {
    return(
      <div className="About-container">
      <section id="team">
        <h5>team</h5>
        <div className="container">
        <div className="row">
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img src="https://placebear.com/500/600" alt="team-member" />
              </div>
              <div className="card-content">
                <p>Winston Summers</p>
              </div>
              <div className="card-action">
                <a href="https://github.com/winstonsummers">github</a>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img src="https://placebear.com/g/500/600" alt="team-member" />
              </div>
              <div className="card-content">
                <p>Tony Phan</p>
              </div>
              <div className="card-action">
                <a href="https://github.com/rallysport206">github</a>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img src="https://placebear.com/500/600" alt="team-member"/>
              </div>
              <div className="card-content">
                <p>Sweeney Arnett</p>
              </div>
              <div className="card-action">
                <a href="https://github.com/sweeneyyy">github</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
    )
  }
}


export default About;
