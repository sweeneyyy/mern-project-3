import React, { Component } from 'react';
import BusinessResults from './BusinessResults.js';

class RestaurantResults extends Component {
  render(){
    var names = [];
    var businesses = this.props.businesses;
    if(businesses.length < 1){
      names = <h3>Do a search to get results!</h3>
    }else{
      names = businesses.map((business) => {
        console.log(business.name);
        <BusinessResults name={business.name} />
      });
    }
		return(
      <div className="results-container">
        <h1>Results!</h1>
			<ul>
        {names}
        {console.log(this.props.businesses)}
        {console.log(names)}
			</ul>
    </div>
		);
	}
}



export default RestaurantResults;
