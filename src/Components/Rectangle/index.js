import React, { Component } from 'react';
import Search from '../Search/';
import './index.css'
import Box from '../Box/';
import Page from '../Pages';
class Rectangle extends Component
  {
    constructor(props) {
      super(props)
      this.state = {
        items: [],
        isLoading: false,
        query:'',
        total:0,
        currentPage:1,
        page_query:''
      }
      this.onGoClick = this.onGoClick.bind(this);
      this.Go = this.Go.bind(this);
    }
    Go(id)
    {
      this.setState({
        currentPage:id,
        page_query:'&page='+id,
        isLoading:true,
      });
      this.componentDidMount(`&page=${id}`);
    }

    onGoClick(id)
    {
     this.setState({
      query:id,
      currentPage:1,
      isLoading : true,
      });
      this.componentDidMount();
    }
    componentDidMount(pa)
    {
      if(pa==undefined)
        pa='';
      fetch(`https://swapi.co/api/people/?search=${this.state.query}${pa}`)
        .then((response) => response.json())
        .then(
          parsedJson => {
            this.setState({
              items: parsedJson.results,
              isLoading: false,
              total:parseInt(parsedJson.count),
              });
          })
        .catch(
          (error) => {
            this.setState({
              error,
              isLoading: false
            });
          }
        )
    }
    renderBox(item) {
      return (<Box it={item} />);
    }
    render() {

      return (
        <div className="Rectangle-3">
          <div className="Div1" >
            <div className="Wall-of-Contribution" >WALL OF CONTRIBUTION</div>
            <div className="Coming-together-is-a">Coming together is a beginning. Keeping together is progress. Working together is success.</div>
          </div>

          <Search onValueChange={this.onGoClick} onGoClick={this.onGoClick} />
          <div className="Div3">
            {
              this.state.items.map(item => (
                this.renderBox(item)
              ))
            }
            {this.state.isLoading === true ? <div className="Loading"></div> : <div />}
          </div> 
          <Page total={Math.ceil(parseInt(this.state.total)/(10))}  
          curr={this.state.currentPage}
          Go={this.Go}
          />
          
        </div>
      )
    }
  }
export default Rectangle;