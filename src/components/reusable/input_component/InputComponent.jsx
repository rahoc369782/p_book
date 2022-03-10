import React from 'react'
import "./InputComponent.scss"


function InputComponent({ callback, placeholder }) {
    return (
        <div className="input_group_pointer">
            <label className="input_label">{placeholder}</label>
            <div className='login_input_container'>
                <div className='login_input_subcontainer'>
                    <input type='text' onChange={(e) => callback ? callback(e.target.value) : null} />
                </div>
            </div>
        </div>

    )
}

export { InputComponent }
