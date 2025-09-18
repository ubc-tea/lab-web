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
        "[09/2025] Four papers are accepted by NeruIPS 2025.",
    },
    {
      title:
        "[06/2025] Three papers are accepted by MICCAI and ICCV 2025.",
    },
    {
      title:
        "[05/2025] Two papers are accepted by ICML 2025.",
    },
    {
      title:
        "[01/2025] Four papers are accepted by ICLR 2025.",
    },
    {
      title:
        "[12/2024] Two papers are accepted by AAAI 2025.",
    },
    {
      title:
        "[09/2024] Three papers are accepted by NeurIPS 2024.",
    },
    {
      title:
        "[07/2024] One paper is accepted by ECCV 2024.",
    },
    {
      title:
        "[06/2024] Three papers are accepted by MICCAI 2024. Congrats, Ruinan, Minghui and Wenlong!",
    },
    {
      title:
        "[06/2024] Our paper on continual learning was accepted by Medical Image Analysis. Congrats, Sana!",
    },
    {
      title:
        "[05/2024] Our paper on federated unlearning received Best Paper Award at FL@FM WWW 2024.",
    },
    {
      title:
        "[05/2024] We have one paper on multimodal foundation model accepted by Medical Image Analaysis!",
    },
    {
      title:
        "[04/2024] Three papers are accepted by ICML 2024!",
    },
    {
      title:
        "[04/2024] Five papers are accepted by IJCAI 2024!",
    },
    {
      title:
        "[02/2024] Our paper on federated learning with prompt tuning accepted by CVPR 2024. Congrats, Wenlong!",
    },
    {
      title:
        "[02/2024] Our paper on label efficient WSI analysis is accepted by Meidical Image Analysis!",
    },
    { 
      title:
        "[01/2024] Our paper on Heterogenous Federated Learning accepted by ICLR 2024!",
    },
    {
      title:
        "[12/2023] Our paper on backdoor attack on VLM is accepted by SaTML 2024.",
    },
    // {
    //   title:
    //     "[09/2023] Ruinan's paper is accepted by Meidical Image Analysis!",
    // },

    // {
    //   title:
    //     "[06/2023] We got three papers accepted by MICCAI 2023. Congrats, Minghui, Anushree, and Meirui!",
    // },
    // {
    //   title:
    //     "[04/2023] We got a paper accepted by Nature Methods led by Dr. Tao Huan.",
    // },
    // {
    //   title:
    //     "[04/2023] We got a paper accepted by ICML 2023.",
    // },
    // {
    //   title:
    //     "[02/2023] We have two papers accepted by IPMI 2023. Congrats, Wenlong and Jee Seok!",
    // },
    // {
    //   title:
    //     "[01/2023] We have one paper accepted by ICLR 2023. Dr. Li gives keynote at TML4H workshop at ICLR 2023.",
    // },
    // {
    //   title:
    //     "[01/2023] Dr. Li serves as a Program Chairs for MIDL 2023. Dr. Li serves an Area Chair and Organizing Committee for MICCAI 2023. ",
    // },
    // {
    //   title:
    //     "[12/2022] We received the Health Innovation Funding Investment (HIFI) Awards on deep learning-based cancer screening project.",
    // },
    // {
    //   title:
    //     "[07/2022] We received Meta Research Award on the project of data auditing for ML.",
    // },
    // {
    //   title:
    //     "[06/2022] Chun-Yin and Minghui were selected as Blockchain Graduate Pathway 2022-2023 fellows. Weina received Borelis AI fellowship.",
    // },
    // {
    //   title:
    //     "[04/2022] We received NSERC Discovery Grants program's support on continous learning project.",
    // },
    // {
    //   title:
    //     "[04/2022] We received ROCHE's and CIFAR's support on healthcare data synthesis project.",
    // },
    // {
    //   title:
    //     "[03/2022] We received generous support from Compute Canada RPP Competetion.",
    // },
    // {
    //   title:
    //     "[03/2022] We received NVIDIA Academic Hardware Grant to continuously support our FL projects.",
    // },
    // { title: "[02/2022] Dr.Li was selected as a Google Cloud Research Innovator." },
    // { title: "[11/2021] We received Health Innovation Funding Investment Awards with Dr. Charlene Ronquillo on fairness on healthcare data analysis project." },
  ];

  const renderNews = () => {
    return (
      <div className="news-list">
        {news.map((data, index) => (
          <div className="news-item" key={index}>
            <span className="news-date">{data.title.split("]")[0] + "]"}</span>
            <span className="news-title">{data.title.split("]")[1]}</span>
          </div>
        ))}
      </div>
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
