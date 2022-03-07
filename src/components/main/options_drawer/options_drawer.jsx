import React from 'react'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import "./options_drawer.scss"
function OptionsDrawer({ options, open_status, setOptionsDrawerStatus }) {
    console.log('options, open_status: ', options, open_status);
    let options_with_fun = () => {
        return options.map(opt => {
            return (
                <li onClick={() => opt.callback()}>{opt.title}</li>
            )
        })
    }   
    return (
        <div>
            <SwipeableDrawer
                anchor={"bottom"}
                open={open_status}
                onClose={() => setOptionsDrawerStatus(!open_status)}
            >
                <div className='options_drawer_container'>
                    <ul>
                        {options_with_fun()}
                    </ul>
                </div>



            </SwipeableDrawer>
        </div>
    )
}

export { OptionsDrawer }