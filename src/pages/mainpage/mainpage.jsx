import React, { Component } from "react";
import { ManagedRoutes } from "../../config/routesmanagement";
import { Header } from "../../components/main/header/header";
import { Search } from "../../pages/search/search";
import { Pointerpost } from "../post/post"
import { ModalComponent } from "../../components/reusable/modal_components/modal_for_component"
import Fab from '@mui/material/Fab';
import edit from "../../assets/visuals/edit.svg"
import "./mainpage.scss";

class Mainpage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search_open_state: false,
            post_open_state: false,
            login_state: false
        }
    }

    componentDidMount() {
        console.log(this.props.history)
    }

    set_search_status = (search_open_state) => {
        this.setState({ search_open_state })
    }

    set_post_status = (post_open_state) => {
        this.setState({ post_open_state })
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
                <div onClick={() => this.setState({ post_open_state: true })} className="create_pointer_fab">
                    <Fab style={{ width: 50, height: 50 }}>
                        <img src={edit} alt="create_pointer" />
                    </Fab>
                </div>


                {/* Search component render */}
                <ModalComponent Component={Search} status_fun={this.set_search_status} open_status={this.state.search_open_state} />

                {/* Post component render */}
                <ModalComponent Component={Pointerpost} status_fun={this.set_post_status} open_status={this.state.post_open_state} />


            </div>
        )
    }
}

export { Mainpage }