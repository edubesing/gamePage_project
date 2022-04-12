import React from "react";
import { Link } from "react-router-dom";
import { SideBarData } from "./sidebarData";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <nav className="navmenu">
          {SideBarData.map((item, index) => {
            return (
              <button key={index} className='sidebar-button'>
                <Link to={item.path}>{item.icon}</Link>
              </button>
            );
          })}
      </nav>

      <div className="logout">
        <button className="sidebar-button"><Link to="/login"><img src="./assets/logout_red.png" alt="Logout Icon"></img></Link></button>
      </div>
    </div>
  );
}

export default Sidebar;
