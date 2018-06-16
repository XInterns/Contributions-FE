import React, { Component } from 'react';
import pics from './sw.jpg';
import Search from './Search';
import './App.css'
import './Search.css'
import Name from './Components/Name';

class Picture extends React.Component {
    constructor(props) {
    super(props)
    this.Seperate = this.Seperate.bind(this);
  }
  Seperate() {
    var String_name = this.props.pic;
    var divide = String_name.split(" ");
    if (divide.length == 1) {
      return divide[0][0].toUpperCase();
    }
    else {
      return divide[0][0].toUpperCase() + divide[(divide.length) - 1][0].toUpperCase();
    }
  }

  render() {
    return (
      <div className="pic">
        {this.Seperate()}
    </div>


    )
  }
}

class Contribute extends React.Component {
  render() {
    return (
      <div className="contribution" onclick="document.getElementById('id01').style.display='block'">
        {
          this.props.content
          }
      </div>
    
    )
  }
}

class Date extends React.Component {
  constructor(props) {
    super(props)
    this.Seperate = this.Seperate.bind(this);
  }
  Seperate() {
    var date = this.props.date;
    var divide = date.split("T");
    return divide[0];
  }
  render() {
    return (
      <div className="date">
        {
          this.Seperate()
          }
      </div>
    )
  }
}

class Box extends React.Component {
  constructor(props) {
    super(props)
    this.Seperate = this.Seperate.bind(this);
  }
  Seperate() {
    return "hi";
  }

  render() {
    return (
      <div className="Rectangle-2" onClick="this.Seperate">
        <Picture pic={(this.props.it).contributor_name} />
        <Name name={(this.props.it).contributor_name} />
        <Date date={(this.props.it).creation_date} />
        <Contribute content={(this.props.it).message} />
      </div>
    )
  }
}

  class Rectangle extends React.Component
  {
    constructor(props) {
      super(props)
      this.state = {
        items: [],
        isLoading: false,
      }
      this.onValChange = this.onValChange.bind(this);
      this.onGoClick = this.onGoClick.bind(this);
    }

    onValChange(id)
    {
      this.componentDid(id);
      this.setState({
        isLoading : true
       });
    } 
    onGoClick(id)
    {
     this.componentDid(id);
     this.setState({
      isLoading : false,
      });
    }
    componentDidMount()
    {
      fetch(`http://192.168.3.158:5000/`)
        .then((response) => response.json())
        .then(
          parsedJson => {
            this.setState({
              items: parsedJson,
              isLoading: false,
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
    componentDid(id) {
      fetch(`http://192.168.3.158:5000/search/${id}`)
        .then((response) => response.json())
        .then(
          parsedJson => {
            this.setState({
              items: parsedJson,
              isLoading: false,
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

          <Search onValueChange={this.onValChange} onGoClick={this.onGoClick} />

          <div className="Div3">
            {
              this.state.items.map(item => (
                this.renderBox(item)
              ))
            }
            {this.state.isLoading === true ? <div className="Loading"></div> : <div />}
          </div>
          
        </div>
      )
    }
  }
export default Rectangle;