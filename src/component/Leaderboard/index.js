import React from "react";
import "./leader.css";
import Card from "../card.component";
import { ReactComponent as Group } from "../../assets/svg/Group 22.svg";
import { ReactComponent as EmojiOne } from "../../assets/svg/emojione_1st-place-medal.svg";
import { ReactComponent as EmojiTwo } from "../../assets/svg/emojione_2nd-place-medal.svg";
import { ReactComponent as EmojiThree } from "../../assets/svg/emojione_3rd-place-medal.svg";
import ImageCard from "../../assets/image/Rectangle-profile.png";
import PROFILE_Two from "../../assets/image/Rectangle (1).png";

const Leaderboard = () => {
  return (
    <div style={{ marginTop: "-8em" }}>
      <div className="title-nav">
        <h3 className="title-nav-h6 ">Hello Stella,</h3>
        <span className="title-nav-span-leader">
          Welcome to the Leaderboard! Here's where champions are recognized.
          Check out the top performers,<br/> see who's dominating the trivia game,
          and strive to claim the throne. Can you climb to the highest ranks<br/> and
          become a trivia legend? Compete, conquer, and make your mark on the
          leaderboard today!
        </span>
      </div>
      <div className="leader-board-container">
        <div className="emoji-container">
        <div className="emoji">
        <img src={ImageCard} alt=""/>
            <EmojiTwo/>
        </div>
        <div className="emoji-center">
            <img src={PROFILE_Two} alt=""/>
            <EmojiOne/>
        </div>
        <div className="emoji">
        <img src={ImageCard} alt=""/>
            <EmojiThree/>
        </div>
      </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          marginTop: "43px",
        }}
      >
        <Card className="leader-board_card_container ">
          <div className="leader-board">
            <p>O1</p>
            <img src={ImageCard} alt="" />
            <div className="leader-board_text">
              <div className="texts">
                <h3 className="texts-h3">Francis</h3>
                <span>1720pts</span>
              </div>
              <Group />
            </div>
          </div>
        </Card>
        <Card className="leader-board_card_container ">
          <div className="leader-board">
            <p>O1</p>
            <img src={ImageCard} alt="" />
            <div className="leader-board_text">
              <div className="texts">
                <h3 className="text-h3">Francis</h3>
                <span>1720pts</span>
              </div>
              <Group />
            </div>
          </div>
        </Card>
        <Card className="leader-board_card_container ">
          <div className="leader-board">
            <p>O1</p>
            <img src={ImageCard} alt="" />
            <div className="leader-board_text">
              <div className="texts">
                <h3 className="text-h3">Francis</h3>
                <span>1720pts</span>
              </div>
              <Group />
            </div>
          </div>
        </Card>

        <Card className="leader-board_card_container ">
          <div className="leader-board">
            <p>O1</p>
            <img src={ImageCard} alt="" />
            <div className="leader-board_text">
              <div className="texts">
                <h3 className="text-h3">Francis</h3>
                <span>1720pts</span>
              </div>
              <Group />
            </div>
          </div>
        </Card>
        <Card className="leader-board_card_container ">
          <div className="leader-board">
            <p>O1</p>
            <img src={ImageCard} alt="" />
            <div className="leader-board_text">
              <div className="texts">
                <h3 className="text-h3">Francis</h3>
                <span>1720pts</span>
              </div>
              <Group />
            </div>
          </div>
        </Card>
        <Card className="leader-board_card_container ">
          <div className="leader-board">
            <p>O1</p>
            <img src={ImageCard} alt="" />
            <div className="leader-board_text">
              <div className="texts">
                <h3 className="text-h3">Francis</h3>
                <span>1720pts</span>
              </div>
              <Group />
            </div>
          </div>
        </Card>
        <Card className="leader-board_card_container ">
          <div className="leader-board">
            <p>O1</p>
            <img src={ImageCard} alt="" />
            <div className="leader-board_text">
              <div className="texts">
                <h3 className="text-h3">Francis</h3>
                <span>1720pts</span>
              </div>
              <Group />
            </div>
          </div>
        </Card>

        <Card className="leader-board_card_container ">
          <div className="leader-board">
            <p>O1</p>
            <img src={ImageCard} alt="" />
            <div className="leader-board_text">
              <div className="texts">
                <h3 className="text-h3">Francis</h3>
                <span>1720pts</span>
              </div>
              <Group />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;
