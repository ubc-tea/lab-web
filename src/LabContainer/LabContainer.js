import React, { useState } from "react";
import { Affix } from "antd";
import Header from "./Home/Header/Header";
import { TOTAL_SCREENS } from "../utilities/commonUtils";
import "./LabContainer.css";

export default function LabContainer() {
  const mapAllScreens = () => {
    return TOTAL_SCREENS.map((screen) =>
      screen.component ? (
        <div className="screen" key={screen.screen_name} id={screen.screen_name}>
          <screen.component screenName={screen.screen_name} />
        </div>
      ) : (
        <div key={screen.screen_name}></div>
      )
    );
  };

  const [top, setTop] = useState(0);

  return (
    <div className="page-container">
      <Affix offsetTop={top}>
        <div className="header-container">
          <Header />
        </div>
      </Affix>

      <div className="content-wrapper">{mapAllScreens()}</div>
    </div>
  );
}
