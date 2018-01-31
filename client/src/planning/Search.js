import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({query:e.target.value});
  }

  perventing = (e) => {
    e.preventDefault();
    axios.post('/saved/results', {
      location: this.state.query
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log("error:"+err);
    })
  }

  render() {
    return(
      <div className="Search container">
      	<form className="form" onSubmit={this.perventing}>
      		<input type="text"
                name="location"
                placeholder="Enter Location"
                ref={input => this.search = input}
                onChange={this.handleInputChange} />
              <button type="submit" value="search" className="waves-effect waves-teal btn-flat">Search<i class="material-icons left">search</i></button>
      	</form>
      </div>
    )
  }
}




export default Search;
