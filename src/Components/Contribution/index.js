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
      var check_iflink=new RegExp("(https|http)://[A-Za-z./0-9?#=:%\"_&'@$^*;()-]+",'gm');
     
      if(this.checkLink(check_iflink,contri))
      {  

      var no_link =contri.match(check_iflink);
      var finallink=[]
      var last=contri; 
      var temp='';    
                                      
      for(var i=0;i<no_link.length;i++)
      {
        temp=last.split(no_link[i]);
        if(temp[0]!=null)
        {
          finallink.push(temp[0])
          finallink.push(<a href={no_link[i]} key={i} >{no_link[i]}</a> );
          if(temp[1]!=null)
          {
          last =temp[1];
          }
        }

      }

        
        
      return <div><b>Contribution:&nbsp;</b>{finallink}</div>;
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
  
