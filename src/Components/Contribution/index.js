import React, { Component } from 'react';
import './index.css';

export default class Contribution extends Component {
    render() {
      return (
        <div className="contribution">
          
          <b>
            Contribution: 
            </b>
            {
            this.props.content
            }
        </div>
      
      )
    }
  }
  