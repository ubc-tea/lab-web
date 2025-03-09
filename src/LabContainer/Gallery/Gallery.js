import React, { useEffect, useState } from "react";
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

    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const circle = document.querySelector(".rotating-circle");
        if (circle) {
            circle.style.animationPlayState = isPaused ? "paused" : "running";
        }
    }, [isPaused]);

    return (
        <div className="gal-parent" id={props.id || ""}>
            <ScreenHeading title={"Gallery of TEA Group"} subHeading={""} />

            <div className="rotating-gallery-container">
                <div 
                    className="rotating-circle" 
                    onMouseEnter={() => setIsPaused(true)} 
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {images.map((src, index) => (
                        <div key={index} className="rotating-image" style={{ backgroundImage: `url(${src})` }}></div>
                    ))}
                </div>
            </div>

            <div className="gallery-footer-space"></div>
        </div>
    );
}
