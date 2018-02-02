import React, { Component } from 'react';

class BusinessResults extends Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col s8">
            <ul>
              <li className="restaurant-results">
                <h5>{this.props.business.name}</h5>
                <img src={this.props.business.image_url} alt={this.props.business.name} />
                <span><p>Category: <bold>{this.props.business.categories[0].title} </bold>
                | Rating: {this.props.business.rating}</p></span>
                <a href={this.props.business.url}>Details on Yelp! </a>
                <input type="button" value="save" id={this.props.business.id} onClick={this.props.saveClick} />
                <hr />
                </li>
              </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default BusinessResults;
