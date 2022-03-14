import React, { Component } from 'react'
import { Button } from '../../../components/reusable/button_component/button';
import { Navigate, Link } from "react-router-dom"
import { set_authentication } from "../../../utility/security/session";
import { InputComponent } from "../../../components/reusable/input_component/InputComponent"
import { GoogleLoginComponent } from "../../../components/reusable/google_login_component/GoogleLoginComponent"


class Registration extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.getElementsByClassName("pointer_mobile_view_header")[0].style.display = "none"
        document.getElementsByClassName("create_pointer_fab")[0].style.display = "none"
    }

    move_to_previous_page = () => {
        // set_authentication();
        return this.props.navigate(this.props.location.state.from)
    }
    render() {
        return (
            <div className="login_main_container">
                <div className='pointer_login_form_container'>
                    <div className="login_header_section">
                        <h3>Pointers</h3>
                    </div>
                    <InputComponent placeholder="Email or username" />
                    <InputComponent placeholder="Password" />
                    <InputComponent placeholder="Username" />
                    <div className="login_meta_info">
                        <span data="warning">Create unique username for you</span>
                        {/* <span data="forgot-password">Forgot Password?</span> */}
                    </div>
                    <Button title="Create" callback={this.move_to_previous_page} disable={false} />
                    <div class="awesome-divider-div" >
                        <div class="awesome-divider" data-label="or" ></div>
                    </div>
                    <GoogleLoginComponent />
                    <div className="login_join_opt">
                        <span data="warning">Already using pointers </span> {" "}<Link to="/login"><span style={{ paddingLeft: 8 }} data="forgot-password">Signin!</span></Link>
                    </div>
                    <div className="login_privacy_section">
                        <div className="login_privacy_section1">
                            <span>By continuing it is considered that you have accepted <span style={{ color: "#3e92f2" }}>Terms & Conditions</span> and <span style={{ color: "#3e92f2" }}>Privacy Policy</span>.</span>
                        </div>
                        <div className="login_privacy_section2">
                            <span>Contact us on <span style={{ color: "#3e92f2" }}>pointersinc@gmail.com</span> <br />@2022 pointers inc. All rights are reserved.</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { Registration }