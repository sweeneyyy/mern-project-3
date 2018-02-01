import React, { Component } from 'react';

class BusinessResults extends Component{
  render(){
    return(
      <div className="container">
      <li>
        <div>
          <h5>{this.props.business.name}</h5>
          <a href={this.props.business.url}>Look on Yelp!</a>
        </div>
        <div>
          <img src={this.props.business.image_url} alt={this.props.business.name} />
        </div>
        <div>
          <p>Rating: {this.props.business.rating}</p>
          <p>Categories: <bold>{this.props.business.categories[0].title}</bold></p>
        </div>
        <hr />
      </li>
      </div>
    );
  }
}
export default BusinessResults;
