import React from "react";
import Edit from "../../assets/svg/edit.svg";
import Profile_Icon from "../../assets/image/profile.png";
import "./withdrawal.css";

const Withdrawal = () => {
  return (
    <div>
      <div className="withdrawal_container">
        <h4 className="withdrawal_setting">Withdrawal Settings</h4>
        <button className="btn">
          Edit
          <img src={Edit} alt="" />
        </button>
      </div>
      <div className="profile_container">
        <img src={Profile_Icon} alt="" className="Profile_Icon" />
        <p className="name">Stella Odika</p>
      </div>
      <h3 className="select_title">
        Select a relevant user identification information
      </h3>
      <div className="button_container">
        <button className="button">National ID</button>
        <button className="button">International Passport</button>
        <button className="button">Driver’s License</button>
      </div>
      <h3 className="bank_info">Bank account information</h3>
      <div>
        <form action="/action_page.php">
          <label className="fname">Account name</label>
          <input
            type="text"
            name="firstname"
            className="input_class"
          />

          <label className="lname">Bank name</label>
          <input
            type="text"
            name="bankname"
            className="input_class"
          />

          <label for="lname">Account number</label>
          <input
            type="text"
            name="lastname"
            className="input_class"
          />
        </form>
      </div>
      <h3 className="bank_info">Choose withdrawal method</h3>
      <div className="radio_container">
      <div className="radio">
        <input type="radio" className="radio_input"/>
        <p>Bank transfer</p>
      </div>
      <div className="radio" >
        <input type="radio" className="radio_input"/>
        <p>Digital wallet</p>
      </div>
      <div className="radio">
        <input type="radio" className="radio_input"/>
        <p>Paypal</p>
      </div>
      </div>
    </div>
  );
};

export default Withdrawal;
