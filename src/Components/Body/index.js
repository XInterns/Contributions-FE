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
      }
      this.onGoClick = this.onGoClick.bind(this);
      this.GoToPage = this.GoToPage.bind(this);
      this.fetchResults=this.fetchResults.bind(this);
      this.fetchSeeall=this.fetchSeeall.bind(this);
      this.fetchTags=this.fetchTags.bind(this);
      this.onSee=this.onSee.bind(this);
    }

    onSee()
    {

      this.setState({
        isLoading:true,
        currentPage:1,
      })
      this.fetchSeeall();
    }
    
    onGoClick(id)
      {
        this.setState({
          currentPage:1,
          isLoading:true
        })
    this.fetchTags(id); 

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
    fetchTags(id)
    {
      
      fetch(`${Config.baseurl}${id}`)

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
    fetchSeeall()
    {
      
      fetch(`${Config.baseurl}`)

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
    fetchResults(pa)
    {
      if(pa===undefined)
        pa=''
      fetch(`${Config.baseurl}${this.state.query}${pa}`)

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
          <Search onValueChange={this.onGoClick} onGoClick={this.onGoClick} SeeAll={this.onSee} />
          <div className="contri_body">
            {this.state.items.map((item,i) => (
                this.renderBox(item,i)
              ))
            }
            {this.state.isLoading === true ? <div className="loading"></div> : <div />}

          </div> 
          <Page total={Math.ceil(parseInt(this.state.total,10)/(10))}  
          currentPage={this.state.currentPage}
          GoToPage={this.GoToPage}
          />
          
        </div>
      )
    }
  }
