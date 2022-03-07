import React, { Component } from 'react'
import "./header.scss";
import { NavLink } from "react-router-dom";
import { Nav } from './nav';
import brand from "../../../assets/visuals/brand.svg"
import information from "../../../assets/visuals/information.svg"
import search from "../../../assets/visuals/search.svg"
import Fab from '@mui/material/Fab';

class Header extends Component {
    render() {
        return (
            <div class="mobile_view_header">
                <div class="mobile_header_one">
                    
                    <div class="header_title"><img src={brand} /></div>
                    <div onClick={() => this.props.set_search_status(true)} class="header_search_container">
                        <div class="sub_header_search_container">
                            <input disabled={true} type="text" class="header_search search_dynamic" placeholder="Explore pointers here..." />
                        </div>
                    </div>
                   
                </div>
                <Nav />
            </div >
        )
    }
}

export { Header }
