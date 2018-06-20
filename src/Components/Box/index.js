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
          <Picture pic={(this.props.it).contributor_name} />
          <Name name={(this.props.it).contributor_name} />
          <Date date={(this.props.it).creation_date} />
          <Contribution content={(this.props.it).mesage}/>
        </div>
      )
    }
  }