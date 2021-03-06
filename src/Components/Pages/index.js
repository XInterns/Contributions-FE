import React,{ Component } from 'react';
import './index.css'
import Config from '../../config.json';

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
    this.returnLimit=this.returnLimit.bind(this);
}

changeVal(event)
{
    if(this.props.currentPage!==event.target.value)
   this.props.GoToPage(event.target.value);
}
createButton(start,i)
{
    if(parseInt(this.props.currentPage,10)===parseInt(start,10))
    return(
       <button className="active" key={i+1} onClick={this.changeVal} value={start}>{start}</button>
        );
   else
    return(
       <button className="inactive"  key={i+1} onClick={this.changeVal} value={start}>{start}</button>
    );
}
returnLimit(total)
{
    var set_limit=Config.limit;
    return total<set_limit?total:set_limit;
}

render (){
    
    var i;
    //This will set the limit of page buttons to 5 , if number of pages are more than 5.
   var limit=this.returnLimit(this.props.total);
   var buttons=[];
   var currentPage=parseInt(this.props.currentPage,10);
   var total=parseInt(this.props.total,10);
   if(total===1)
    return (<div />)
   //This will calculate the starting button from where the rendering of page buttons should start
   var start=(currentPage<=parseInt((limit+1)/2,10))?1:((total-currentPage)<parseInt((limit+1)/2,10)?(total)-(limit-1):(currentPage-(parseInt((limit+1)/2,10)-1)));
 
   buttons.push(<button onClick={this.changeVal} key={0} value={1}>&laquo;</button>)
   if(currentPage!==1)
   buttons.push(<button className="previous" onClick={this.changeVal} key={1} value={currentPage-1}>&#8249;</button>)
   
   for(i=0;i<limit;i++)
   {
       buttons.push(this.createButton(start,i+1));
       start++;

   }
   if(currentPage<total)
   buttons.push(<button className="next" onClick={this.changeVal} key={i+2} value={currentPage+1}>&#8250;</button>)
   
   buttons.push(<button key={i+3} onClick={this.changeVal} value={this.props.total}>&raquo;</button>)
   
    return (
           <div className="pagination">
               {buttons}
           </div>
    )
}  
}