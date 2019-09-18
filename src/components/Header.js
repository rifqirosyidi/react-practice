import React, { Component } from "react";
import logo from '../logo.svg';

class Header extends Component {
    render() {
      return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.props.title}
          </p>
          <div>{this.props.myObj.a}</div>
          {/* You cant just display the object like this.props.myObj it will return an error, 
          you must stringify it first */}
          <div>{JSON.stringify(this.props.myObj)}</div>
          <div>{this.props.myArr[1]}</div>
          <div>{this.props.myFunc(10, 25)}</div>
  
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      )
    }
  }

export default Header;