import React, { Component } from 'react';

class BusinessResults extends Component{
  render(){
    return(
      <div className="container">
        <li>
          <h5>{this.props.business.name}</h5>
          <img src={this.props.business.image_url} alt={this.props.business.name} />
          <p>Rating: {this.props.business.rating}</p>
          <p>Category: <bold>{this.props.business.categories[0].title}</bold></p>
          <a href={this.props.business.url}>Look on Yelp!</a>
          <input type="button" value="save" id={this.props.business.id} onClick={this.props.saveClick} />
          <hr />
        </li>
      </div>
    );
  }
}
export default BusinessResults;
