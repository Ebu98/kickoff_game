import React from "react";
import SideMenu from "../../component/side-menu";
import {
  faHouse,
  faFilm,
  faGear,
  faSquarePersonConfined,
  faSignal,
  faPersonDigging,
  faCircleQuestion,
  faTerminal,
  faUsers,
  faShareFromSquare,
  
} from "@fortawesome/free-solid-svg-icons";
import { Outlet } from "react-router-dom";

const SideMenuItems = [
  { label: "Home", icon: faHouse, to: "/" },
  { label: "Play Mode", icon: faTerminal, to: "/play" },
  { label: "Leaderboard", icon: faUsers, to: "/leader" },
  { label: "Categories", icon: faFilm, to: "/category" },
  { label: "Multiplayer", icon: faSquarePersonConfined, to: "/multi" },
  { label: "Gaming stats", icon: faSignal, to: "/game" },
  { label: "How to play", icon: faPersonDigging, to: "menu" },
  { label: "Settings", icon: faGear, to: "/setting" },
  { label: "Help", icon: faCircleQuestion, to: "menu" },
  { label: "Logout", icon: faShareFromSquare, to: "menu" },
];

const LayoutPage = () => {
  return (
    <div style={{ display: "flex",gap:"2.5em" }}>
      <SideMenu items={SideMenuItems} />
      <div style={{ paddingTop:"158px"}}>
      <Outlet />
      </div>
      
    </div>
  );
};

export default LayoutPage;
