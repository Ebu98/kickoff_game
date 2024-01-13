import React from "react";
import Card from "../card.component";
import { ReactComponent as VectorIcon } from "../../assets/svg/multi-Vector.svg";
import { ReactComponent as SolarBallIcon } from "../../assets/svg/solar_football-line-duotone.svg";
import { ReactComponent as Play } from "../../assets/svg/solar_play-bold.svg";
import { ReactComponent as Alaadin } from "../../assets/svg/vaadin_globe.svg";
import PROFILE_Two from "../../assets/image/Rectangle (1).png";
import "./multi.css";

const MultiPlayer = () => {
  return (
    <div style={{marginTop:"-8em"}}>
      <div className="title-nav">
        <h3 className="title-nav-h6 ">Multiplayer and Challenges</h3>
        <span className="title-nav-span">Choose a challenge to play</span>
      </div>
    <div className="multi_player_container_wrapper">
      <Card className="multi_player_container ">
        <div className="multi_player">
          <VectorIcon />
          <div className="multi_player_text">
            <div className="text">
              <h3 className="text-h3">League Specific Trivia</h3>
              <span>
                Select your favorite team and access trivia questions specific
                to the team.
              </span>
            </div>
            <div className="play-icon">
            <Play />
            </div>
            
          </div>
        </div>
      </Card>
      <Card className="multi_player_container ">
        <div className="multi_player">
          <Alaadin />
          <div className="multi_player_text">
            <div className="text">
              <h3 className="text-h3">World Cup Trivia</h3>
              <span>
              A section dedicated to World Cup trivia questions  during tournament seasons.
              </span>
            </div>
            <div className="play-icon">
            <Play />
            </div>
          </div>
        </div>
      </Card>
      <Card className="multi_player_container ">
        <div className="multi_player">
          <SolarBallIcon/>
          <div className="multi_player_text">
            <div className="text">
              <h3 className="text-h3">General Football Trivia</h3>
              <span>
              Test your knowledge on various aspects of football,  history, and memorable moments.
              </span>
            </div>
            <div className="play-icon">
            <Play />
            </div>
          </div>
          
        </div>
      </Card>
      <Card className="multi_player_container ">
        <div className="multi_player">
          <VectorIcon />
          <div className="multi_player_text">
            <div className="text">
              <h3 className="text-h3">League Specific Trivia</h3>
              <span>
                Select your favorite team and access trivia questions specific
                to the team.
              </span>
            </div>
            <div className="play-icon">
            <Play />
            </div>
          </div>
          {/* <SolarBallIcon/> */}
        </div>
      </Card>
    </div>
    <h3 className="choose_player">Choose player</h3>
    <div className="play_list_container">
        <div className="players-wrapper">
        <img src={PROFILE_Two} alt="" className="profile-two2" />
        <img src={PROFILE_Two} alt="" className="profile-two2" />
        <img src={PROFILE_Two} alt="" className="profile-two2" />
        <img src={PROFILE_Two} alt="" className="profile-two2" />
        <img src={PROFILE_Two} alt="" className="profile-two2" />
        <img src={PROFILE_Two} alt="" className="profile-two2" />
        <img src={PROFILE_Two} alt="" className="profile-two2" />
        <img src={PROFILE_Two} alt="" className="profile-two2" />
        <img src={PROFILE_Two} alt="" className="profile-two2" />
        <img src={PROFILE_Two} alt="" className="profile-two2" />
        <img src={PROFILE_Two} alt="" className="profile-two2" />
        <img src={PROFILE_Two} alt="" className="profile-two2" />
        <img src={PROFILE_Two} alt="" className="profile-two2" />
        <img src={PROFILE_Two} alt="" className="profile-two2" />
        <img src={PROFILE_Two} alt="" className="profile-two2" />
        <img src={PROFILE_Two} alt="" className="profile-two2" />
        <img src={PROFILE_Two} alt="" className="profile-two2" />
        <img src={PROFILE_Two} alt="" className="profile-two2" />
        <img src={PROFILE_Two} alt="" className="profile-two2" />
        <img src={PROFILE_Two} alt="" className="profile-two2" />
        <img src={PROFILE_Two} alt="" className="profile-two2" />
        <img src={PROFILE_Two} alt="" className="profile-two2" />
        <img src={PROFILE_Two} alt="" className="profile-two2" />
        <img src={PROFILE_Two} alt="" className="profile-two2" />
        <img src={PROFILE_Two} alt="" className="profile-two2" />
        <img src={PROFILE_Two} alt="" className="profile-two2" />
        </div>
    </div>
    <div className="invitation-container">
        <h3 className="invite">Invite a team player?</h3>
        <span className="send-direct-link">Send a direct link to invite someone to join your challenge</span>
        <span className="how-to-use-invitation">How to use invitation code?</span>
    </div>
    </div>
  );
};

export default MultiPlayer;
