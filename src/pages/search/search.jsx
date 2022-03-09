import React, { Component } from "react";
import back from "../../assets/visuals/back.svg";
import { InputComponent } from "../../Components/reusable/input_component/InputComponent";
import "./search.scss";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_results: [],
      keyword: "",
    };
  }

  // search_in_graph = async (keyword) => {
  //     if (keyword === '') {
  //         return this.setState({ search_results: [], keyword: '' })
  //     }
  //     let result = await fetch(`http://localhost:5000/search/${keyword.toLowerCase()}`)
  //     let search_results = await result.json();
  //     this.setState({ search_results, keyword })
  // }

  // map_list = () => {
  //     return this.state.search_results.map(items => {
  //         return (
  //             <div className='searched_list_container'>
  //                 <div className='searched_list_first_section'>
  //                     <img src={items.image} />
  //                     <span><span className='searched_maped_word'>{items.mapped}</span>{items.string}</span>
  //                 </div>
  //                 <div className='searched_list_second_section'>
  //                     <span>TP</span>
  //                 </div>
  //             </div>
  //         )
  //     })
  // }

  render() {
    return (
      <div className="search_page_container">
        <div className="search_page_subcontainer">
          {/* Search Header */}
          <div className="search_page_header">
            <img onClick={() => this.props.status_fun(false)} style={{ paddingRight: 10 }} src={back} />
            <InputComponent
              callback={this.search_in_graph}
              input_style={{ fontSize: 14 }}
              placeholder="Explore Thoughtbook"
              style={{ background: "white", minHeight: 40, marginLeft: 10, width: "100%" }}
            />
          </div>

          {/* Search Results */}
          <div className="search_results_container">
            <div className="search_page_Result_header">
              <span className="searched_keyword_shower">
                Results for{" "}
                <span className="searched_keyword">
                  {this.state.keyword !== "" ? this.state.keyword : "test"}
                </span>
              </span>
            </div>

            <div>{/* {this.map_list()} */}</div>
          </div>
        </div>
      </div>
    );
  }
}

export { Search };
