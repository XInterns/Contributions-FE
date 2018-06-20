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
  console.log("bo");
  this.props.SeeAll();
}

  componentDidMount()
  {
    fetch(`https://swapi.co/api/planets/`)
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
          console.log("jo")
        }
      )
  }
  renderTag(item) {
    return (
     
      <Tags it={item} TagsRequest={this.TagsReq}/>
      
  )
  }
  render() {
    return (
      <div className="Div2">
        <div className="Tag">
          {
            this.state.items.slice(0,4).map(item => (
              this.renderTag(item)
            ))
          }
          <div className = "dropdown">
            <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" > Tags 
                                                                                     
            <span className = "caret"> </span> </a>
            <ul className = "dropdown-menu scrollable-menu pull-right">
            <li><a href="javascript:void(0);" id="Tags">
            {
            this.state.items.map(item => (
              this.renderTag(item)
            ))
          }</a></li>
            </ul>
            
          </div>
          <div><a href="javascript:void(0);" onClick={this.SeeAll}> See All</a></div>
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
