import React, { Component } from 'react';
import Search from '../Search/';
import './index.css'
import Box from '../Box/';
import Page from '../Pages';
import Config from '../../config.json';

export default class Body extends Component
  {
    constructor(props) {
      super(props)
      this.state = {
        items: [],
        isLoading: true,
        query:'',
        total:0,
        currentPage:1,
        page_query:'',
        RecInPage:1,
      }
      this.onGoClick = this.onGoClick.bind(this);
      this.GoToPage = this.GoToPage.bind(this);
      this.fetchResults=this.fetchResults.bind(this);
      this.fetchTags=this.fetchTags.bind(this);
      this.onSee=this.onSee.bind(this);
      this.onSearch=this.onSearch.bind(this);
    }

    onSee()
    {

      this.setState({
        isLoading:true,
        currentPage:1,
        query:'',
      })
      this.fetchResults();
    }
    
    onGoClick(id)
      {
        this.setState({
          currentPage:1,
          isLoading:true
        })
    this.fetchTags(id); 

    }
    onSearch(id)
      {
        this.setState({
          query:id,
          currentPage:1,
          isLoading:true
        })
    this.fetchResults(id); 

    }


    GoToPage(id)
    {
      this.setState({
        currentPage:id,
        page_query: id,
        isLoading:true,
      });
      this.fetchResults(this.state.query,`${id}`);
    }
    fetchTags(id)
    {
      
      fetch(`${Config.tagsearch}${id}`)

       .then((response) => response.json())
        .then(
          parsedJson => {
            this.setState({
              items: parsedJson.results,
              isLoading: false,
              total:parseInt(parsedJson.count,10),
             
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
    fetchResults(query,pa)
    {
      if(query===undefined)
      query=''
      if(pa===undefined)
        pa=''
      fetch(`${Config.baseurl}${query}&page=${pa}`)

       .then((response) => response.json())
        .then(
          parsedJson => {
            this.setState({
              items: parsedJson.results,
              isLoading: false,
              total:parseInt(parsedJson.noOfRecords,10),
              RecInPage:parseInt(parsedJson.size,10)
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
    componentDidMount()
    {
      this.fetchResults(); 
    }

    renderBox(item,i) {
       return (<Box it={item} key={i} />);

    }
    render() {

      return (

        <div>
          <Search onValueChange={this.onSearch} onGoClick={this.onSearch} SeeAll={this.onSee} />
          <div className="contri_body">
            {this.state.items.map((item,i) => (
                this.renderBox(item,i)
              ))
            }
            {this.state.isLoading === true ? <div className="loading"></div> : <div />}

          </div> 

          {Math.ceil(parseInt(this.state.total,10)/(10))===0 && this.state.isLoading === false ?<div className="Not_Found"><b>Sorry! No Records Found</b></div>:
          <Page total={Math.ceil(parseInt(this.state.total,10)/parseInt(this.state.RecInPage,10))}  
          currentPage={this.state.currentPage}
          GoToPage={this.GoToPage}
          />}
          
          
        </div>
      )
    }
  }
