import React from "react";
import LOGO from "../../assets/image/Kick Logo Plain 3.png";
import "./land.css";
import { Link } from "react-router-dom";

const LangingPage = () => {
  return (
    <div className="landing_page_container">
      <div className="title_container">
        <h2 className="title_container_h2">Ready to play? Get Started</h2>
        <span className="title_container_span">
          Dive into the game, kick off, and compete with others
        </span>
      </div>
      <div className="container_wraper">
        <div className="register_container">
          <p className="register_container_p">
            New to KICK? Sign Up and Score Big!
          </p>
          <span className="register_container_span">
            Become a part of the KICK community. Create your account and unlock
            exclusive <br /> features, compete with friends, and rise through
            the ranks as you prove yourself as the ultimate football trivia
            champion
          </span>
          <Link to="/register">
            <button className="register_button">REGISTER</button>
          </Link>
        </div>
        <div className="logo">
          <div className="vl"></div>
          <img src={LOGO} alt="" className="logo-image" />
        </div>

        <div className="login_container">
          <p className="register_container_p">
            Already a KICK superstar? Let's Play!
          </p>
          <span className="register_container_span">
            Welcome back to the pitch, KICK champion! Log in to continue your
            journey, tackle new challenges, and keep your winning streak alive
          </span>
          <Link to="/login">
          <button className="login_button">LOG IN</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LangingPage;
