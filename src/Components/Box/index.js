import React, { Component } from 'react';
import './index.css';
import Name from '../Name';
import Picture from '../Picture';
import Date from '../Date';
import Contribution from '../Contribution';

export default class Box extends Component {

  clickEvent()
  {

  }
    render() {
      return (
        <div className="details" onClick={this.clickEvent}>
         
          <div className="row1">

              <div className="col1">
                  <Picture pic={this.props.it.name} />
                  <Name name={this.props.it.name} />
              </div>
          
              <div className="col2">
                  <Date date={this.props.it.height} />
          
              </div>
          </div>
         
          <div className="row2">
          <Contribution content={this.props.it.mass+"sadjhasdkas http://google.com dsa dhjasd sad asd sa das d as dsa d as das d asd as"} />
          </div>
        
        </div>

      )
    }
  }