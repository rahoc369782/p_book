import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import "./profile.scss";
import { UserInformation } from "../../components/main/user_information/user_information"

class Profile extends Component {

    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <div>
                    <UserInformation />
                </div>
            </div>
        )
    }
}

// Components
// -> user information
// -> user more information
// -> Pointers


//User Imp information
// -> Username , profile , introduction , one word profession

// Stats and targets
// -> counts , tags -> valuable , adders , pointers

//OptionsDrawer

//More information
// -> Education , Interest , likes and dislikes

// Pointers
export default (props) => (
    <Profile
        {...props}
        params={useParams()}
    />
);
