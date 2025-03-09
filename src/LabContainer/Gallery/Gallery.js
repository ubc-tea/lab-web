import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./Gallery.css";

export default function Gallery(props) {
    const images = [
        require("../../assets/Home/group_small.png"),
        require("../../assets/Home/group2.jpg"),
        require("../../assets/Home/cvpr2023.jpg"),
        require("../../assets/Home/tea_group2.jpg"),
        require("../../assets/Home/tea_group1.jpg"),
        require("../../assets/Home/miccai2023-2.jpg"),
        require("../../assets/Home/bestflfm_www2024.jpg")
    ];

    return (
        <div className="gal-parent" id={props.id || ""}>
            <ScreenHeading title={"Gallery of TEA Group"} subHeading={""} />

            <div className="scroll-gallery-container">
                <div className="scroll-gallery">
                    {[...images, ...images].map((src, index) => (
                        <img key={index} src={src} alt={`Gallery image ${index + 1}`} />
                    ))}
                </div>
            </div>

            <div className="gallery-footer-space"></div>
        </div>
    );
}
