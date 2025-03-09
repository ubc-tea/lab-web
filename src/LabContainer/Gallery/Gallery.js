import React, { useState, useEffect } from "react";
import ColorThief from "colorthief";
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

    const [dominantColors, setDominantColors] = useState([]);

    useEffect(() => {
        const getColors = async () => {
            const colorThief = new ColorThief();
            const colors = await Promise.all(
                images.map((src) => {
                    return new Promise((resolve) => {
                        const img = new Image();
                        img.crossOrigin = "Anonymous";
                        img.src = src;
                        img.onload = () => {
                            const color = colorThief.getColor(img);
                            resolve(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);
                        };
                    });
                })
            );
            setDominantColors(colors);
        };

        getColors();
    }, [images]);

    return (
        <div className="gal-parent" id={props.id || ""}>
            <ScreenHeading title={"Gallery of TEA Group"} subHeading={""} />

            <div className="gallery-container">
                <div id="galleryCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval="5000">
                    <ol className="carousel-indicators">
                        {images.map((_, index) => (
                            <li key={index} data-target="#galleryCarousel" data-slide-to={index} className={index === 0 ? "active" : ""}></li>
                        ))}
                    </ol>

                    <div className="carousel-inner">
                        {images.map((src, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                <div className="carousel-image-wrapper" style={{ backgroundColor: dominantColors[index] || "#f0f0f0" }}>
                                    <img className="d-block gallery-img" src={src} alt={`Gallery image ${index + 1}`} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <a className="carousel-control-prev" href="#galleryCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#galleryCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>

            <div className="gallery-footer-space"></div>
        </div>
    );
}
