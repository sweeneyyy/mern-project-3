import React, { Component } from 'react';

class RestaurantResults extends Component {
  render() {

  	{/*const toDoItems = this.props.items.map(thing => {
      return (<ListItem item={thing} />);
    }) */}
    const Restaurants = () => {
      return (
    <div>Things will go here</div>
    )
    }

    return(
      <div className="RestaurantResults">
        <h3>Restaurants:</h3>
        <ul>
        	<Restaurants />
        </ul>
      </div>
    )
  }
}


class ListItem extends Component {
	render(){
		return(
			<li>
				<h5>{this.props.item.name}</h5>
				<p>{this.props.item.eventsite}</p>
				<img src={this.props.item.img} alt={this.props.item.name} />
				<p>{this.props.item.description}</p>
			</li>
		);
	}
}



export default RestaurantResults;