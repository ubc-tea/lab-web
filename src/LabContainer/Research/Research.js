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
        "Can Textual Gradient Work in Federated Learning?",
      description: "This project introduces Federated Textual Gradient (FedTextGrad), a novel approach that integrates textual gradient optimization into federated learning (FL). Instead of numerical gradients, FedTextGrad enables FL clients to refine prompts using LLM-generated textual feedback, with aggregation via text summarization. The study highlights key challenges in information retention and proposes an improved summarization method using the Uniform Information Density (UID) principle to enhance prompt effectiveness. Experiments on reasoning tasks validate the feasibility of this approach, expanding FL's applicability to optimizing LLMs in decentralized settings.",
      imgurl: require("../../assets/Research/fedtextgrad.png"),
    },
    {
      title:
        "FairMedFM: Fairness Benchmarking for Medical Imaging Foundation Models",
      description: "This paper introduces FairMedFM, a benchmarking framework for evaluating fairness in medical imaging foundation models (FMs). It integrates 17 datasets, 20 FMs, and multiple fairness metrics to analyze biases across classification and segmentation tasks. The study highlights bias prevalence, dataset-specific disparities, and ineffectiveness of existing mitigation strategies. FairMedFM provides an open-source and extensible pipeline, aiming to enhance fairness evaluation and promote equitable AI applications in medical imaging.",
      imgurl: require("../../assets/Research/fairmedfm.png"),
    },
    {
      title:
        "Federted Model Heterogeneous Matryoshka Representation Learning.",
      description: "This paper introduces FedMRL, a novel approach to model heterogeneous federated learning (MHeteroFL) that enhances knowledge transfer between heterogeneous client models. FedMRL employs a shared auxiliary homogeneous model for adaptive representation fusion and Matryoshka Representation Learning, enabling multi-granular feature extraction. This design improves learning capability while reducing communication and computation costs. Theoretical analysis guarantees convergence, and experiments on benchmark datasets demonstrate up to 8.48% and 24.94% accuracy gains over state-of-the-art baselines.",
      imgurl: require("../../assets/Research/matryoshka.png"),
    },
    {
      title:
        "MMGPL: Multimodal Medical Data Analysis with Graph Prompt Learning",
      description: "This project introduces MMGPL, a graph prompt learning framework for diagnosing neurological disorders using multimodal medical data. MMGPL reduces irrelevant patches and leverages graph-based prompts to capture structural relationships among brain regions. By integrating GPT-4-generated disease concepts with a Graph Convolutional Network (GCN), MMGPL enhances medical data analysis. Experiments on neurological disorder datasets demonstrate its superior performance and scalability.",
      imgurl: require("../../assets/Research/mmgpl.png"),
    }, 
    {
      title:
        "Multi-Agent Collaborative Decision Support System for Healthcare (MAC-Health)",
      description: "Performing diagnosis and helping patients manage treatment require doctors to use complex reasoning and decision-making, which often requires experts to make the decisions collaboratively. In recent years, large language models (LLMs) have achieved significant advancement, prompting the exploration of developing decision support systems for doctors to help improve clinical care. This has resulted in the emergence of a plethora of multi-agent systems (MAS) with foundation model-based agents providing interactive decision support based on queries about patient conditions. In this project, we develop MAC-Health as an AI copilot for doctors or medical school students.",
      imgurl: require("../../assets/Research/mac-health.jpg"),
    }, 
    {
      title: "Data Valuation and Auditing for GenAI",
      description: "Data valuation plays a crucial role in machine learning. Existing data valuation methods, mainly focused on discriminative models, overlook generative models that have gained attention recently. In generative models, data valuation measures the impact of training data on generated datasets. We formulate the data valuation problem in generative models from a similarity matching perspective to bridge the gaps. Specifically, we introduce GMValuator, , the first training-free and model-agnostic approach to providing data valuation for generation tasks.",
      imgurl:require("../../assets/Research/valuator.jpg"),
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
