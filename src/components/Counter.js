import React, { Component } from 'react';

class Counter extends Component {

    constructor(props){
        super(props)

        this.state = {
            count: this.props.initialVal
        }
    }
    
    BtnIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    BtnDecrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <p>Counter: {this.state.count}</p>
                <button onClick={this.BtnIncrement} >Increment</button>
                <button onClick={this.BtnDecrement} >Decrement</button>
            </div>
        );
    }
}

export default Counter;