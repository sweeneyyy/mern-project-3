import React, { Component } from 'react';

class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: ''
    }
  }

  handleInputChange = (e) => {
    this.props.setQuery(e.target.value);
  }

  render() {
    return(
      <div className="Search container">
      	<form className="form" onSubmit={(e) => this.props.onSubmit(e)}>
      		<input type="text"
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
