import React, { Component } from 'react';
import './index.css'


export default class Set_tags extends Component
{ 

  constructor(props) {
    super(props);
    this.click=this.click.bind(this);
    }
    click(){
      var val=this.props.Tag;
      this.props.TagR(val);
    }
    render(){
      return(
        <div className="Tag_Element">
         <a href="javascript:void(0);" onClick={this.click}> {this.props.Tag}</a>
        </div>
      )
    }
}