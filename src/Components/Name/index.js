import React, { Component } from 'react';
import './index.css';

export default class Name extends Component {
    render() {
      return (
        <div className="name">
          {this.props.name}
        </div>
      )
    }
  }

  
  