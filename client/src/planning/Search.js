import React, { Component } from 'react';

// const RestaurantNames = (props) => {
//   //map the results to an array of <li> tags
//   const options = props.names.map((item)=>(
//     <li key={item.id}>
//       <p>{item.name}</p>
//     </li>
//   ))
//   //return an array of <li> tags inside of a <ul> tag
//   console.log(options);
//   return <ul>{options}</ul>
// }

class Search extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     query: '',
  //     businesses: []
  //   }
  // }
  //
  //
  // handleInputChange = (e) => {
  //   this.setState({query: e.target.value});
  // }
  //
  //
  // preventing = (e) => {
  //   e.preventDefault();
  //   axios.post('/saved/results', {
  //     location: this.state.query,
  //   }).then((res) => {
  //     console.log(res.data);
  //     this.setState({businesses: res.data.buisnesses});
  //   }).catch((err) => {
  //     console.log("error:", err);
  //   })
  // }

  render() {
    return(
      <div className="full-page-search">
      <div className="Search container">
      	<form className="form" onSubmit={this.props.preventing}>
      		<input type="text"
                name="location"
                placeholder="Enter Location"
                value={this.props.query}
                onChange={this.props.handleInputChange} />
            <button type="submit" value="search" className="waves-effect waves-teal btn-flat">Search<i class="material-icons left">search</i></button>
        </form>
      </div>
    </div>
    )
  }
}


export default Search;
