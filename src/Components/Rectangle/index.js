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
        page_query:'',
        baseURL:'https://swapi.co/api/people/?search=',
      }
      this.onGoClick = this.onGoClick.bind(this);
      this.GoToPage = this.GoToPage.bind(this);
      this.fetchResults=this.fetchResults.bind(this);
    }
    GoToPage(id)
    {
      this.setState({
        currentPage:id,
        page_query:'&page='+id,
        isLoading:true,
      });
      this.fetchResults(`&page=${id}`);
    }
    fetchResults(pa)
    {
      if(pa===undefined)
        pa=''
      fetch(`${this.state.baseURL}${this.state.query}${pa}`)

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
    onGoClick(id)
    {
     this.setState({
      query:id,
      currentPage:1,
      isLoading : true,
      });
      this.fetchResults();
    }
    componentDidMount(pa)
    {
      this.fetchResults(); 
    }

    renderBox(item) {
      return (<Box it={item} />);
    }
    render() {

      return (

        <div>
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
          currentPage={this.state.currentPage}
          GoToPage={this.GoToPage}
          />
          
        </div>
      )
    }
  }
export default Rectangle;