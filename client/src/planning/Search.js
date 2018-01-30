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
      <div className="Search">
      	<form className="form" onSubmit={(e) => this.props.onSubmit(e)}>
      		<input type="text" 
                placeholder="Where you at?" 
                ref={input => this.search = input} 
                onChange={this.handleInputChange} />
      		<input type="submit" value="search" />
      	</form>
      </div>
    )
  }
}




export default Search;