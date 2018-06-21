import React, { Component } from 'react';
import './index.css';

export default class Contribution extends Component {
    constructor(props){
      super(props);
      this.FindLink=this.FindLink.bind(this);
      this.checkLink=this.checkLink.bind(this);
    }
    checkLink(check_iflink,contri)
    {
      return check_iflink.test(contri);
    }

    FindLink()
    {
      var contri=this.props.content;
      var check_iflink=new RegExp("(https|http+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?");
      
      if(this.checkLink(check_iflink,contri))
      {  
      var link=contri.match(check_iflink)[0].split(" ");
      var splitcontri=contri.split(link[0])
      
      return <div><b>Contribution:&nbsp;</b>{splitcontri[0]}<a href={link[0]}>{link[0]}</a>{splitcontri[1]}</div>;
      }
      else
      {
        return <div><b>Contribution:&nbsp;</b>{contri}</div>;
      }
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
  
