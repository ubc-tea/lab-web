import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./Gallery.css";

export default function Gallery(props) {
    const images = [
        { src: require("../../assets/Home/group_small.png"), title: "Group Photo" },
        { src: require("../../assets/Home/group2.jpg"), title: "Conference Photo" },
        { src: require("../../assets/Home/cvpr2023.jpg"), title: "CVPR 2023" },
        { src: require("../../assets/Home/tea_group2.jpg"), title: "Workshop Meeting" },
        { src: require("../../assets/Home/tea_group1.jpg"), title: "Outdoor Group Activity" },
        { src: require("../../assets/Home/miccai2023-2.jpg"), title: "MICCAI 2023" },
        { src: require("../../assets/Home/bestflfm_www2024.jpg"), title: "Best Paper Award" }
    ];

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
                        {images.map((image, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                <div className="carousel-image-wrapper">
                                    <img className="d-block gallery-img" src={image.src} alt={image.title} />
                                </div>
                                {/* <div className="carousel-caption">
                                    <h3>{image.title}</h3>
                                </div> */}
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
        </div>
    );
}
