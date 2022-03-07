import React from 'react'
import "./InputComponent.scss"
function InputComponent({ callback, style, input_style, placeholder, disable }) {
    return (
        <div style={style} className='login_input_container'>
            <div className='login_input_subcontainer'>
                <input style={input_style} disabled={disable ? disable : false} autoFocus={true} type='text' placeholder={placeholder} onChange={(e) => callback ? callback(e.target.value) : null} />
            </div>
        </div>
    )
}

export { InputComponent }
