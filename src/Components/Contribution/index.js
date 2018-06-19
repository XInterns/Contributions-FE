import React, { Component } from 'react';
import './index.css';

export default class Contribution extends Component {
    constructor(props){
      super(props);
      this.FindLink=this.FindLink.bind(this);
    }

    FindLink(){
      var contri=this.props.content;
      var check_iflink=new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?");  
      var link=contri.match(check_iflink)[0].split(" ");
      var splitcontri=contri.split(link[0])
      
      return <div>{splitcontri[0]}<a href={link[0]}>{link[0]}</a>{splitcontri[1]}</div>;
    }

    render() {
      return (
        <div className="contribution">
          {
            this.FindLink()
          }
        </div>
      
      )
    }
  }
  