import React, { Component } from 'react';

class RestaurantsSaved extends Component{
  render(){
    return(
        <div className='row'>
          <div className='card'>
                <div className="card-image-saved">
                  <img className="saved-img" src={this.props.business.imgurl} alt={this.props.business.name} />
                </div>
                <div className="card-content">
                <ul>
                  <li className="restaurants-saved">
                    <h5>{this.props.business.name}</h5>
                    <span><p>Category: <bold>{this.props.business.category} </bold>
                    | Rating: {this.props.business.rating}</p></span>
                  <a href={this.props.business.url}><img className="yelp" src="https://i.imgur.com/cSLthnw.png" alt="yelp"/></a>
                    <input type="button" value="X" id={this.props.business.id} onClick={this.props.saveClick} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
    );
  }
}
export default RestaurantsSaved;
