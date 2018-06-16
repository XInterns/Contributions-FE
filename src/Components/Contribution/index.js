import React, { Component } from 'react';
import './index.css';

export default class Contribution extends Component {
    render() {
      return (
        <div className="contribution">
          {
            this.props.content
            }
        </div>
      
      )
    }
  }
  