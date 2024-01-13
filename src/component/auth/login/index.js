import React from "react";
import LOGO from "../../../assets/image/Kick Logo Plain 3.png";
import "./login.css";

const LoginPage = () => {
  return (
    <div className="form_container_login">
      <img src={LOGO} alt="" className="logo-image_login" />
      <form action="/action_page.php" className="form">
        <label className="fname_login">Username</label>
        <input
          className="input"
          type="text"
          name="username"
          placeholder="Enter your username"
        />
        <label className="fname_login">Password</label>
        <input
          className="input"
          type="text"
          name="password"
          placeholder="Enter password"
        />
        {/* <div className="forgot_password_container"> */}
          {/* <h3>manjfduunv</h3>  */}
          <p className="password_text">Forgot password?</p>
        {/* </div> */}
      </form>
      
      <button className="register_btn_login">ENTER</button>
    </div>
  );
};

export default LoginPage;
