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
     "S4M: S4 for multivariate time series forecasting with Missing values",
    author: "Peng, J., Yang, M., Zhang, Q., & Li, X.",
    journal: "ICLR 2025",
    link: "https://openreview.net/pdf?id=BkftcwIVmR"
  },
            {
    title:
     "Can Textual Gradient Work in Federated Learning?",
    author: "Chen, M., Jin, R., Deng, W., Chen, Y., Huang, Z., Han, Y., & Li, X.",
    journal: "ICLR 2025",
    link: "https://openreview.net/pdf?id=Cy5IKvYbR3"
  },
        {
    title:
     "GMValuator: Similarity-based Data Valuation for Generative Models",
    author: "Yang, J., Deng, W., Liu, B., Huang, Y., Zou, J., & Li, X.",
    journal: "ICLR 2025",
    link: "https://openreview.net/pdf?id=WncnpvJk83"
  },
          {
    title:
     "Revisiting Delta-Parameter Pruning For Fine-Tuned Models",
    author: "Deng, W., Zhao, Y., Vakilian, V., Chen, M., Li, X., & Thrampoulidis, C.",
    journal: "ICLR 2025",
    link: "https://arxiv.org/pdf/2410.09344"
  },
    {
    title:
     "Local Superior Soups: A Catalyst for Reducing Communication Rounds in Federated Learning with Pre-trained Model",
    author: "Chen, M., Jiang, M., Zhang, X., Dou, Q., Wang, Z., & Li, X.",
    journal: "NeurIPS 2024",
    link: "https://arxiv.org/pdf/2410.23660"
  },
  {
    title:
     "FairMedFM: fairness benchmarking for medical imaging foundation models",
    author: "Jin, R., Xu, Z., Zhong, Y., Yao, Q., Dou, Q., Zhou, S. K., & Li, X.",
    journal: "NeurIPS 2024",
    link: "https://arxiv.org/pdf/2407.00983"
  },
    {
    title:
     "Federated Model Heterogeneous Matryoshka Representation Learning",
    author: "Yi, L., Yu, H., Ren, C., Wang, G., Liu, X., & Li, X. ",
    journal: "NeurIPS 2024",
    link: "https://arxiv.org/pdf/2406.00488"
  },

  {
    title:
     "CCSI: Continual Class-Specific Impression for Data-free Class Incremental Learning",
    author: "Ayromlou, S., Tsang, T., Abolmaesumi, P., & Li, X.",
    journal: "Medical Image Analysis 2024",
    link: "https://arxiv.org/pdf/2312.14574"
  },
     {
    title:
     "MMGPL: Multimodal Medical Data Analysis with Graph Prompt Learning",
    author: "Peng, L., Cai, S., Wu, Z., Shang, H., Zhu, X., & Li, X.",
    journal: "Medical Image Analysis 2024",
    link: "https://arxiv.org/pdf/2312.14574"
  },
    {
    title:
     "Overcoming Data and Model heterogeneities in Decentralized Federated Learning via Synthetic Anchors",
    author: "Huang, C. Y., Srinivas, K., Zhang, X., & Li, X.",
    journal: "ICML 2024",
    link: "https://arxiv.org/pdf/2405.11525"
  },
    {
    title:
     "FedCal: Achieving Local and Global Calibration in Federated Learning via Aggregated Parameterized Scaler",
    author: "Peng, H., Yu, H., Tang, X., & Li, X.",
    journal: "ICML 2024",
    link:"http://arxiv.org/abs/2405.15458"
  },
    {
    title:
     "Learning High-Order Relationships of Brain Regions",
    author: "Qiu, W., Chu, H., Wang, S., Zuo, H., Li, X., Zhao, Y., & Ying, R. ",
    journal: "ICML 2024",
    link: "https://arxiv.org/html/2312.02203v2"
  },
  {
    title:
     "Unlocking the Potential of Prompt-Tuning in Bridging Generalized and Personalized Federated Learning",
    author: "Deng, W., Thrampoulidis, C., & Li, X.",
    journal: "CVPR 2024",
    link: "https://arxiv.org/abs/2310.18285"
  },
  {
    title:
     "LESS: Label-efficient Multi-scale Learning for Cytological Whole Slide Image Screening",
    author: "Zhao, B., Deng, W., Li, Z., Zhou, C., Gao, Z., Wang, G. & Li, X.",
    journal: "Medical Image Analysis 2024",
    link: "https://arxiv.org/abs/2306.03407"
  },
  {
    title:
     "Heterogeneous Personalized Federated Learning by Local-Global Updates Mixing via Convergence Rate",
    author: "Jiang, M., Le, A., Li X., Dou X.",
    journal: "ICLR 2024",
    link: "https://openreview.net/forum?id=7pWRLDBAtc&noteId=zWmLRWv933"
  },
  {
    title:
    "Backdoor Attack on Unpaired Medical Image-Text Foundation Models: A Pilot Study on MedCLIP",
    author: "Jin, R., Huang, C., You, C. & Li, X.",
    journal: "SaTML 2024",
    link: "https://arxiv.org/abs/2401.01911.pdf"
  },
    {
      title:
        "Backdoor Attack and Defense in Federated Generative Adversarial Network-based Medical Image Synthesis",
      author: "Jin, R., & Li, X.",
      journal: "Medical Image Analysis 2024",
      link: "https://arxiv.org/pdf/2210.10886.pdf"
    },
    {
      title:
        "Community-Aware Transformer for Autism Prediction in fMRI Connectome",
      author: "Bannadabhavi, A., Lee, S., Deng, W., & Li, X.",
      journal: "MICCAI 2023",
      link: "http://arxiv.org/abs/2307.10181"
    },
    {
      title:
        "FedSoup: Improving Generalization and Personalization in Federated Learning via Selective Model Interpolation",
      author: "Chen, M., Jiang, M., Dou, Q., & Li, X.",
      journal: "MICCAI 2023",
      link: "https://arxiv.org/abs/2307.10507",
    },
    {
      title:
        "BUDDY: Molecular Formula Discovery via Bottom-up MS/MS Interrogation",
      author: "Xing, S., Shen, S., Xu, B., Li, X., & Huan, T.",
      journal: "Nature Methods 2024",
      link: "https://www.nature.com/articles/s41592-023-01850-x",
    },
    {
      title:
        "Federated Adversarial Learning: A Framework with Convergence Analysis",
      author: "Li, X., Zhao, S., Yang, J.",
      journal: "ICML 2023",
      link: "https://arxiv.org/abs/2208.03635",
    },
    // {
    //   title:
    //     "SADM: Sequence-Aware Diffusion Model for Longitudinal Medical Image Generation",
    //   author: "Yoon, J. S., Zhang, C., Suk, H. I., Guo, J., & Li, X",
    //   journal: "IPMI 2023",
    //   link: "https://arxiv.org/abs/2212.08228",
    // },
    // {
    //   title:
    //     "On Fairness of Medical Image Classification with Multiple Sensitive Attributes via Learning Orthogonal Representations",
    //   author: "Deng, W., Zhong, Y., Dou, Q., & Li, X.",
    //   journal: "IPMI 2023",
    //   link: "https://arxiv.org/abs/2301.01481",
    // },
    // {
    //   title:
    //     "PerFedMask: Personalized Federated Learning with Optimized Masking Vectors",
    //   author: "Setayesh, M., Li, X., & Wang, V.",
    //   journal: "ICLR 2023",
    //   link: "https://openreview.net/forum?id=hxEIgUXLFF&referrer=%5BAuthor%20Console%5D(%2Fgroup%3Fid%3DICLR.cc%2F2023%2FConference%2FAuthors%23your-submissions",
    // },
    // {
    //   title:
    //     "A Dataset Auditing Method for Collaboratively Trained Machine Learning Models",
    //   author: "Huang, Y., Huang, C., Li, X., & Li, K.",
    //   journal: "IEEE Transaction on Medical Imaging 2022",
    //   link: "https://ieeexplore.ieee.org/document/9951407",
    // },
    // {
    //   title:
    //     "Guidelines and Evaluation of Clinical Explainable AI in Medical Image Analysis",
    //   author: "Jin, W., Li, X., Fatehi, M., & Hamarneh, G.",
    //   journal: "Medical Image Analysis 2022",
    //   link: "https://arxiv.org/pdf/2202.10553.pdf",
    // },
    // {
    //   title:
    //     "GATE: Graph CCA for Temporal SElf-supervised Learning for Label-efficient fMRI Analysis",
    //   author: "Peng, L., Nan, W., Xu, J., Zhu, X., & Li, X.",
    //   journal: "IEEE Transaction on Medical Imaging 2022",
    //   link: "https://arxiv.org/pdf/2203.09034.pdf",
    // },
    //   {
    //   title:
    //     "Class Impression for Data-free Incremental Learning",
    //   author: "Ayromlou, S., Abolmaesumi, P., Tsang, T., & Li, X.",
    //   journal: "MICCAI 2022",
    //   link: "https://arxiv.org/pdf/2207.00005.pdf",
    // },
    //  {
    //   title:
    //     "Exploring Resolution and Degradation Clues as Self-supervised Siganl for Low Quality Object Detection",
    //   author: "Cui, Z., Zhu, Y., Gu, L., Qi, G., Li, X., Zhang, R., Zhang, Z., & Harada, T.",
    //   journal: "ECCV 2022",

    // },
    // {
    //   title:
    //     "FedNI  Federated Graph Learning with Network Inpainting for Population Based Disease Prediction",
    //   author: "Peng, L., Wang, N., Dvornek, N., Zhu, X., & Li, X.",
    //   journal: "IEEE Transaction on Medical Imaging 2022",
    //   link: "https://arxiv.org/pdf/2112.10166.pdf",
    // },
    //     {
    //   title:
    //     "Unsupervised Federated Learning is Possible: A Case of Class-Conditional-Sharing Clients",
    //   author: "Lu, N., Wang, Z., Li, X., Niu, G., Dou, Q., & Sugiyama, M.",
    //   journal: "ICLR 2022",
    //   link: "https://openreview.net/pdf?id=WHA8009laxu",
    // },
    // {
    //   title:
    //     "Evaluating Explainable AI on a Multi-Modal Medical Imaging Task: Can Existing Algorithms Fulfill Clinical Requirements",
    //   author: "Jin, W., Li, X., & Hamarneh G",
    //   journal: "AAAI 2022",
    //   link: "https://www2.cs.sfu.ca/~hamarneh/ecopy/aaai2022.pdf",
    // },
    //       {
    //   title:
    //     "Leveraging Human Selective Attention for Medical Image Analysis with Limited Training Data.",
    //   author: "Huang, Y., Li, X., Yang, L., Gu, L., Zhu, Y., Seo, H., Meng, Q., Harada, T. & Sato, Y.",
    //   journal: "BMVC 2021",
    //   link: "https://openreview.net/pdf?id=WHA8009laxu",
    // },
    //           {
    //   title:
    //     "EMA: Auditing Data Removal from Trained Models.",
    //   author: "Huang, Y., Li, X., & Li, K.",
    //   journal: "MICCAI 2021",
    //   link: "https://arxiv.org/pdf/2109.03675.pdf",
    // },
    //           {
    //   title:
    //     "Subgraph Federated Learning with Missing Neighbor Generation",
    //   author: "Zhang, K., Yang, C., Li, X., Sun, L., & Yiu, SM.",
    //   journal: "NeurIPS 2021 (spotlight)",
    //   link: "https://arxiv.org/pdf/2106.13430.pdf",
    // },
    //               {
    //   title:
    //     "FL-NTK: A Neural Tangent Kernel-based Framework for Federated Learning Analysis.",
    //   author: "Huang, B., Li, X., Song, Z., & Yang, X.",
    //   journal: "ICML 2021",
    //   link: "https://arxiv.org/abs/2105.05001 ",
    // },
    //                   {
    //   title:
    //     "FedBN: Federated Learning on Non-IID Features via Local Batch Normalization.",
    //   author: "Li, X., Jiang, M., Zhang, X., Kamp, M., & Dou, Q.",
    //   journal: "ICLR 2021",
    //   link: "https://openreview.net/pdf?id=6YEQUn0QICG",
    // },
    //       { title:
    //     "On InstaHide, Phase Retrieval, and Sparse Matrix Factorization.",
    //   author: "Chen, S., Li, X., Song, Z., & Zhuo, D.",
    //   journal: "ICLR 2021",
    //   link: "https://openreview.net/pdf?id=AhElGnhU2BV",
    // },
    // { title:
    //     "BrainGNN: Interpretable Brain Graph Neural Network for fmri Analysis..",
    //   author: "Li, X., Zhou, Y., Dvornek, N., Zhang, M., Gao, S., Zhuang, J., ... & Duncan, J. S.",
    //   journal: "Medical Image Analysis 2021",
    //   link: "https://www.sciencedirect.com/science/article/abs/pii/S1361841521002784",
    // },

  ];

  const renderPublications = () => {
    return (
      <div className="publications-list">
        {publications.map((data, index) => (
          <div className="publication-card" key={index}>
            <a className="publication-title" href={data.link} target="_blank" rel="noopener noreferrer">
              {data.title}
            </a>
            <p className="publication-authors">{data.author}</p>
            <p className="publication-journal">{data.journal}</p>
          </div>
        ))}
      </div>
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
    <div className="publications-container screen-container" id={props.id || ""}>
      <div className="publications-parent">
        <ScreenHeading title={"Publications"} subHeading={""} />
        <div className="publication-introduction">
          <p>
            For the complete list, please check &nbsp;
            <a href="https://scholar.google.com/citations?user=sdENOQ4AAAAJ&hl=en#" target="_blank" rel="noopener noreferrer">
              Google Scholar
            </a>.
          </p>
        </div>
        {renderPublications()}
      </div>
    </div>
  );
}
