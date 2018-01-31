import React, { Component } from 'react';
import Search from './Search.js';
import RestaurantResults from './RestaurantResults.js';
import EventResults from './EventResults.js';
import axios from 'axios';
// import yelp from 'yelp-fusion';
// import dotenv from 'dotenv';
// dotenv.config();
// const client = yelp.client();

const API_URL = 'https://api.yelp.com/v3/events';

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

   getInfo = (e) => {
     e.preventDefault();
     console.log('got to fnc');
     axios.get(API_URL + '?q=' + this.state.query + '&API_KEY=dS6JAjUsGVL3nJTrKPBawK1COSDDLaeeCoA9xmPivPeUpRPaHphdH5ym50LPkjasMbc_TMXQYcvW5s0uTHbZZEbAg3QZbnyMq6zdjIWd6NQCybzJjlwpiWZXHdVwWnYx')
     .then(({data}) => {
       console.log(data);
       this.setState({
         results: data.data
       })
     })
     .catch(err => {
       console.log('error/catch');
       console.log(err);
     })
   }

  render() {
    return(
      <div className="Results">
        <h3>Results Page</h3>
        <Search setQuery={this.setQuery} onSubmit={this.getInfo} />
        <RestaurantResults />
        <EventResults />
      </div>
    )
  }
}


export default Results;
