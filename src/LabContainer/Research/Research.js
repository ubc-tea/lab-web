import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Research.css";

export default function Research(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = [
    {
      title:
        "Multi-Agent Collaborative Decision Support System for Healthcare (MAC-Health)",
      description: "Performing diagnosis and helping patients manage treatment require complex reasoning and decision-making by doctors based often requires experts collaboratively make the decisions. In recent years, large language models (LLMs) has achieved significant advancement, prompting the exploration of developing decision support systems for doctors to help improve clinical care. In this project, we develop MAC-Health, as AI copilot in action for doctors or medical school students. It consists two types of agents: 1) medical domain expert agents, which are medical Q&A agents finetuned on hospital data through federated learning (FL), and 2) ecosystem management agents, which performs assistive roles such as coordination, prompt generation, dynamic context-aware workflow triggering, uncertainty-based follow up questioning, optimization of MAS organizational structure, and uncovering potential issues among diagnostic responses from multiple medical domain expert agents, etc.",
      imgurl: require("../../assets/Research/mac-health.jpg"),
    }, 
    {
      title: "Data Valuation and Auditing for GenAI",
      description: "Data valuation plays a crucial role in machine learning. Existing data valuation methods, mainly focused on discriminative models, overlook generative models that have gained attention recently. In generative models, data valuation measures the impact of training data on generated datasets. We formulate the data valuation problem in generative models from a similarity matching perspective to bridge the gaps. Specifically, we introduce GMValuator, , the first training-free and model-agnostic approach to providing data valuation for generation tasks.",
      Imgurl:require("../../assets/Research/gmvaluator.png"),
    },
    {
      title:
        "Federated Learning on Non-iid Features",
      description:
        "Most of the previous federated learning work has focused on a difference in the distribution of labels. Unlike those settings, we address an important problem of FL, e.g., different scanner/sensors in medical imaging, where local clients may store examples with different marginal or conditional feature distributions compared to other nodes, which we denote as feature shift non-iid. In this work, we propose an effective method that uses local batch normalization to alleviate the feature shift before averaging models.",
      imgurl: require("../../assets/Research/fedbn.png"),
    },
   {
      title:
        "Self-supervised Learning on Graph Data",
      description:
        "In population graph-based disease analysis, graph convolutional neural networks (GCNs) have achieved remarkable success. However, these achievements are inseparable from abundant labeled data and sensitive to spurious signals. To improve fMRI representation learning and classification under a label-efficient setting, we propose a novel and theory-driven self-supervised learning (SSL) framework on GCNs, called GATE. In this work, we focus on the challenging task, neuro-disease classification, using fMRI and esign suitable and effective SSL strategies to extract formation and robust features for fMRI.",
      imgurl: require("../../assets/Research/gate.png"),
    },
    {
      title: "Data-free Incremental Learning",
      description: 
      "A major challenge of incremental learning is catastrophic forgetting. To alleviate this problem, prior methodologies save a portion of training data that require perpetual storage, which may introduce privacy issues. Here, we propose a novel data-free class incremental learning framework that first synthesizes data from the model trained on previous classes to generate synthetic data, called Class Impression, which is used to update model with new data. With the assistance with serveral novel losses, our pipeline improves accuracy for class incremental learning.",
      imgurl: require("../../assets/Research/class_impression.png"),
    },
    // {
    //   title: "Unsupervised Data Valuation",
    //   description: 
    //   "Existing data assessment methods commonly require knowing the labels in advance, which are not feasible to achieve the goal of `knowing which data is valuable beofre training.'To this end, we formulate and propose a novel and efficient data assessment strategy, EXponentiAl Marginal sINgular valuE (EXAMINE) score, to rank the quality of unlabeled medical image data based on their useful latent representations extracted via SSL networks. Our method is designbed with proper theoritical gaurantee.",
    //   imgurl: require("../../assets/Research/examine.png"),
    // },

    {
      title: "Explaining AI Models with Uncertainty",
      description: "We propose DistDeepSHAP, a post-hoc feature importance estimation method under uncertainty evaluation for deep learning models.First, it can obtain uncertainty estimates for the provided feature importance scores. Second, it can better utilize the empirical distribution and has the potential for better feature importance scores estimation from the generated percentile saliency maps. Last but not least, it can compare with arbitrary subgroup references and interpret subgroup salient features, which is crucial for medical image study.",
      imgurl: require("../../assets/Research/distdeepshap.png"),
    },
  ];

  const renderProjects = () => {
    return SCREEN_CONSTSANTS.map((value, i) => (
      <div className="research-projects">
        <div className="project-title" key={i}>
          <span>{value.title}</span>
          <img
            src={value.imgurl}
            alt="No Image"
            className="project-image"
          ></img>
        </div>
        <div className="project-details">
          <span>{value.description}</span>
        </div>
        <div className="bottom-bar"></div>
      </div>
    ));
  };

  return (
    <div className="research-container screen-container" id={props.id || ""}>
      <div className="research-parent">
        <ScreenHeading title={"Research"} subHeading={""} />
        {renderProjects()}
      </div>
    </div>
  );
}
