import React,{ Component } from 'react';
import './index.css'
export default class Page extends Component{
 constructor(props)
 {
     super(props)
     this.state={
        limit:this.props.total,   
        currentPage:this.props.currentPage,  
     }
     this.createButton = this.createButton.bind(this);
     this.changeVal=this.changeVal.bind(this);
 } 

 changeVal(event)
 {
    this.props.GoToPage(event.target.value);
 }
 createButton(start)
 {
     if(this.props.currentPage==start)
     return(
        <button className="active" onClick={this.changeVal} value={start}>{start}</button>
         );
    else
     return(
    <button className="inactive" onClick={this.changeVal} value={start}>{start}</button>
     );
 }
 render (){
     console.log('\nTotal page numbers are '+this.props.total)
     var i;
     //This will set the limit of page buttons to 5 , if number of pages are more than 5.
    var limit=this.props.total<5?this.props.total:5;
    var buttons=[];
    
    //This will calculate the starting button from where the rendering of page buttons should start
    var start=this.props.currentPage<4?1:((this.props.total-this.props.currentPage)<3?(this.props.total)-4:(this.props.currentPage-2));
    buttons.push(<button onClick={this.changeVal} value={1}>&laquo;</button>)
    for(i=0;i<limit;i++)
    {
        buttons.push(this.createButton(start));
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