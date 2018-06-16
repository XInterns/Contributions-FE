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
          <Date date={(this.props.it).height} />
          <Contribution content={(this.props.it).mass+"sadjkandkjasndjaskndkasjndaskjjd bnkjasnbdkjasdkjasbdkaj sbddkjasjbdkja sjbdkjasbdasskj jdbaskjjdbsakj dbaskjbdkjas jbdkjasbdkja sjbdkjasbdkasd bsaskjjdbsak jdbkjasdjasjdk jasjdbasbdkja sbdkjasbdkjas bdjkasdb b"} />
        </div>
      )
    }
  }