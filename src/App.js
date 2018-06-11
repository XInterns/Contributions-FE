import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import pic from './sw.jpg'
class Name extends React.Component
{
  render(){
    return (
        <div className="name">
            {this.props.name}
          </div>
    )
  }
}
class Picture extends React.Component
{
  render(){
    return (
        <div className="Bitmap">
            <img src={this.props.url} className="Bitmap"/>
          </div>
    )
  }
}
class Contribute extends React.Component
{
  render(){
    return (
        <div className="Contribution-Philos">
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
      <div className="designation">
        {this.props.desig}
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
      mass:newProps.mass,
      height:newProps.height,
    });
  }
    render()
    {
      return (
        <div className="Rectangle-2 ">
          <Name name={(this.props.it).name}/>
          <Picture url={pic}/>
          <Designation desig={(this.props.it).mass}/>
          <Contribute content={(this.props.it).height}/>
           </div>
      )
    }
}

  class Rectangle extends React.Component{
    constructor(props)
    {
      super(props)
      this.state={
        items: [],
      }
    }

    componentDidMount() {
      fetch("https://swapi.co/api/people/?search=a")
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

    rederBox(item)
    {
      return(<Box it={item}/>);
    }
    render()
    {
        var lines=[];
        
        var item=[]
        item=this.state.items;
        for(var i=0;i<(this.state.items).length;i++)
        {
          console.log("Name is "+(this.state.items[i]).name);
          lines.push(this.rederBox((this.state.items[i])));
        }
        return (
          <div className="Rect">
          {
          lines
          }
          </div>
        )
    }

  }
export default Rectangle;