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
        type:'search',
      }
      this.onGoClick = this.onGoClick.bind(this);
      this.GoToPage = this.GoToPage.bind(this);
      this.fetchResults=this.fetchResults.bind(this);
      this.onSee=this.onSee.bind(this);
      this.onSearch=this.onSearch.bind(this);
    }

    onSee()
    {

      this.setState({
        type:'search',
        isLoading:true,
        currentPage:1,
        query:'',
      })
      this.fetchResults('search');
    }
    
    onGoClick(id)
      {
        this.setState({
          type:'tag',
          currentPage:1,
          isLoading:true,
          query:id,
        })
    this.fetchResults('tag',id); 

    }
    onSearch(id)
      {
        this.setState({
          type:'search',
          query:id,
          currentPage:1,
          isLoading:true
        })
    this.fetchResults('search',id); 

    }


    GoToPage(page)
    {
      this.setState({
        currentPage:page,
        page_query: page,
        isLoading:true,
      });
      this.fetchResults(this.state.type,this.state.query,`${page}`);
    }
    fetchResults(type,query,pa)
    {
      if(query===undefined)
      query=''
      if(pa===undefined)
        pa=''
      var url='';
      if(type==='search')
        url=Config.baseurl;
      else
        if(type==='tag')
          url=Config.tagsearch;

      fetch(`${url}${query}&page=${pa}`)

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
      this.fetchResults('search'); 
    }

    renderBox(item,i) {
       return (<Box it={item} key={i} />);

    }
    render() {

      return (

        <div>
          <Search onValueChange={this.onSearch} onTagClick={this.onGoClick} onGoClick={this.onSearch} SeeAll={this.onSee} />
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
