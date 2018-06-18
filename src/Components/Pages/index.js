import React,{ Component } from 'react';
import './index.css'
export default class Page extends Component{
 constructor(props)
 {
     super(props)
     this.state={
        limit:this.props.total,   
        curr:this.props.curr     
     }
     this.createButton = this.createButton.bind(this);
     this.changeVal=this.changeVal.bind(this);
 } 
 changeVal(event)
 {
    this.props.Go(event.target.value);
 }
 createButton(start)
 {
     if(this.props.curr==start)
     return(
        <button className="active" onClick={this.changeVal} value={start}>{start}</button>
         );
    else
     return(
    <button className="inactive" onClick={this.changeVal} value={start}>{start}</button>
     );
 }
 render (){
     var i;
     var limit=this.props.total<5?this.props.total:5;

    //  console.log('total pages are '+this.props.total)
    //  console.log('\nCurrent page is '+this.props.curr)
    //  console.log('\nlimit is '+limit)
     var buttons=[];
     var start=this.props.curr<4?1:((this.props.total-this.props.curr)<3?(this.props.total)-4:(this.props.curr-2));
     buttons.push(<button onClick={this.changeVal} value={1}>&laquo;</button>)
    
     for(i=0;i<limit;i++)
    {
        buttons.push(' ');
        buttons.push(this.createButton(start));
      //  console.log(' '+start);
        start++;

    }
    buttons.push(<button onClick={this.changeVal} value={this.props.total}>&raquo;</button>)
    
     return (
            <div className="pagination">
                {buttons}
                </div>
     )
 }  
}