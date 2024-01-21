import React from "react";
import LOGO from "../../../assets/image/Kick Logo Plain 3.png";
import "./register.css";

const Register = () => {
  return (
    <div className="form_container">
      <img src={LOGO} alt="" className="logo-image_register" />
      <h3 className="registername">Register to play</h3>
      <form action="/action_page.php" className="form">
        <label className="fname">Username or phone number </label>
        <input
          className="input_register"
          type="text"
          name="username"
          placeholder="Enter your username or phone number"
        />

        <label className="fname">Email address</label>
        <input
          className="input_register"
          type="email"
          name="email"
          placeholder="Enter your email address"
        />

        <label className="fname">Date of birth</label>
        <input
          className="input_register"
          type="text"
          name="datebirth"
          placeholder="Enter your date of birth"
        />
        <label className="fname">Password</label>
        <input
          className="input_register"
          type="text"
          name="password"
          placeholder="Enter password"
        />
      </form>
      <button className="register_btn">REGISTER</button>
    </div>
  );
};

export default Register;
