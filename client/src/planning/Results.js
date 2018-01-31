import React, { Component } from 'react';
import Search from './Search.js';
import RestaurantResults from './RestaurantResults.js';
import EventResults from './EventResults.js';
import axios from 'axios';
// import yelp from 'yelp-fusion';
// import dotenv from 'dotenv';
// dotenv.config();

const yelp = require('yelp-fusion');

const client = yelp.client(process.env.YELP_CLIENT_KEY);

// const API_URL = 'https://api.yelp.com/v3/events';

class Results extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: '',
      results:[]
    }
  }

  setQuery = (searchTerm) => {
     this.setState({ query: searchTerm });
   }

  // const searchRequest = {
  //   location: this.state.query
  // };

  // getInfo = (e) => {
  //    e.preventDefault();
  //    console.log('got to fnc');
  //    client.search({location: this.state.query}).then(response => {
  //     const result = response.jsonBody;
  //     const prettyJson = JSON.stringify(result, null, 4);
  //     console.log(prettyJson);
  //   }).catch(e => {
  //     console.log(e);
  //   });
  // }

  render() {
    return(
      <div className="Results">
        <h3>Results Page</h3>
        <Search setQuery={this.setQuery} />
        <RestaurantResults />
        <EventResults />
      </div>
    )
  }
}


export default Results;
