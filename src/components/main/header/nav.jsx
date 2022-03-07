import React from "react";
import { NavLink } from "react-router-dom";
import home from "../../../assets/visuals/home.svg";
import bookmark from "../../../assets/visuals/bookmark.svg";
import explore from "../../../assets/visuals/search.svg";
import setting from "../../../assets/visuals/setting.svg";
import information from "../../../assets/visuals/information.svg"
// import explore from "../../../assets/visuals/search.svg"
function Nav() {
  return (
    <nav class="mobile_header_two tab_header_transition_show">

      <NavLink
        className="tab_section"
        to="/"
        style={({ isActive }) =>
          isActive ? { backgroundColor: "dodgerblue" } : undefined
        }
      >
        <img src={home} />
        {/* <div>Favorites</div> */}
      </NavLink>
      <NavLink
        className="tab_section"
        to="/explore"
        style={({ isActive }) =>
          isActive ? { color: "dodgerblue" } : undefined
        }
      >
        <img src={explore} />
        {/* <div>Explore</div> */}
      </NavLink>
      <NavLink
        className="tab_section"
        to="/login"
        style={({ isActive }) =>
          isActive ? { backgroundColor: "dodgerblue" } : undefined
        }
      >
        <img src={bookmark} />
        {/* <div>Saved</div> */}
      </NavLink>
      <NavLink
        className="tab_section"
        to="/login"
        style={({ isActive }) =>
          isActive ? { backgroundColor: "dodgerblue" } : undefined
        }
      >
        <img src={setting} />
        {/* <div>Settings</div> */}
      </NavLink>
      <NavLink
        className="tab_section"
        to="/login"
        style={({ isActive }) =>
          isActive ? { backgroundColor: "dodgerblue" } : undefined
        }
      >
        <img src={information} />
        {/* <div>Settings</div> */}
      </NavLink>

      <NavLink
        className="tab_section"
        to="/profile/:id"
        style={({ isActive }) =>
          isActive ? { backgroundColor: "dodgerblue" } : undefined
        }
      >
        <img
          id="profile_img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYIX4fdymadei7FiL-19pxFAWPLEJgQlNEww&usqp=CAU"
        />
      </NavLink>
    </nav>
  );
}

export { Nav };
