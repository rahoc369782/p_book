import React, { Component } from 'react'
import { Button } from '../../../components/reusable/button_component/button';
import { Navigate } from "react-router-dom"
import { set_authentication } from "../../../utility/security/session"
import "./login.scss";


class Login extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this.props)
    }

    move_to_previous_page = () => {
        set_authentication();
        return this.props.navigate(this.props.location.state.from)
    }
    render() {
        return (
            <div>
                <div>
                    <input />
                    <Button title="Login" callback={this.move_to_previous_page} disable={false} />
                </div>
            </div>
        )
    }
}

export { Login }