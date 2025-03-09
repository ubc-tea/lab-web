import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./Acknowledgement.css";

export default function Acknowledgement(props) {
    const sponsors = [
        { src: require("../../assets/Home/nserc.png"), alt: "NSERC" },
        { src: require("../../assets/Home/compute_canada.png"), alt: "Compute Canada" },
        { src: require("../../assets/Home/cifar.png"), alt: "CIFAR" },
        { src: require("../../assets/Home/nvidia.png"), alt: "NVIDIA" },
        { src: require("../../assets/Home/roche.png"), alt: "Roche" },
        { src: require("../../assets/Home/google.png"), alt: "Google" },
        { src: require("../../assets/Home/meta.png"), alt: "Meta" },
    ];

    return (
        <div className="ack-container" id={props.id || ""}>
            <ScreenHeading title={"Acknowledgement"} subHeading={""} />
            <div className="ack-logos">
                {sponsors.map((sponsor, index) => (
                    <div className="ack-item" key={index}>
                        <img src={sponsor.src} alt={sponsor.alt} className="ack-logo" />
                    </div>
                ))}
            </div>
        </div>
    );
}
