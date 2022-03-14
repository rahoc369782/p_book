import React, { Component } from 'react'
import "./settings.scss";
import { settings } from "./settings_data"

class Settings extends Component {

    render_settings = () => {
        return settings.map(items => {
            return (
                <div key={items.title} className="settings_tab">
                    <div className="settings_tab_in">
                        <span>{items.title}</span>
                    </div>
                </div>
            )
        })

    }
    componentDidMount() {
        document.getElementsByClassName("create_pointer_fab")[0].style.display = "none"
    }

    componentWillUnmount() {
        document.getElementsByClassName("create_pointer_fab")[0].style.display = "block"
    }
    render() {
        return (
            <div className="settings_container">
                <div className="settings_subcontainer">
                    <div>
                        {this.render_settings()}
                    </div>
                    <div className="setting_metadata_container">
                        <div className="settings_jobs_section">
                            <span>Join us in our mission <span style={{ color: "#3e92f2" }}>Jobs and Opportunity</span> </span>
                        </div>
                        <div className="settings_meta_section">
                            <span>From Pointers Inc. for <span style={{ color: "#3e92f2" }}>You</span> <br />@2022 pointers inc. All rights are reserved.</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { Settings }
