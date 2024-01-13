import React from "react";
import { Outlet } from "react-router-dom";
import Settings from "../../component/settings";

const LayoutSetting = () => {
  return (
    <div style={{ display: "flex",gap:"2.5em" }}>
        <Settings/>
      <div style={{ paddingTop:"158px"}}>
      <Outlet />
      </div>
      
    </div>
  );
};

export default LayoutSetting;
