import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./Gallery.css"

export default function Gallery(props) {
    return (
        <div className="gal-parent" id={props.id || ""}>
            <ScreenHeading title={"Gallery of TEA Group"} subHeading={""} />
            <div class="window">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img class="d-block w-100 galStyle" src={require("../../assets/Home/group_small.png")} alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100 galStyle" src={require("../../assets/Home/cvpr2023.jpg")} alt="Third slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100 galStyle" src={require("../../assets/Home/tea_group1.jpg")} alt="Fifth slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100 galStyle" src={require("../../assets/Home/icml.png")} alt="Fifth slide"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <img width="32" height="32" src={require("../../assets/Home/left.png")} />
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <img width="32" height="32" src={require("../../assets/Home/right.png")} />
                    <span class="sr-only">Next</span>
                </a>
                </div>
            </div>
        </div>
    )
}




{/* <div className="gal-parent" id={props.id || ""}>
            <ScreenHeading title={"Gallery of TEA Group"} subHeading={""} />
            <div class="gal-container">
                <div>
                    <img src={require("../../assets/Home/group.JPG")} width="300" height="200" class="items" />
                </div>
                <div>
                    <img src={require("../../assets/Home/group2.jpg")} width="300" height="200" class="items" />
                </div>
                <div>
                    <img src={require("../../assets/Home/cvpr2023.jpg")} width="300" height="200" class="items" />
                </div> 
                <div>
                    <img src={require("../../assets/Home/tea_group2.jpg")} width="300" height="200" class="items" />
                </div>
                <div>
                    <img src={require("../../assets/Home/tea_group1.jpg")} width="300" height="200" class="items" />
                </div>                 
            </div>
        </div> */}