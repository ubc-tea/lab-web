import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Previous.css";

export default function People(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const people = [
    {
      name: "Sana Ayromlou",
      title: "MSc (2021 - 2023), now ML Software Engineer at Google",
      link: "https://www.linkedin.com/in/sana-ayromlou/",
      imgurl: require("../../assets/portrait/sana.jpg"),
    },
    {
      name: "Chun-Yin Huang",
      title: "PhD (2021 - 2024), now ML Scientist at Synlico Inc.",
      link: "https://www.linkedin.com/in/chun-yin-huang-00a728b3/",
      imgurl: require("../../assets/portrait/chunyin.jpeg"),
    },
    {
      name: "Fatemeh Taheri Dezaki",
      title: "Postdoc (2021-2022), now Machine Learning Scientist at Amazon ",
      link: "www.google.com",
      imgurl: require("../../assets/portrait/avatar1.jpg"),
    },
    {
      name: "Justin Yang",
      title: "MSc (2022 - 2024), now at Vector Institute",
      link: "https://freddieneverleft.github.io/",
      imgurl: require("../../assets/portrait/justin.jpeg"),
    },
    {
      name: "Jane Shi",
      title: "MSc (2023 - 2025), now ML Associate at Vector Institute",
      link: "https://www.linkedin.com/in/congzhen-shi/?originalSubdomain=ca",
      imgurl: require("../../assets/portrait/jane.jpeg"),
    },
    {
      name: "Ailar Mahdizadeh",
      title: "MSc (2022 - 2024), now PhD student at UBC",
      link: "www.google.com",
      imgurl: require("../../assets/portrait/ailar.png"),
    },
    {
      name: "SangMook Kim",
      title: "Postdoc(2023 - 2024), now Asst Prof. at CNU (Korea)",
      link: "https://scholar.google.com/citations?user=YjpFRuIAAAAJ&hl=ko",
      imgurl: require("../../assets/portrait/sam.jpeg"), 
    },
    {
      name: "Minghui Chen",
      title: "PhD (2022 - ), now visiting scholar at Columbia University",
      link: "https://chenminghui.com/",
      imgurl: require("../../assets/portrait/minghui.jpeg"),
    },
    {
      name: "Nan Wang",
      title: "Visiting Student, now Asst. Prof. at ECUST",
      link: "www.google.com",
      imgurl: require("../../assets/portrait/avatar2.jpg"),
    },
    {
      name: "Qiong Zhang",
      title: "Ph.D. Stats, now Asst. Prof. at Renmin Univ. ",
      link: "https://sarahqiong.github.io/",
      imgurl: require("../../assets/portrait/avatar3.jpg"),
    },
    {
      name: "Jee Seok Yoon",
      title: "Visiting Student",
      link: "www.google.com",
      imgurl: require("../../assets/portrait/jeeseok.jpeg"), 
    },
    {
      name: "Yuyou Lai",
      title: "Undergraduate at UBC ECE",
      link: "https://www.linkedin.com/in/yuyou-lai/",
      imgurl: require("../../assets/portrait/boy.jpeg"),
    },
    {
      name: "Ruichen Yao",
      title: "MEng(2022 - 2023)",
      link: "https://www.linkedin.com/in/ruichen-yao-10299248/",
      imgurl: require("../../assets/portrait/ruichen.jpeg"), 
    },
  ];

  // const renderPeople = () => {
  //   return (
  //     <ul>
  //       {people.map((data) => (
  //         <li className="people-content" key={data.id}>
  //           <a href={data.link}>{data.name}</a>
  //           <br />
  //           <img
  //             src={data.imgurl}
  //             alt="No Image"
  //             width="100"
  //             height="120"
  //           ></img>
  //           <p className="people-title">{data.title}</p>
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // };

  const renderPeople = () => {
    return (
      <div className="people-grid">
        {people.map((data, index) => (
          <div className="person-card" key={index}>
            <img src={data.imgurl} alt={data.name} className="person-image" />
            <div className="person-info">
              <a href={data.link} target="_blank" rel="noopener noreferrer" className="person-name">
                {data.name}
              </a>
              <p className="person-title">{data.title}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="people-container screen-container" id={props.id || ""}>
      <div className="people-parent">
        <ScreenHeading title={"People"} subHeading={""} />
        {renderPeople()}
      </div>
    </div>
  );
  
}
