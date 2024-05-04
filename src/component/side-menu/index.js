import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import LOGO from "../../assets/image/Kick Logo Plain 3.png"
import "./side.css"

const SideMenu = ({items}) => {
  return (
    <div className="sidemenu-container">
      <img src={LOGO} alt="" className="logo-image"/>
      <ul>
        {items.map((item, index) => (
          <NavLink
            key={index}
            to={item?.to}
            end
            className={({ isActive }) => (isActive ? "link" : "none")}
          >
            <div className="nav-items">
              <FontAwesomeIcon icon={item?.icon} />
              <p>{item?.label}</p>
            </div>
          </NavLink>
        ))}
      </ul>
      <div className="side-menu-card">
        <h3 className="title-trivia">Trivia of the day</h3>
        <span className="sub-title">Play trivia of the day to gain extra points and coins </span>
        <button className="card-btn">Play trivia</button>
      </div>
    </div>
  );
};

export default SideMenu;
