import React, { Component } from 'react';

class EventResults extends Component {
  render() {


	{/*const toDoItems = this.props.items.map(thing => {
      return (<ListItem item={thing} />);
    }) */}
  const Events = () => {
  	return 
  }

    return(
      <div className="EventResults">
        <h3>Events near your area:</h3>
        <ul classNam="result-list">
        	<Events />
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
				<p><bold>{this.props.item.start}</bold></p>
			</li>
		);
	}
}






export default EventResults;