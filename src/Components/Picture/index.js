import React, { Component } from 'react';
import './index.css';

export default class Picture extends Component {
    constructor(props) {
    super(props)
    this.Seperate = this.Seperate.bind(this);
  }
  Seperate() {
    var String_name = this.props.pic;
    var divide = String_name.split(" ");
    if (divide.length === 1) {
      return divide[0][0].toUpperCase();
    }
    else {
      return divide[0][0].toUpperCase() + divide[(divide.length) - 1][0].toUpperCase();
    }
  }

  render() {
    return (
      <div className="pic">
        {this.Seperate()}
    </div>


    )
  }
}