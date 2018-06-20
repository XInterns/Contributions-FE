import React, { Component } from 'react';
import './index.css'
import SetTags from '../Set Tags/'


export default class Tags extends Component
{
  render(){
    return(
      <div className="tagging">
       
        <SetTags Tag={(this.props.it).name} TagR={this.props.TagsRequest}/>

      </div>

    )
  }
}