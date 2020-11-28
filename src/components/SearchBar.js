import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: " " };

  onSubmit = (e) => {
    e.preventDefault(); //We prevent the form to reload the page
    this.props.onFormSubmit(this.state.term); //We send from this child to the parent the state of term
  };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });    
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onSubmit} className="ui form">
          <label>Video Search</label>
          <input
            type="text"
            placeholder="Search.."
            value={this.state.term}
            onChange={this.onInputChange}
          ></input>
        </form>
      </div>
    );
  }
}

export default SearchBar;
