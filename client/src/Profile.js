import React, { Component } from 'react';
import List from './planning/List.js';
import RestaurantsSaved from './planning/RestaurantsSaved.js';
import EventsSaved from './planning/EventsSaved.js';
import axios from 'axios';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state= {
      restaurants: {}
    }
  }

  componentWillMount() {
    axios.get('/saved/profile/' + this.props.user.id).then((res) => {
      console.log(res);
      this.setState({restaurants: res.data})

    })
  }

  render(){
    if(this.props.user && this.props.user.name){
      console.log(this.state.restaurants);
      return (<div>
          <h2>HELLO AGAIN {this.props.user.name}!</h2>
          <p>{this.state.restaurants.name}</p>
          <List />
          <EventsSaved />
        </div>);
    }
    else {
      return (<p>This is a profile page. You need to be logged in to view it.</p>);
    }
  }
}

export default Profile;
