import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./Gallery.css"

export default function Gallery(props) {
    return (
        <div className="gal-parent" id={props.id || ""}>
            <ScreenHeading title={"Gallery of TEA Group"} subHeading={""} />
            <div class="gal-container">
                <div>
                    <img src={require("../../assets/Home/group.JPG")} width="300" height="200" class="items" />
                </div>
                <div>
                    <img src={require("../../assets/Home/tea_group2.jpg")} width="300" height="200" class="items" />
                </div>
                <div>
                    <img src={require("../../assets/Home/tea_group1.jpg")} width="300" height="200" class="items" />
                </div>                
            </div>
        </div>
    )
}