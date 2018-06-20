import React, { Component } from 'react';
import './index.css'


export default class SetTags extends Component
{ 

  constructor(props) {
    super(props);
    this.click=this.click.bind(this);
    }
    click()
    {
      var val=this.props.Tag;
      this.props.TagR(val);
    }
    render(){
      return(
        <div >
         <span className="tag_element" onClick={this.click}> {this.props.Tag}</span>
        </div>
      )
    }
}