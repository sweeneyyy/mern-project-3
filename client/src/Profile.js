import React, { Component } from 'react';
import List from './planning/List.js';
import RestaurantsSaved from './planning/RestaurantsSaved.js';
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
    if (this.props.user && this.props.user.id) {
      axios.get('/saved/profile/' + this.props.user.id).then((res) => {
        this.setState({
          restaurants: res.data.restaurant,
          user: this.props.user
        });
      });
    }else { //if no user then redirect home
      this.props.history.push('/');
    }
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
          <div className="container saved-business">
          <h4 id="profile-heading">{this.props.user.name}'s Profile</h4>
            <div className="row">
              <div className="col s6 packing-list">
                <h6>Packing List:</h6>
                <List user={this.props.user} />
              </div>
              <div className="col s6">
                <h6>Saved Restaurants:</h6>
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
