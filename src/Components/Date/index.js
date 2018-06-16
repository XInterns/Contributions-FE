import React, { Component } from 'react';
import './index.css';

export default class Date extends Component {
    constructor(props) {
      super(props)
      this.Seperate = this.Seperate.bind(this);
    }
    Seperate() {
      var date = this.props.date;
      var divide = date.split("T");
      return divide[0];
    }
    render() {
      return (
        <div className="date">
          {
            this.Seperate()
            }
        </div>
      )
    }
  }