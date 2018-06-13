import React, { Component } from 'react';
import './index.css'
import './Search.css'
    
function debounce(fn, delay) {
  var timer = null;
  return function () {
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}

class Search extends Component {
  constructor(props)
  {
    super(props)
    this.state= {
         value:'',
    }
    this.onValChange = this.onValChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this); 
  }
  
  componentWillMount() {
    this.handleSearchDebounced = debounce(function (id) {
      this.props.onValueChange(id)
    }, 1000);
  }

  onValChange(event) {
    this.setState({
      value: event.target.value,
    })
    this.handleSearchDebounced(event.target.value);
  }  

  onButtonClick() {
    var id = this.state.value;
    this.props.onGoClick(id);
  }

  render() {
    return (
      <div className="Div2">
        <div className="Tag">
        </div>
        <div className="Search">
          <input className="Searchbox" type="text" value={this.state.value} placeholder="Search Here" onChange={this.onValChange} ></input>
          <button type="submit" className="button" onClick={this.onButtonClick}><span className="go">Go</span></button>
        </div>
      </div>
    );
  }
}

export default Search;
