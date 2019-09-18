import React from "react";

function Body(props) {
    return (
      <div>
        <p>{props.text}</p>
        <p>{props.text2}</p>
        <p>The Result of 3 + 5 is {props.myFunc(3,5)}</p>
      </div>
    )
  }
  
export function AnotherBody(props) {
    return (
      <div>
        <p>This is Another Body</p>
      </div>
    )
}


export default Body;