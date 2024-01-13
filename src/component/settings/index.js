import React from "react";
import Bell from "../../assets/svg/notification_bell.svg";
import Profile_Icon from "../../assets/image/profile.png";
import "./setting.css";
import Card from "../card.component";
import { NavLink, Outlet } from "react-router-dom";

const Settings = () => {
  return (
    <div>
      <div className="container_wrapper">
        <h3 className="title_setting">Settings</h3>
        <div className="notification_container">
          <img src={Bell} alt="" className="bell" />
          <img src={Profile_Icon} alt="" className="Profile_Icon" />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="wrapper">
          <NavLink
            to="setting/se"
            end
            className={({ isActive }) => (isActive ? "activelink" : "card_container")}
          >
            <Card>
              <h3 className="card_h3">General settings</h3>
              <span className="card_span">
                Lorem ipsum dolor sit amet consectetur. Quam nulla nunc ac
                consectetur sit volutpat.
              </span>
            </Card>
          </NavLink>
          <NavLink
            to="game"
            end
            className={({ isActive }) => (isActive ? "activelink" : "card_container")}
          >
            <Card>
              <h3 className="card_h3">Game settings</h3>
              <span className="card_span">
                Lorem ipsum dolor sit amet consectetur. Quam nulla nunc ac
                consectetur sit volutpat.
              </span>
            </Card>
          </NavLink>
          <NavLink
            to="profile"
            end
            className={({ isActive }) => (isActive ? "activelink" : "card_container")}
          >
            <Card>
              <h3 className="card_h3">Profile settings</h3>
              <span className="card_span">
                Lorem ipsum dolor sit amet consectetur. Quam nulla nunc ac
                consectetur sit volutpat.
              </span>
            </Card>
          </NavLink>
          <NavLink
            to="withdrawal"
            end
            className={({ isActive }) => (isActive ? "activelink" : "card_container")}
          >
            <Card>
              <h3 className="card_h3">Withdrawal settings</h3>
              <span className="card_span">
                Lorem ipsum dolor sit amet consectetur. Quam nulla nunc ac
                consectetur sit volutpat.
              </span>
            </Card>
          </NavLink>
          <NavLink
            to="feed"
            end
            className={({ isActive }) => (isActive ? "activelink" : "card_container")}
          >
            <Card>
              <h3 className="card_h3">Feedback & Support</h3>
              <span className="card_span">
                Lorem ipsum dolor sit amet consectetur. Quam nulla nunc ac
                consectetur sit volutpat.
              </span>
            </Card>
          </NavLink>
        </div>
        <div className="card_outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Settings;
