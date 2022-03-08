import React from 'react'
import "./button.scss"

function Button({ callback, color, background, title, disable }) {
    return (
        <div onClick={() => !disable ? callback() : null} style={{ opacity: disable ? 0.5 : 1 }} className="button_container">
            <div className="button_subcontainer">
                <button>{title}</button>
            </div>
        </div>
    )
}

export { Button }