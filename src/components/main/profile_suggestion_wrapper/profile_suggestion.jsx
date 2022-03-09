import React from 'react'
import "./profile_suggestion.scss";
import { AvtaarSuggestions } from "../../reusable/avataar_badge/avataar_badge"

function render_profiles(suggestion_data) {
    return suggestion_data.map((profiles) => {
        return (
            <div className="profiles_suggestion_content">
                <AvtaarSuggestions data={profiles} />
            </div>
        )
    })
}
function ProfileSuggestions({ suggestion_data }) {
    return (
        <div className="profiles_suggestion_wrapper_container">
            {/* <h3>Profiles for you</h3> */}
            <div className="profiles_suggestion_wrapper_subcontainer">
                {render_profiles(suggestion_data)}
            </div>
        </div>
    )
}

export { ProfileSuggestions }