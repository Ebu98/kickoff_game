import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutPage from "./page/layout";
import DashboardComponent from "./component/Dashboard";
import Category from "./component/category";
import MultiPlayer from "./component/multi-player";
import GameStat from "./component/gaming_stats";
import Leaderboard from "./component/Leaderboard";
import Settings from "./component/settings";
import LayoutSetting from "./page/setting_layout";
import Withdrawal from "./component/setting_component/Withdrawal_settings";
import Generals from "./component/setting_component/general";
import GameSetting from "./component/setting_component/game";
import Feedback from "./component/setting_component/feedback";
import ProfileSetting from "./component/setting_component/profile";
import PlayMode from "./component/play_mode";
import LangingPage from "./page/LandingPage";
import Register from "./component/auth/register";
import LoginPage from "./component/auth/login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/land" element={<LangingPage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<DashboardComponent />} />
          <Route path="/category" element={<Category />} />
          <Route path="/multi" element={<MultiPlayer />} />
          <Route path="/game" element={<GameStat />} />
          <Route path="/leader" element={<Leaderboard />} />
          <Route path="/play" element={<PlayMode />} />

          <Route path="/setting" element={<Settings />}>
            <Route path="setting" element={<Generals />} />
            <Route path="withdrawal" element={<Withdrawal />} />
            <Route path="game" element={<GameSetting />} />
            <Route path="feed" element={<Feedback />} />
            <Route path="profile" element={<ProfileSetting />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
