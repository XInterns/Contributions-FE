import React, { Component } from 'react';
import './index.css';
import Name from '../Name';
import Picture from '../Picture';
import Date from '../Date';
import Contribution from '../Contribution';

export default class Box extends Component {

    render() {
      return (
<<<<<<< HEAD
        <div className="Rectangle-2" onClick="return true">
=======
        <div className="Rectangle-2">
>>>>>>> 29f9dcc7820d62896e1e0a27d8f89248002acb2b
         
          <div className="row1">

              <div className="col1">
                  <Picture pic={(this.props.it).contributor_name} />
                  <Name name={(this.props.it).contributor_name} />
              </div>
          
              <div className="col2">
                  <Date date={(this.props.it).creation_date} />
          
              </div>
          </div>
         
          <div className="row2">
          <Contribution content={(this.props.it).mesage} />
          </div>
        
        </div>

      )
    }
  }