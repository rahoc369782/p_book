import React, { Component } from "react";
import { ManagedRoutes } from "../../config/routesmanagement";
import { Header } from "../../components/main/header/header";
import { Search } from "../../pages/search/search";
import {ModalComponent} from "../../components/reusable/modal_components/modal_for_component"
import Fab from '@mui/material/Fab';
import edit from "../../assets/visuals/edit.svg"
import "./mainpage.scss";

class Mainpage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search_open_state:false
        }
    }

    componentDidMount() {
        console.log(this.props.history)
    }

    set_search_status = (search_open_state) => {
        console.log('search_open_state: ', search_open_state);
        this.setState({search_open_state})
    }
    render() {
        console.log("Main render")
        return (
            <div className="main_root">

                {/* Header of pointer */}
                <Header set_search_status={this.set_search_status} />
                <div className="page_main_components_containers">
                    <ManagedRoutes />
                </div>

                {/* Create new pointer options */}
                <div className="create_pointer_fab">
                   <Fab style={{width:50,height:50}}>
                        <img src={edit} alt="create_pointer" />
                    </Fab> 
                </div>
                

                {/* Search component render */}
                <ModalComponent Component={Search} set_search_status={this.set_search_status} open_status={this.state.search_open_state} />
                    

            </div>
        )
    }
}

export { Mainpage }