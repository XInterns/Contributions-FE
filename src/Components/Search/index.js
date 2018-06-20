import React, { Component } from 'react';
import './index.css'

import Tags from '../Tags/'

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
        items: [],
         value:'',
    }
    this.onValChange = this.onValChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this); 
    this.TagsReq=this.TagsReq.bind(this);
    this.SeeAll=this.SeeAll.bind(this);
   
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

 TagsReq(val){
  this.props.onGoClick(val);
 }

SeeAll()
{
  this.props.SeeAll();
}

  componentDidMount()
  {
    fetch(`https://swapi.co/api/people/`)
      .then((response) => response.json())
      .then(
        parsedJson => {
          this.setState({
            items: parsedJson.results,
            isLoading: false,
          });
        })
      .catch(
        
        (error) => {
          this.setState({
            error,
            isLoading: false
          });
        }
      )
  }
  renderTag(item,i) {
    return (
     
      <Tags it={item} key={i} TagsRequest={this.TagsReq}/>
      
  )
  }
  render() {
    return (
      <div className="taskbar">
        <div className="tag">      
          {
            this.state.items.slice(0,4).map((item,i) => (
              this.renderTag(item,i)
            ))
          }
          <div className = "dropdown">
            <span className="dropdown-toggle" data-toggle="dropdown" > Tags 
                                                                                     
            <span className = "caret"> </span> </span>
            <ul className = "dropdown-menu scrollable-menu pull-right">
            <li><span id="Tags">
            {
            this.state.items.map((item,i) => (
              this.renderTag(item,i)
            ))
          }</span></li>
            </ul>
      
          </div>
          <div><span className="home" onClick={this.SeeAll}> See All</span></div>
        </div>
        <div className="search">
          <input className="searchbox" type="text" value={this.state.value} placeholder="Search Here" onChange={this.onValChange} ></input>
          <button type="submit" className="button" onClick={this.onButtonClick}><span className="go">Go</span></button>
        </div>
      </div>
    );
  }
}

export default Search;
