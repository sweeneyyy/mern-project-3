import React, { Component } from 'react';

class List extends Component {
  constructor(props){
    super(props)
    this.state = {
      error: '',
      toPack: ["socks","shoes","food"],
      newItem: ''
    }
  }

  clear = () => {
    this.setState({ pack: [] });
  }
  deleteItem =(item) => {
  console.log('parent Component delete fucntion');
  console.log(item);
  let toPackLocal = this.state.toPack;
  //idexOf returns in to array. you can then slice
  let itemIndex = toPackLocal.indexOf(item);
  if(itemIndex >= 0){
    toPackLocal.splice(itemIndex, 1);
    this.setState({ toPack:toPackLocal });
  }
}
add = (e) => {
    e.preventDefault();
    console.log('add func', this.state)
    if(this.state.newItem){
    let toPackLocal = this.state.toPack;
    toPackLocal.push(this.state.newItem)
    this.setState({error: '', newItem: '', toPack: toPackLocal});
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
        <packingList items={this.state.toPack} onDelete={this.deleteItem}/>
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

class packingList extends Component{
  render(){
    const packingItems = this.props.items.map(thing =>{
      return (<ItemList key={thing} item={thing} onDelete={this.props.onDelete} />);
    });
    return (
      <ul className='list-group'>
        {packingList}
      </ul>
    );
  }
}
class ItemList extends Component{
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
