import React, { Component } from 'react';
import List from './planning/List.js';
import RestaurantsSaved from './planning/RestaurantsSaved.js';
// import EventsSaved from './planning/EventsSaved.js';
import axios from 'axios';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state= {
      user: {},
      restaurants: [],
      list: []
    }
  }

  componentWillMount() {
    axios.get('/saved/profile/' + this.props.user.id).then((res) => {
      this.setState({
        restaurants: res.data.restaurant,
        user: this.props.user
      });
    });
  }

  render(){
    var display;
    var savedBusiness = this.state.restaurants;
    if(savedBusiness.length < 1){
      display = <p>Go save some restaurants!</p>
    }else {
      display = savedBusiness.map((business) => {
        return(<RestaurantsSaved business={business} />);
      });
    }

    if(this.props.user && this.props.user.name){
      return (
        <div className="row">
          <div className="container saved-business">
          <h4>Hello, {this.props.user.name}!</h4>
          <div className="col s6 packing-list">
            <List user={this.props.user} />
          </div>
          <div className="col s6">
            <h3>Saved restaurants:</h3>
            {display}
          </div>
          </div>
        </div>);
    }
    else {
      return (<p>This is a profile page. You need to be logged in to view it.</p>);
    }
  }
}

export default Profile;
