import React, { Component } from 'react';
import List from './planning/List.js';
import RestaurantsSaved from './planning/RestaurantsSaved.js';
import EventsSaved from './planning/EventsSaved.js';
import axios from 'axios';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state= {
      user: {},
      restaurants: []
    }
  }

  componentWillMount() {
    axios.get('/saved/profile/' + this.props.user.id).then((res) => {
      console.log(res);
      console.log(this.props.user.restaurant);
      this.setState({ user: res.data })
    })
  }

  render(){
    var saved;
    var restaurants = this.state.restaurants;
    console.log("restaurants", restaurants);

    if(this.props.user && this.props.user.name){
      console.log(this.state.user);
      return (<div>
          <h2>HELLO AGAIN {this.props.user.name}!</h2>
          <p>Saved restaurants:</p>
          <p>{this.props.user.restaurant[1].name}</p>
          <img src={this.props.user.restaurant[1].imgurl} alt={""}/>
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
