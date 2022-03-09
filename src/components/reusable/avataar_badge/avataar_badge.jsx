import React from 'react'
import "./avataar_badge.scss"


function Avtaarbadge({ url, width, height }) {
    return (
        <div style={{ width, height, borderRadius: "100%" }}>
            <img style={{ width: "100%", height: "100%", borderRadius: "100%" }} src={url} />
        </div>
    )
}

function AvtaarSuggestions({ data }) {
    return (
        <div className="avataar_suggestions_container">
            <div className="avataar_suggestions_badge">
                <Avtaarbadge url={data.profile_url} width={50} height={50} />
            </div>
            <h6>{data.profile_name}</h6>
        </div>
    )
}

export { Avtaarbadge, AvtaarSuggestions }