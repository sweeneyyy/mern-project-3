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
      businesses:[]
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange = (e) => {
    this.setState({query: e.target.value});
  }


  preventing = (e) => {
    e.preventDefault();
    axios.post('/saved/results', {
      location: this.state.query,
    }).then((res) => {
      console.log(res.data);
      this.setState({businesses: res.data.businesses});
    }).catch((err) => {
      console.log("error:", err);
    })
  }
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('got to fnc');
  //   axios.post('/planning/Results', {
  //     location: this.state.query
  //   }).then((result) => {
  //     this.setState({ })
  //   })

  // }


  render() {
var results;
var res=this.state.businesses
    if(this.state.businesses){
      results = res.map((b)=>{
        <li>b</li>
      });
    }else{
      results = <p>none</p>
      console.log(this.state.businesses);
    }
    return(
      <div className="Results">
        <h3>Results Page</h3>
        {results}
        <Search query={this.state.query} handleInputChange={(event) => this.handleInputChange(event)} preventing={this.preventing} onSubmit={this.handleSubmit} />
        <RestaurantResults businesses={this.state.businesses} />
        <EventResults />
      </div>
    )
  }
}


export default Results;
