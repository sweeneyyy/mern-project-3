import React, { Component } from 'react';

class Search extends Component {
  render() {
    return(
      <div className="Search">
      	<form className="form">
      		<input type="text" placeholder="Where you at?" />
      		<input type="submit" value="search" />
      	</form>
      </div>
    )
  }
}






export default Search;