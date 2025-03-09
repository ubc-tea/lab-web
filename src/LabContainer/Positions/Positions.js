import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Positions.css";

export default function News(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="news-container screen-container" id={props.id || ""}>
      <div className="news-parent">
        <ScreenHeading title={"Positions"} subHeading={""} />

        <div className="forward">
          If you want to join <strong>TEA</strong>, please email  
          <a href="mailto:xiaoxiao.li@ece.ubc.ca"> xiaoxiao.li@ece.ubc.ca</a>, including your  
          <strong> CV, transcript,</strong> and <strong>one research paper</strong> (if applicable).  
          <br /><br />
          Due to the large volume of emails, I may not be able to respond individually.  
          To help me notice your email, **please include** <span className="highlight">[ILOLLEH]</span>, written **backwards**, in the subject line.
          <br /><br />
          <span className="warning">📌 Please follow these instructions carefully.</span>
        </div>

        <div className="positions-container">
          <div className="position-card">
            <h3>📍 Postdoc</h3>
            <p>Postdoc positions are available with flexible starting dates.</p>
          </div>

          <div className="position-card">
            <h3>🎓 Graduate Students</h3>
            <p>Multiple positions available for <strong>Fall 2025</strong>.</p>
          </div>

          <div className="position-card">
            <h3>🤝 Interns & Visiting Scholars</h3>
            <p>Local and remote collaborations are welcome.  
               <br />UBC students can apply through course registration or summer internship programs.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
