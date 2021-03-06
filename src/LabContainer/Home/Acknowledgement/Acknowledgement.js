import React from "react";
import "./Acknowledgement.css"

export default function Acknowledgement() {
    return (
        <div className="ack-parent">
            <div className="ack-title">Acknowledgement</div>
            <div class="row">
                <div class="column">
                    <img src={require("../../../assets/Home/nserc.png")} width="190" height="90" />
                </div>
                <div class="column">
                    <img src={require("../../../assets/Home/compute_canada.png")} width="190" height="110" />
                </div>
                <div class="column">
                    <img src={require("../../../assets/Home/cifar.png")} width="100" height="100" />
                </div>
                <div class="column">
                    <img src={require("../../../assets/Home/nvidia.png")} width="220" height="100" />
                </div>
                <div class="column">
                    <img src={require("../../../assets/Home/roche.png")} width="180" height="110" />
                </div>
                <div class="column">
                    <img src={require("../../../assets/Home/azure.png")} width="200" height="100" />
                </div>
                <div class="column">
                    <img src={require("../../../assets/Home/meta.png")} width="200" height="100" />
                </div>

            </div>
        </div>
    )
}