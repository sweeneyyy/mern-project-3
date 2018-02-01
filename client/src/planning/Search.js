import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: '',
      name: []
    }
  }


  handleInputChange = (e) => {
    this.setState({query: e.target.value});
  }

  preventing = (e) => {
    e.preventDefault();
    axios.post('/saved/results', {
      location: this.state.query,
    }).then((res) => {
      console.log("response is", res.data.businesses[0].name);
      this.setState({name: res.data.businesses[0].name});
      console.log("name...", this.state.name);
      console.log("got to then", this.state.query)
      this.setState({ results: e.prettyJson})
      console.log(this.state.results);
    }).catch((err) => {
      console.log("error:", err);
    })
  }

  render() {
    return(
      <div className="Search container">
      	<form className="form" onSubmit={this.preventing}>
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
