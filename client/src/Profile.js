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
      restaurants: [],
      list: []
    }
  }

  componentWillMount() {
    axios.get('/saved/profile/' + this.props.user.id).then((res) => {
      // console.log('willMount',res);
      // console.log(this.props.user.restaurant);
      this.setState({
        restaurants: res.data.restaurant,
        user: this.props.user
      });
    });
  }


  render(){
    var display;
    var savedBusiness = this.state.restaurants;
    // console.log(this.state);
    if(savedBusiness.length < 1){
      display = <p>Go save some restaurants!</p>
    }else {
      display = savedBusiness.map((business) => {
        return(<RestaurantsSaved business={business} />);
      });
    }

    if(this.props.user && this.props.user.name){
      // console.log(this.state.user);
      return (<div>
          <h4>Hello, {this.props.user.name}!</h4>
          <p>Saved restaurants:</p>
          {display}
        {/*{displayList}*/}
          <List user={this.props.user} />
        </div>);
    }
    else {
      return (<p>This is a profile page. You need to be logged in to view it.</p>);
    }
  }
}

export default Profile;
