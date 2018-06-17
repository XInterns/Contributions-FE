import React, { Component } from 'react';
import Search from '../Search/';
import './index.css'
import Box from '../Box/';

class Rectangle extends Component
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
      isLoading : true,
      });
    }
    componentDidMount()
    {
      fetch(`https://swapi.co/api/people/?search=r2`)
        .then((response) => response.json())
        .then(
          parsedJson => {
            this.setState({
              items: parsedJson.results,
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
      fetch(`https://swapi.co/api/people/?search=${id}`)
        .then((response) => response.json())
        .then(
          parsedJson => {
            this.setState({
              items: parsedJson.results,
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