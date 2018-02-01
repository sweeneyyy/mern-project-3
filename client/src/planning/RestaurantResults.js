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
        return (<BusinessResults business={business} saveClick={this.props.saveClick} />);
      });
    }
		return(
      <div className="results-container container">
        <h1>Results!</h1>
        <div className="row">
    			<ul className="col s12 m4">
            {names}
            {/*}{console.log(this.props.businesses)}
            {console.log(names)}*/}
    			</ul>
      </div>
    </div>
		);
	}
}



export default RestaurantResults;
