import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0
    }

    componentWillUnmount() {
        console.log("Unmount")
    }

    componentDidMount(){
        console.log("Mounting")
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