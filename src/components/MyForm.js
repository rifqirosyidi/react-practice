import React, { Component } from 'react';

class MyForm extends Component {
    
    state = {
        name: '',
        fruit: '',
        rememberMe: false,
        select: 'Hello'
    }

    handleChangeName = (event) => {
        this.setState({ name: event.target.value })
    }

    handleChangeFavoriteFruit = (event) => {
        this.setState({ fruit: event.target.value })
    }

    handleCheck = (event) => {
        this.setState({ rememberMe: event.target.checked })
    }

    handleSelect = (event) => {
        this.setState({ select: event.target.value })
    }

    handleSubmit = () => {
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <input value={this.state.name} onChange={this.handleChangeName} />
                <input type="checkbox" checked={this.state.rememberMe} onChange={this.handleCheck} />
                <textarea value={this.state.fruit} onChange={this.handleChangeFavoriteFruit} />

                <div>
                    <select value={this.state.select} onChange={this.handleSelect}>
                        <option>Hello</option>
                        <option>There</option>
                        <option>It</option>
                        <option>Works</option>
                    </select>
                </div>
                <button onClick={this.handleSubmit}>Sumbit</button>
            </div>
        );
    }
}

export default MyForm;