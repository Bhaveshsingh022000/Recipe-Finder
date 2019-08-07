import React, {Component} from 'react';
import './Search.css';
class Search extends Component{
  render(){
    return(
      <div className="searchField">
      <input className="search" type = "text" placeholder = "Enter the name of the dish" />
      <button className="searchButton">Get Ingredients</button>
      </div>
    );
  }
}
export default Search;
