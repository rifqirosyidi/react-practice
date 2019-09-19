import React, { Component } from 'react';

class FetchRandomUser extends Component {

state = {
    loading: true,
    people: []
}

async componentDidMount() {
    const url = "https://api.randomuser.me/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.results, loading: false })
    console.log(data)
}

    render() {

        if ( this.state.loading || !this.state.people ) {
            return <div>loading...</div>
        }

        return (
            <div>
                {this.state.people.map(person => (
                    <div key={ person.login.uuid } >
                        <img src={ person.picture.large } alt="" />
                        <div>{ person.name.first }</div>
                    </div>
                ))}
            </div>
        )
    }
}

export default FetchRandomUser;