import React from "react";
import Card from "../card.component";
import { ReactComponent as FIRSTIMAGE } from "../../assets/svg/Base.svg";
import { ReactComponent as SecondIMAGE } from "../../assets/svg/second.svg";
import { ReactComponent as THIRDIMAGE } from "../../assets/svg/third.svg";
import PROFILE_IMAGE from "../../assets/image/Rectangle.png";
import SORCER_IMAGE from "../../assets/svg/🦆 illustration _Soccer_.svg";
import PROFILE_Two from "../../assets/image/Rectangle (1).png";
import "./home.css";

const DashboardComponent = () => {
  return (
    <div style={{ marginTop: "-7em" }}>
      <div className="title-nav">
        <h3 className="title-nav-h6">Hey Stella.</h3>
        <span className="title-nav-span">CHOOSE PLAY MODE</span>
      </div>
      <div className="hero-component">
        <div className="card-wrapper">
          <Card size="lg" className="success">
            <div className="card-icon-home">
              <FIRSTIMAGE />
              <h3>Single Player Mode</h3>
            </div>
          </Card>
          <Card size="lg" className="success">
            <div className="card-icon-home">
              <SecondIMAGE />
              <h3>MULTI PLAYER MODE</h3>
            </div>
          </Card>
          <Card size="lg" className="success">
            <div className="card-icon-home">
              <THIRDIMAGE />
              <h3>CHALLENGE MODE</h3>
            </div>
          </Card>
          <div className="success-card">
            <img src={PROFILE_IMAGE} alt="" />
            <div className="content">
              <h2 className="content-h2-tag">FEATURED</h2>
              <p className="content-ptag">
                Take part in challenges with friends or other players
              </p>
              <button className="button-content">Find Friends</button>
            </div>
            <img src={PROFILE_Two} alt="" className="profile-two" />
          </div>
        </div>

        <div className="big-card">
          <div className="sorcer-image">
            <h2 className="sorcer-h2-tag">HOW TO PLAY</h2>
            <img src={SORCER_IMAGE} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
