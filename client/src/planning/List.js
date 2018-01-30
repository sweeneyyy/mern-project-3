import React, { Component } from 'react';

class List extends Component {
  constructor(props){
    super(props)
    this.state = {
      error: '',
      items: [],
      newItem: ''
    }
  }

  clear = () => {
    this.setState({ items: [] });
  }
  
  //TODO: delete item function

  //TODO: add item function


  render() {
    return(
      <div className="PackingList">
        <h3>Packing List Coming Soon!</h3>
      </div>
    )
  }
}



export default List;



