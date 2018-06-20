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
          <Date date={(this.props.it).mass} />
          <Contribution content={(this.props.it).height+"saihdjinasdjass s sadf sad f asdf asd fasd f sdd fasdf asd www.google.com  asd sad"}/>
        </div>
      )
    }
  }