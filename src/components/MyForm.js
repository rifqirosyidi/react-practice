import React, { Component } from 'react';

class MyForm extends Component {
    
    state = {
        name: '',
        fruit: '',
        rememberMe: false,
        select: 'Hello'
    }

    handleChange = (event) => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({ [event.target.name]: isCheckbox ? event.target.checked : event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input 
                        name="name"
                        value={this.state.name} 
                        onChange={this.handleChange} />
                    <textarea 
                        name="fruit"
                        value={this.state.fruit} 
                        onChange={this.handleChange} />
                    <input 
                        name="rememberMe"
                        type="checkbox" 
                        checked={this.state.rememberMe} 
                        onChange={this.handleChange} />
                    <div>
                        <select 
                            name="select"
                            value={this.state.select} 
                            onChange={this.handleChange}>
                                <option>Hello</option>
                                <option>There</option>
                                <option>It</option>
                                <option>Works</option>
                        </select>
                    </div>
                    <button type="submit">Sumbit</button>
                </form>
            </div>
        );
    }
}

export default MyForm;