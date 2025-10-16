import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./People.css";

export default function People(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


  const people = [
    {
      name: "Dr. Xiaoxiao Li",
      title: "PI",
      link: "https://xxlya.github.io/",
      imgurl: require("../../assets/portrait/pokemon0.png"),
    },
    {
      name: "Wenlong Deng",
      title: "PhD (2022 - ), co-supervised with Dr. Christos Thrampoulidis at UBC ECE",
      link: "https://vengdeng.github.io",
      imgurl: require("../../assets/portrait/pokemon2.png"),
    },
     {
      name: "Beidi Zhao",
      title: "PhD (2022 -)",
      link: "https://scholar.google.com/citations?user=iWwKZf8AAAAJ&hl=en",
      imgurl: require("../../assets/portrait/pokemon5.png"),
    },
    {
      name: "Gexin Huang",
      title: "PhD (2023 - )",
      link: "https://scholar.google.com.tw/citations?user=Uh9kwTIAAAAJ&hl=zh-TW",
      imgurl: require("../../assets/portrait/pokemon12.png"),
    },
    {
      name: "Ruinan Jin",
      title: "PhD (2024 -)",
      link: "https://nanboy-ronan.github.io/Personal-Web/",
      imgurl: require("../../assets/portrait/pokemon8.png"),
    },
    {
      name: "Yanting Yang",
      title: "PhD (2024 - )",
      link: "www.google.com",
      imgurl: require("../../assets/portrait/pokemon4.png"), 
    },
    {
      name: "Chen Zhao",
      title: "PhD (2024 - )",
      link: "www.google.com",
      imgurl: require("../../assets/portrait/pokemon13.png"), 
    },
    {
      name: "Yushu Li",
      title: "PhD (2025 - )",
      link: "www.google.com",
      imgurl: require("../../assets/portrait/pokemon1.png"),
    },
    {
      name: "Xuanqi Zhang",
      title: "PhD (2025 -)",
      link: "www.google.com",
      imgurl: require("../../assets/portrait/pokemon3.png"),
    },
    {
      name: "Siyan Liu",
      title: "PhD (2025 -)",
      link: "www.google.com",
      imgurl: require("../../assets/portrait/pokemon6.png"),
    },
    {
      name: "Xinting Liao",
      title: "Postdoc (2025 -)",
      link: "www.google.com",
      imgurl: require("../../assets/portrait/pokemon7.png"),
    },
    {
      name: "Myeongkyun Kang",
      title: "Postdoc (2025 -)",
      link: "www.google.com",
      imgurl: require("../../assets/portrait/pokemon10.png"),
    },
    {
      name: "Haisheng Fu",
      title: "Postdoc (2025 -)",
      link: "www.google.com",
      imgurl: require("../../assets/portrait/pokemon14.jpg"),
    },
    {
      name: "Running Yang",
      title: "MASc (2025 -)",
      link: "www.google.com",
      imgurl: require("../../assets/portrait/pokemon16.jpg"),
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
