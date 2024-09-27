import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./People.css";

export default function Previous(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const people = [
    {
      name: "Sana Ayromlou",
      title: "MSc (2021 - 2023), now Associate ML Specialist at Vector Institute",
      link: "https://www.linkedin.com/in/sana-ayromlou/",
      imgurl: require("../../assets/portrait/sana.jpg"),
    },
    {
      name: "Fatemeh Taheri Dezaki",
      title: "Postdoc, now Machine Learning Scientist at Amazon ",
      link: "www.google.com",
      imgurl: require("../../assets/portrait/avatar1.jpg"),
    },
    {
      name: "Nan Wang",
      title: "Visiting Student",
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
    {
      name: "Justin Yang",
      title: "MSc (2022 - 2024), now at Vector Institute",
      link: "https://freddieneverleft.github.io/",
      imgurl: require("../../assets/portrait/justin.jpeg"),
    },
    {
      name: "Ailar Mahdizadeh",
      title: "MSc (2022 - 2024), now PhD student at UBC",
      link: "www.google.com",
      imgurl: require("../../assets/portrait/ailar.jpeg"),
    },
    {
      name: "SangMook Kim",
      title: "Postdoc(2023 - 2024), now Asst Prof. at CNU (Korea)",
      link: "https://scholar.google.com/citations?user=YjpFRuIAAAAJ&hl=ko",
      imgurl: require("../../assets/portrait/sam.jpeg"), 
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
      <div class="gallery-container">
        {people.map((data) => (
          <div class="responsive">
          <div class="gallery">
            <a target="_blank" href="img_forest.jpg">
              <img src={data.imgurl} alt="Forest" width="600" height="400" />
            </a>
            <a class="desc" href={data.link}>{data.name}</a>
            <div class="desc">{data.title}</div>
          </div>
        </div>
        ))}
      </div>
    );
  };

  return (
    <div className="people-container screen-container" id={props.id || ""}>
      <div className="people-parent">
        <ScreenHeading title={"Previous Members"} subHeading={""} />
      </div>
      <div className="gallery">{renderPeople()}</div>
      <div class="clearfix"></div>
    </div>
  );
  
  // return (
  //   <div>
  //     <div className="people-parent">
  //       <ScreenHeading title={"People"} subHeading={""} />
  //     </div>

  //     <div class="responsive">
  //       <div class="gallery">
  //         <a target="_blank" href="img_5terre.jpg">
  //           <img
  //             src="img_5terre.jpg"
  //             alt="Cinque Terre"
  //             width="600"
  //             height="400"
  //           />
  //         </a>
  //         <div class="desc">Add a description of the image here</div>
  //       </div>
  //     </div>

  //     <div class="responsive">
  //       <div class="gallery">
  //         <a target="_blank" href="img_forest.jpg">
  //           <img src="img_forest.jpg" alt="Forest" width="600" height="400" />
  //         </a>
  //         <div class="desc">Add a description of the image here</div>
  //       </div>
  //     </div>

  //     <div class="responsive">
  //       <div class="gallery">
  //         <a target="_blank" href="img_lights.jpg">
  //           <img
  //             src="img_lights.jpg"
  //             alt="Northern Lights"
  //             width="600"
  //             height="400"
  //           />
  //         </a>
  //         <div class="desc">Add a description of the image here</div>
  //       </div>
  //     </div>

  //     <div class="responsive">
  //       <div class="gallery">
  //         <a target="_blank" href="img_mountains.jpg">
  //           <img
  //             src="img_mountains.jpg"
  //             alt="Mountains"
  //             width="600"
  //             height="400"
  //           />
  //         </a>
  //         <div class="desc">Add a description of the image here</div>
  //       </div>
  //     </div>

  //     <div class="clearfix"></div>
  //   </div>
  // );
}
