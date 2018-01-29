import React, { Component } from 'react';
import Search from './planning/Search.js';
import RestaurantResults from './planning/RestaurantResults.js';
import EventResults from './planning/EventResults.js';

class Results extends Component {
  render() {
    return(
      <div className="Results">
        <h3>Results Page Coming Soon!</h3>
        <Search />
        <RestaurantResults />
        <EventResults />
      </div>
    )
  }
}






export default Results;