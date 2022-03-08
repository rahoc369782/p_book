import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div>Login</div>
        )
    }
}

export { Login }