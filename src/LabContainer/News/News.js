import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./News.css";

export default function News(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const news = [
    {
      title:
        "[02/2023] We have two paper accepted by IPMI 2023. Congrats, Wenlong and Jee Seok!",
    },
    {
      title:
        "[01/2023] We have one paper accepted by ICLR 2023. Dr. Li will give a keynote speak at TML4H workshop at ICLR 2023.",
    },
    {
      title:
        "[01/2023] Dr. Li is serving as a Program Chairs for MIDL 2023. Dr. Li is serving as an Area Chair and Organizing Committee (Women in MICCAI) for MICCAI 2023. Dr. Li was appointed as an Assitant Professor Adjunct at Yale University.",
    },
    {
      title:
        "[12/2022] We received the Health Innovation Funding Investment (HIFI) Awards on deep learning-based cancer screening project.",
    },
    {
      title:
        "[07/2022] We received Meta Research Award on the project of data auditing for ML, leading by Prof. Kai Li at Princeton.",
    },
    {
      title:
        "[06/2022] Chun-Yin and Minghui were selected as Blockchain Graduate Pathway 2022-2023 fellows. Weina received Borelis AI fellowship.",
    },
    {
      title:
        "[04/2022] We received NSERC Discovery Grants program's support on continous learning project.",
    },
    {
      title:
        "[04/2022] We received ROCHE's and CIFAR's support on healthcare data synthesis project.",
    },
    {
      title:
        "[03/2022] We received generous support from Compute Canada RPP Competetion.",
    },
    {
      title:
        "[03/2022] We received NVIDIA Academic Hardware Grant to continuously support our FL projects.",
    },
    { title: "[02/2022] Dr.Li was selected as a Google Cloud Research Innovator." },
    { title: "[11/2021] We received Health Innovation Funding Investment Awards with Dr. Charlene Ronquillo on fairness on healthcare data analysis project." },
  ];

  const renderNews = () => {
    return (
      <ul>
        {news.map((data) => (
          <li className="news">
            {data.title}</li>
        ))}
      </ul>
    );
  };
  return (
    <div className="news-container screen-container" id={props.id || ""}>
      <div className="news-parent">
        <ScreenHeading title={"News"} subHeading={""} />
        {renderNews()}
      </div>
    </div>
  );
}
