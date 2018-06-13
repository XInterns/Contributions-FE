import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <div className="bar"> 
        <div>
        <input type="textfield" className="tag"  disabled></input>
        </div>
        <div class="search">
          <input type="text" class="Search" placeholder="Search Here"></input>
          <button type="submit" className="button"><span className="go">Go</span></button>
        </div>
      </div>
    );
  }
}

export default Search;
