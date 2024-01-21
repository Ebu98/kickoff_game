import React from "react";
import Card from "../card/card";
import SOLARFOOTBALL from "../../assets/svg/solar_football-line-duotone.svg";
import ActionTROPHY from "../../assets/svg/octicon_trophy-24.svg";
import VECTOR from "../../assets/svg/Vector.svg";
import VADIN from "../../assets/svg/vaadin_globe.svg";
import ICONAMOON from "../../assets/svg/iconamoon_history-duotone.svg";
import FLAG from "../../assets/svg/typcn_flag-outline.svg";
import DropdownIcon from "../../assets/svg/dropdownicon.svg";
import DotIcon from "../../assets/svg/dot.svg";
import Profile_Icon from "../../assets/image/profile.png";
import "./category.css";

const Category = () => {

  
  return (
    <div style={{ marginTop: "-8em" }}>
      <div className="contain_wraper">
      <div className="title-nav">
        <h3  className="title-nav-h6-category">Hey Stella.</h3>
        <span  className="title-nav-span-category ">what game would you like to play today?</span>
      </div>
      <div className="profile_container">
        <button className="dropdown_btn2">
          <img src={DotIcon} alt="" />
          $4500.99
        </button>
        <img src={Profile_Icon} alt="" className="Profile_Icon" />
        <p className="name">Stella Odika</p>
      </div>
      </div>
      
      <div className="most_popular_container">
        <h4 className="most_popular">Most popular</h4>
        <button className="dropdown_btn">
        Sort by
          <img src={DropdownIcon} alt="" />
        </button>
      </div>
      <div className="general-card-wrapper">
        <Card>
          <div className="general-card">
            <div className="general">
              <img src={SOLARFOOTBALL} alt="" className="general-img" />
              <h2 className="general-text">General Football Trivia</h2>
            </div>
          </div>
        </Card>
        <Card>
          <div className="trophy-card">
            <div className="general">
              <img src={ActionTROPHY} alt="" className="general-img" />
              <h2 className="general-text-trophy">
                Championships and Tournaments
              </h2>
            </div>
          </div>
        </Card>

        <Card>
          <div className="vector-card">
            <div className="general">
              <img src={VECTOR} alt="" className="general-img" />
              <h2 className="general-text">League Specific Trivia</h2>
            </div>
          </div>
        </Card>
        <Card>
          <div className="vaadin-card">
            <div className="general">
              <img src={VADIN} alt="" className="general-img" />
              <h2 className="general-text-vadin">World Cup Trivia</h2>
            </div>
          </div>
        </Card>
        <Card>
          <div className="iconamoon-card">
            <div className="general">
              <img src={ICONAMOON} alt="" className="general-img" />
              <h2 className="general-text">Historical Moments</h2>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flag-card">
            <div className="general">
              <img src={FLAG} alt="" className="general-img" />
              <h2 className="general-text-flag">Team Specific Trivia</h2>
            </div>
          </div>
        </Card>
        <Card>
          <div className="trophy-card">
            <div className="general">
              <img src={ActionTROPHY} alt="" className="general-img" />
              <h2 className="general-text-trophy">
                Championships and Tournaments
              </h2>
            </div>
          </div>
        </Card>
        <Card>
          <div className="vector-card">
            <div className="general">
              <img src={VECTOR} alt="" className="general-img" />
              <h2 className="general-text">League Specific Trivia</h2>
            </div>
          </div>
        </Card>
        <Card>
          <div className="vaadin-card">
            <div className="general">
              <img src={VADIN} alt="" className="general-img" />
              <h2 className="general-text-vadin">World Cup Trivia</h2>
            </div>
          </div>
        </Card>
        <Card>
          <div className="iconamoon-card">
            <div className="general">
              <img src={ICONAMOON} alt="" className="general-img" />
              <h2 className="general-text">Historical Moments</h2>
            </div>
          </div>
        </Card>
      </div>
      <div className="image-background">
        <h3 className="image-background-h3-tag">Gear up for game day! </h3>
        <p className="image-background-ptag">
          Dress like a champion and represent your team! Explore the ultimate
          football fan gear at FanZone. From iconic jerseys to stylish
          accessories, we have everything you need to show your team pride.
          Don't wait, shop now and score big savings
        </p>
        <button className="image-background-btn">Shop now</button>
      </div>
    </div>
  );
};

export default Category;
