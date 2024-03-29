import React, { Component } from 'react';

const initialState = {
    name: '',
    email: '',
    password: '',
    nameError: '',
    emailError: '',
    passwordError: ''
}

class ValidationForm extends Component {
    
    state = initialState

    handleChange = (event) => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({ [event.target.name]: isCheckbox ? event.target.checked : event.target.value })
    }

    validate = () => {
        let nameError = "";
        let emailError = "";
        // let passwordError = "";

        if (!this.state.name) {
            nameError = "Name cannot be blank"
        }

        if (!this.state.email.includes("@")) {
            emailError = 'Invalid Email'
        }

        if (emailError || nameError ) {
            this.setState({ emailError, nameError })
            return false;
        }

        return true
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state)
            this.setState(initialState)
        }
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <div>
                        <input 
                            name="name"
                            placeholder="name"
                            value={this.state.name} 
                            onChange={this.handleChange} />
                    </div>
                    <div style={{ fontSize: 12, color: "red" }}>{this.state.nameError}</div>
                    <div>
                        <input 
                            name="email"
                            placeholder="email"
                            value={this.state.email} 
                            onChange={this.handleChange} />
                        <div style={{ fontSize: 12, color: "red" }}>{this.state.emailError}</div>
                    </div>
                    <div>
                        <input 
                            name="password"
                            type="password"
                            placeholder="password" 
                            checked={this.state.password} 
                            onChange={this.handleChange} />
                        <div style={{ fontSize: 12, color: "red" }}>{this.state.passwordError}</div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default ValidationForm;