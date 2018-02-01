import React, { Component } from 'react';
import Search from './Search.js';
import RestaurantResults from './RestaurantResults.js';
import EventResults from './EventResults.js';
import axios from 'axios';
// import yelp from 'yelp-fusion';
// import dotenv from 'dotenv';
// dotenv.config();

// const yelp = require('yelp-fusion');
// const client = yelp.client(process.env.YELP_CLIENT_KEY);

class Results extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: '',
      results:[]
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('got to fnc');
    axios.post('/planning/Results', {
      location: this.state.query
    }).then((result) => {
      this.setState({ })
    })

  }


  render() {
    return(
      <div className="Results">
        <h3>Results Page</h3>
        <Search setQuery={this.setQuery} onSubmit={this.handleSubmit} />
        <RestaurantResults />
        <EventResults />
      </div>
    )
  }
}


export default Results;
