import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Publications.css";

export default function Publications(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const publications = [
    {
      title:
        "Community-Aware Transformer for Autism Prediction in fMRI Connectome",
      author: "Bannadabhavi, A., Lee, S., Deng, W., & Li, X.",
      journal: "MICCAI 2023",
    },
    {
      title:
        "FedSoup: Improving Generalization and Personalization in Federated Learning via Selective Model Interpolation",
      author: "Chen, M., Jiang, M., Dou, Q., & Li, X.",
      journal: "MICCAI 2023",
    },
    {
      title:
        "BUDDY: Molecular Formula Discovery via Bottom-up MS/MS Interrogation",
      author: "Xing, S., Shen, S., Xu, B., Li, X., & Huan, T.",
      journal: "Nature Methods",
      link: "https://www.nature.com/articles/s41592-023-01850-x",
    },
    {
      title:
        "Federated Adversarial Learning: A Framework with Convergence Analysis",
      author: "Li, X., Zhao, S., Yang, J.",
      journal: "ICML 2023",
      link: "https://arxiv.org/abs/2208.03635",
    },
    {
      title:
        "SADM: Sequence-Aware Diffusion Model for Longitudinal Medical Image Generation",
      author: "Yoon, J. S., Zhang, C., Suk, H. I., Guo, J., & Li, X",
      journal: "IPMI 2023",
      link: "https://arxiv.org/abs/2212.08228",
    },
    {
      title:
        "On Fairness of Medical Image Classification with Multiple Sensitive Attributes via Learning Orthogonal Representations",
      author: "Deng, W., Zhong, Y., Dou, Q., & Li, X.",
      journal: "IPMI 2023",
      link: "https://arxiv.org/abs/2301.01481",
    },
    {
      title:
        "PerFedMask: Personalized Federated Learning with Optimized Masking Vectors",
      author: "Setayesh, M., Li, X., & Wang, V.",
      journal: "ICLR 2023",
      link: "https://openreview.net/forum?id=hxEIgUXLFF&referrer=%5BAuthor%20Console%5D(%2Fgroup%3Fid%3DICLR.cc%2F2023%2FConference%2FAuthors%23your-submissions",
    },
    {
      title:
        "A Dataset Auditing Method for Collaboratively Trained Machine Learning Models",
      author: "Huang, Y., Huang, C., Li, X., & Li, K.",
      journal: "IEEE Transaction on Medical Imaging 2022",
      link: "https://ieeexplore.ieee.org/document/9951407",
    },
    {
      title:
        "Guidelines and Evaluation of Clinical Explainable AI in Medical Image Analysis",
      author: "Jin, W., Li, X., Fatehi, M., & Hamarneh, G.",
      journal: "Medical Image Analysis 2022",
      link: "https://arxiv.org/pdf/2202.10553.pdf",
    },
    {
      title:
        "GATE: Graph CCA for Temporal SElf-supervised Learning for Label-efficient fMRI Analysis",
      author: "Peng, L., Nan, W., Xu, J., Zhu, X., & Li, X.",
      journal: "IEEE Transaction on Medical Imaging 2022",
      link: "https://arxiv.org/pdf/2203.09034.pdf",
    },
      {
      title:
        "Class Impression for Data-free Incremental Learning",
      author: "Ayromlou, S., Abolmaesumi, P., Tsang, T., & Li, X.",
      journal: "MICCAI 2022",
      link: "https://arxiv.org/pdf/2207.00005.pdf",
    },
     {
      title:
        "Exploring Resolution and Degradation Clues as Self-supervised Siganl for Low Quality Object Detection",
      author: "Cui, Z., Zhu, Y., Gu, L., Qi, G., Li, X., Zhang, R., Zhang, Z., & Harada, T.",
      journal: "ECCV 2022",

    },
    {
      title:
        "FedNI  Federated Graph Learning with Network Inpainting for Population Based Disease Prediction",
      author: "Peng, L., Wang, N., Dvornek, N., Zhu, X., & Li, X.",
      journal: "IEEE Transaction on Medical Imaging 2022",
      link: "https://arxiv.org/pdf/2112.10166.pdf",
    },
        {
      title:
        "Unsupervised Federated Learning is Possible: A Case of Class-Conditional-Sharing Clients",
      author: "Lu, N., Wang, Z., Li, X., Niu, G., Dou, Q., & Sugiyama, M.",
      journal: "ICLR 2022",
      link: "https://openreview.net/pdf?id=WHA8009laxu",
    },
    {
      title:
        "Evaluating Explainable AI on a Multi-Modal Medical Imaging Task: Can Existing Algorithms Fulfill Clinical Requirements",
      author: "Jin, W., Li, X., & Hamarneh G",
      journal: "AAAI 2022",
      link: "https://www2.cs.sfu.ca/~hamarneh/ecopy/aaai2022.pdf",
    },
          {
      title:
        "Leveraging Human Selective Attention for Medical Image Analysis with Limited Training Data.",
      author: "Huang, Y., Li, X., Yang, L., Gu, L., Zhu, Y., Seo, H., Meng, Q., Harada, T. & Sato, Y.",
      journal: "BMVC 2021",
      link: "https://openreview.net/pdf?id=WHA8009laxu",
    },
              {
      title:
        "EMA: Auditing Data Removal from Trained Models.",
      author: "Huang, Y., Li, X., & Li, K.",
      journal: "MICCAI 2021",
      link: "https://arxiv.org/pdf/2109.03675.pdf",
    },
              {
      title:
        "Subgraph Federated Learning with Missing Neighbor Generation",
      author: "Zhang, K., Yang, C., Li, X., Sun, L., & Yiu, SM.",
      journal: "NeurIPS 2021 (spotlight)",
      link: "https://arxiv.org/pdf/2106.13430.pdf",
    },
                  {
      title:
        "FL-NTK: A Neural Tangent Kernel-based Framework for Federated Learning Analysis.",
      author: "Huang, B., Li, X., Song, Z., & Yang, X.",
      journal: "ICML 2021",
      link: "https://arxiv.org/abs/2105.05001 ",
    },
                      {
      title:
        "FedBN: Federated Learning on Non-IID Features via Local Batch Normalization.",
      author: "Li, X., Jiang, M., Zhang, X., Kamp, M., & Dou, Q.",
      journal: "ICLR 2021",
      link: "https://openreview.net/pdf?id=6YEQUn0QICG",
    },
          { title:
        "On InstaHide, Phase Retrieval, and Sparse Matrix Factorization.",
      author: "Chen, S., Li, X., Song, Z., & Zhuo, D.",
      journal: "ICLR 2021",
      link: "https://openreview.net/pdf?id=AhElGnhU2BV",
    },
    { title:
        "BrainGNN: Interpretable Brain Graph Neural Network for fmri Analysis..",
      author: "Li, X., Zhou, Y., Dvornek, N., Zhang, M., Gao, S., Zhuang, J., ... & Duncan, J. S.",
      journal: "Medical Image Analysis 2021",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S1361841521002784",
    },

  ];

  const renderPublications = () => {
    return (
      <ul>
        {publications.map((data) => (
          <li className="publication-content" key={data.id}>
            <a className="publication-title" href={data.link}>
              {data.title}
            </a>
            <p className="publication-autors">{data.author}</p>
            <p className="publication-journal">{data.journal}</p>
          </li>
        ))}
      </ul>
    );
  };

  // const renderPublications = () => {
  //   return publications.map((value, i) => (
  //     <div className="publications">
  //       <div className="project-title" key={i}>
  //         <strong>{value.title}</strong>
  //         <br className="project-image"> {value.author}</br>
  //       </div>

  //     </div>
  //   ));
  // };

  return (
    <div
      className="publications-container screen-container"
      id={props.id || ""}
    >
      <div className="publications-parent">
        <ScreenHeading title={"Publications"} subHeading={""} />
        <div className="publication-introduction">
          <p>
            For the complete list, please check &nbsp;
            <a href="https://scholar.google.com/citations?user=sdENOQ4AAAAJ&hl=en#">
              google scholar
            </a>
            .
          </p>
        </div>
        {renderPublications()}
      </div>
    </div>
  );
}
