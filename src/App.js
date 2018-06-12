import React, { Component } from 'react';

import pic from './sw.jpg'
import Search from './Search';
import './App.css'
import './Search.css'
class Name extends React.Component
{
  render()
  {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}

class Picture extends React.Component 
{
  render() 
  {
    return (
      <div>
        <img src={this.props.url}/>
      </div>
    )
  }
}

class Contribute extends React.Component 
{
  render() 
  {
    return (
      <div>
        {this.props.content}
      </div>
    )
  }
}

class Designation extends React.Component
{
  render()
  {
    return (
      <div>
        {this.props.desig}
      </div>
    )
  }
}

class Date extends React.Component
{
  render()
  {
    return (
      <div>
        {this.props.date}
      </div>
    )
  }
}
class Box extends React.Component {
  componentWillReceiveProps(newProps) {

    console.log('Props recieved');
    this.setState({
      name: newProps.name,
      birth_year: newProps.birth_year,
      mass: newProps.mass,
      height: newProps.height,
      hair_color: newProps.hair_color,
    });
  }
  render() {
    return (
      <div className="Rectangle-2" >
        <div className="pic"><Picture url={(this.props.it).height}/></div>
        <div className="name"><Name name={(this.props.it).name} /></div>
        <div className="designation"><Designation desig={"sasas"+(this.props.it).hair_color} /></div>
        <div className="date"><Date date={(this.props.it).mass+"may"} /></div>
      
        
        <div className="contribution"><Contribute content={"Contribution: dassdas dassdas sdasdsa dsadsa s sa da sdassd"+(this.props.it).height} /></div>
      </div>
    )
  }
}

  class Rectangle extends React.Component
  {
    constructor(props)
    {
      super(props)
      this.state={
        items: [],
      }
      this.onValChange = this.onValChange.bind(this);
      this.onGoClick = this.onGoClick.bind(this);
    }

    onValChange(id)
    {
      this.componentDid(id);
    } 
    onGoClick(id)
    {
     this.componentDid(id);
    }

    componentDid(id) {
      fetch(`https://swapi.co/api/people/?search=${id}`)
        .then((response) => response.json())
        .then(
          parsedJson=> {
            this.setState({
             items:parsedJson.results,
           });
           console.log((this.state.items).length);
       
      })
        .catch(
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    renderBox(item)
    {
      return(<Box it={item}/>);
    }
    render()
    {
        var lines=[];
        { this.state.items.map(item => (
                
          lines.push(this.renderBox(item))
         ))}
         
        return (
          <div className="Rectangle-3">
              <div className="Div1" >
              <div className="Wall-of-Contribution" >WALL OF CONTRIBUTION</div> 
                        <div className="Coming-together-is-a">Coming together is a beginning. Keeping together is progress. Working together is success.</div> 
              </div>  
              
                 <Search onValueChange={this.onValChange} onGoClick={this.onGoClick}/>

              <div className="Div3">
              {
              this.state.items.map(item => (
                this.renderBox(item)
              ))
              }
              </div>
          </div>
        )
    }
  }
export default Rectangle;