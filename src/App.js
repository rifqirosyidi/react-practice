import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function Body(props) {
  return (
    <div>
      <p>{props.text}</p>
      <p>{props.text2}</p>
      <p>The Result of 3 + 5 is {props.myFunc(3,5)}</p>
    </div>
  )
}


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

function App() {
  const add = (a, b) => {
    return a + b;
  }

  return (
    <div className="App">
      <Header 
        title={"Hello World"} 
        num={5} 
        myArr={[
          "Array One",
          "Array Two"
        ]}
        myObj={{ 
          a: "Object a", 
          b: "Object b"
        }}
        myFunc={add} 
      />

      <Body 
        text={"Lorem Ipsum Dolor Sit Amet."} 
        text2={"Text Two"}
        myFunc={add} />
    </div>
  );
}

export default App;
