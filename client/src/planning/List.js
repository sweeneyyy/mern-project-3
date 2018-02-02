import React, { Component } from 'react';
import axios from 'axios';

class List extends Component {
  constructor(props){
    super(props)
    this.state = {
      error: '',
      toPack: ["socks","shoes","food"],
      newItem: ''
    }
  }
  //Clear entire packing list
  clear = () => {
    this.setState({ toPack: [] });
  }
  //Delete a single item from the list
  deleteItem = (item) => {
    console.log('parent Component delete function');
    console.log(item);
    // the items in the packing list
    let toPackLocal = this.state.toPack;
    //indexOf returns in to array. you can then slice
    let itemIndex = toPackLocal.indexOf(item);
    if(itemIndex >= 0){
      toPackLocal.splice(itemIndex, 1);
      this.setState({ toPack:  toPackLocal });
    }
  }
  //Add new item to the list
  add = (e) => {
      e.preventDefault();
      console.log('add func', this.state)
      if(this.state.newItem){
      let toPackLocal = this.state.toPack;
      toPackLocal.push(this.state.newItem)
      this.setState({error: '', newItem: '', toPack: toPackLocal});
      //update database with user items
      axios.post('/saved/profile/list', {
        user: this.props.user,
        list: this.state.toPack
      }).then((res) => {
        console.log("list data", res.data)
      }).catch((err) => {
        console.log("err", err);
      })
    }

    else{
      this.setState({error: 'Please enter something to pack'})
    }
  }

  newItemChange = (e) => {
    this.setState({ newItem: e.target.value });
    console.log('change', this.state.newItem)
  }

  render() {
    return(
      <div className="PackingList container">
        <h2 className="packing-list-title">Packing List</h2>
        <PackingList items={this.state.toPack} onDelete={this.deleteItem} />
        <form onSubmit={this.add}>
          <input type='text' className='form-control' placeholder='add something to pack' onChange={this.newItemChange} value={this.state.newItem} />
        </form>
        <div className='text-left'>
          <button className='' onClick={this.add}>Add</button>
        </div>
      </div>
    );
  }
}

class PackingList extends Component{
  render(){
    const packingItems = this.props.items.map(thing =>{
      return (<ListItem key={thing} item={thing} onDelete={this.props.onDelete} />);
    });
    return (
      <ul className='list-group'>
        {packingItems}
      </ul>
    );
  }
}

class ListItem extends Component{
  deleteHandler= () =>{
    console.log('delete handler');
    console.log(this.props.item);
    this.props.onDelete(this.props.item);
  }

  render(){
    return(
      <li className='packing-list-item'>
        {this.props.item}
        <button className='' onClick={this.deleteHandler}>X</button>
      </li>
    );
  }
}


export default List;
