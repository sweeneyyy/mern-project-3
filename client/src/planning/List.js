import React, { Component } from 'react';

class List extends Component {
  constructor(props){
    super(props)
    this.state = {
      error: '',
      toPack: [],
      newItem: ''
    }
  }

  clear = () => {
    this.setState({ pack: [] });
  }
  deleteItem =(item) => {
  console.log('parent Component delete fucntion');
  console.log(item);
  let toPackLocal = this.state.toDos;
  //idexOf returns in to array. you can then slice
  let itemIndex = toPackLocal.indexOf(item);
  if(itemIndex >= 0){
    toDosLocal.splice(itemIndex, 1);
    this.setState({ toPack:toPackLocal });
  }
}
add = (e) => {
    e.preventDefault();
    if(this.state.newItem){
    let toPackLocal = this.state.toPack;
    toDosLocal.push(this.state.newItem)
    this.setState({error: '', newItem: '', toPack: toPackLocal});
  }
  else{
    this.setState({error: 'Please enter something to pack'})
  }
}
newItemChange = (e) => {
  this.setState({ newItem: e.target.value });
}
  render() {
    return(
      <div className="PackingList">
        <h2 className="packing-list-title">Packing List</h2>
        <packingList item={this.state.packingList} onDelete={this.deleteItem}/>
        <p className='text-danger'>{this.state.error}</p>
        <form onSubmit={this.add}>
          <input type='text' className='form-control' placeholder='add something to pack' onChange={this.newItemChange} value={this.state.newItem} />
        </form>
        <div className='text-left'>
          <button className='' onClick={this.add}>Add</button>
          <OverlayTrigger placement="right" overlay={tooltip}>
            <button className='' onClick={this.clear}>CLEAR</button>
          </OverlayTrigger>
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
