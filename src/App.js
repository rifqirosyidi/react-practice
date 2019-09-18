import React from 'react';
import Header from "./components/Header"
import Body, { AnotherBody } from "./components/Body"
import './App.css';


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
      
      <AnotherBody />
    </div>
  );
}

export default App;
