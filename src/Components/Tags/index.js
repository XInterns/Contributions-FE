import React, { Component } from 'react';
import './index.css'
import Set_tags from '../Set Tags/'


export default class Tags extends Component
{
  render(){
    return(
      <div className="Tags">
       
        <Set_tags Tag={(this.props.it).name} TagR={this.props.TagsRequest}/>

      </div>

    )
  }
}