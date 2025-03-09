import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./Gallery.css";

export default function Gallery(props) {
    return (
        <div className="gal-parent" id={props.id || ""}>
            <ScreenHeading title={"Gallery of TEA Group"} subHeading={""} />

            <div className="gallery-container">
                <div id="galleryCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval="5000">
                    <ol className="carousel-indicators">
                        <li data-target="#galleryCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#galleryCarousel" data-slide-to="1"></li>
                        <li data-target="#galleryCarousel" data-slide-to="2"></li>
                        <li data-target="#galleryCarousel" data-slide-to="3"></li>
                        <li data-target="#galleryCarousel" data-slide-to="4"></li>
                        <li data-target="#galleryCarousel" data-slide-to="5"></li>
                        <li data-target="#galleryCarousel" data-slide-to="6"></li>
                    </ol>

                    <div className="carousel-inner">
                        {[
                            "../../assets/Home/group_small.png",
                            "../../assets/Home/group2.jpg",
                            "../../assets/Home/cvpr2023.jpg",
                            "../../assets/Home/tea_group2.jpg",
                            "../../assets/Home/tea_group1.jpg",
                            "../../assets/Home/miccai2023-2.jpg",
                            "../../assets/Home/bestflfm_www2024.jpg"
                        ].map((image, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                <img className="d-block gallery-img" src={require(image)} alt={`Slide ${index + 1}`} />
                            </div>
                        ))}
                    </div>

                    <a className="carousel-control-prev" href="#galleryCarousel" role="button" data-slide="prev">
                        <img width="40" height="40" src={require("../../assets/Home/left.png")} alt="Previous" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#galleryCarousel" role="button" data-slide="next">
                        <img width="40" height="40" src={require("../../assets/Home/right.png")} alt="Next" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
