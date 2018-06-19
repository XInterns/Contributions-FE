import React, { Component } from 'react';
import './index.css';
import Name from '../Name';
import Picture from '../Picture';
import Date from '../Date';
import Contribution from '../Contribution';
export default class Box extends Component {

    render() {
      return (
        <div className="Rectangle-2">
          <Picture pic={(this.props.it).name} />
          <Name name={(this.props.it).name} />
          <Date date={(this.props.it).mass+"/08/2019"} />
          <Contribution content={(this.props.it).height+"this is a sample https://www.facebook.com/ data i am working on to check the worrking of my code and  front end then ill intigrate it with backend"}/>
        </div>
      )
    }
  }