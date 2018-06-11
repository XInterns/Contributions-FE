import React, { Component } from 'react';
import './Search.css';

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
  
  onValChange(event)
  {
    
    this.setState({
      value:event.target.value,
    })
      var id=this.state.value;
      {this.props.onValueChange(id)}
      console.log(id);
    
    
  }
  
  onButtonClick()
  {
    var id=this.state.value;
    this.props.onGoClick(id);
  }
  render() {
    return (
      <div className="bar"> 
        <div>
        <input type="textfield" className="tag"  disabled></input>
        </div>
        <div class="search">
          <input type="text" class="Search" debounceTimeout={2000} minLength={2} value={this.state.value} placeholder="Search Here"  onChange={this.onValChange}></input>
          <button type="submit" className="button" onClick={this.onButtonClick}><span className="go">Go</span></button>
        </div>
      </div>
    );
  }
}

export default Search;
