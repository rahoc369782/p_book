import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import home from "../../../assets/visuals/home.svg";
import home_active from "../../../assets/visuals/home_active.svg";
import bookmark from "../../../assets/visuals/bookmark.svg";
import bookmark_active from "../../../assets/visuals/bookmark_active.svg";
import explore from "../../../assets/visuals/search.svg";
import explore_active from "../../../assets/visuals/search_active.svg";
import setting from "../../../assets/visuals/setting.svg";
import setting_active from "../../../assets/visuals/setting_active.svg";
import information from "../../../assets/visuals/information.svg"
// import explore from "../../../assets/visuals/search.svg"
function Nav() {
  const [page, setPage] = useState(1)
  return (
    <nav class="mobile_header_two tab_header_transition_show">

      <NavLink
        className="tab_section"
        to="/"
        style={({ isActive }) =>
          isActive ? setPage(1) : undefined
        }
      >
        {page === 1 ? <img tab="" src={home_active} /> : <img tab="" src={home} />}
        {/* <div>Favorites</div> */}
      </NavLink>
      <NavLink
        className="tab_section"
        to="/explore"
        style={({ isActive }) =>
          isActive ? setPage(2) : undefined
        }
      >
        {page === 2 ? <img src={explore_active} /> : <img src={explore} />}
        {/* <div>Explore</div> */}
      </NavLink>
      <NavLink
        className="tab_section"
        to="/saved"
        style={({ isActive }) =>
          isActive ? setPage(3) : undefined
        }
      >
        {page === 3 ? <img src={bookmark_active} /> : <img src={bookmark} />}
        {/* <div>Saved</div> */}
      </NavLink>
      <NavLink
        className="tab_section"
        to="/settings"
        style={({ isActive }) =>
          isActive ? setPage(4) : undefined
        }
      >
        {page === 4 ? <img src={setting_active} /> : <img src={setting} />}
        {/* <div>Settings</div> */}
      </NavLink>
      <NavLink
        className="tab_section"
        to="/login"
        style={({ isActive }) =>
          isActive ? setPage(5) : undefined
        }
      >
        <img src={information} />
        {/* <div>Settings</div> */}
      </NavLink>

      <NavLink
        className="tab_section"
        to="/profile/:id"

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
