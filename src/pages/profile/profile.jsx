import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import "./profile.scss"

class Profile extends Component {

    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div>Profile {this.props.params.id}</div>
        )
    }
}

export default (props) => (
    <Profile
        {...props}
        params={useParams()}
    />
);
