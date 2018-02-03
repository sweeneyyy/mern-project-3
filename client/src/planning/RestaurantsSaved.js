import React, { Component } from 'react';

class RestaurantsSaved extends Component{
  render(){
    return(
        <div className="container">
          <div className="row">
            <div className="col s8">
              <ul>
                <li className="restaurants-saved">
                  <h5>{this.props.business.name}</h5>
                  <img className="saved-img" src={this.props.business.imgurl} alt={this.props.business.name} />
                  <span><p>Category: <bold>{this.props.business.category} </bold>
                  | Rating: {this.props.business.rating}</p></span>
                  <a href={this.props.business.url}>Details on Yelp! </a>
                  <input type="button" value="X" id={this.props.business.id} onClick={this.props.saveClick} />
                  <hr />
                </li>
              </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default RestaurantsSaved;
