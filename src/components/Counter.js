import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div>
                <p>Counter: {this.props.count}</p>
                <button onClick={this.props.increment} >Increment</button>
                <button onClick={this.props.decrement} >Decrement</button>
            </div>
        );
    }
}

export default Counter;