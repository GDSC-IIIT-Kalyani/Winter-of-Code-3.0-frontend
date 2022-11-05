import React from "react";
import "./organisations.css";
import whale from "../../assets/fish.png";
import whale_bg from "../../assets/fish-bg-leaves.png";
import background from "../../assets/bg images/WOC_LIS_04.gif";
import images from "./images.js";

const Organisations = () => {
    return (
        <section id="organisations">
            <img className="organisations-background" src={background} alt="background"></img>
            <div className="organisations-content">
                <div className="orgs-flex">
                    <div className="orgs-left">
                        <h2 className="orgs-header">ORGANISATIONS</h2>
                        <div className="orgs-image-container">

                            <div className="orgs-image-rows row-stretch">
                                <img className="org-image" src={images["abc"]} alt="ABC organization logo"></img>
                                <img className="org-image" src={images["autodl"]} alt="Auto-DL logo"></img>
                                <img className="org-image" src={images["hoppscotch"]} alt="Hoppscotch logo"></img>
                            </div>

                            <div className="orgs-image-rows row-stagger">
                                <img className="org-image" src={images["gitAInit"]} alt="Git init logo"></img>
                                <img className="org-image" src={images["llvm"]} alt="LLVM logo"></img>
                                <img className="org-image" src={images["codeDigger"]} alt="Code Digger logo"></img>
                            </div>

                            <div className="orgs-image-rows row-stretch">
                                <img className="org-image" src={images["laayak"]} alt="Laayak logo"></img>
                                <img className="org-image" src={images["gdsc"]} alt="GDSC logo"></img>
                                <img className="org-image" src={images["dezenix"]} alt="Dezenix logo"></img>
                            </div>

                            <div className="orgs-image-rows row-stagger">
                                <img className="org-image" src={images["mojaGlobal"]} alt="Moja Global logo"></img>
                                <img className="org-image" src={images["asyncAPI"]} alt="Async API logo"></img>
                            </div>
                        </div>
                    </div>

                    <div className="orgs-right">
                        <img className="orgs-whale-bg" src={whale_bg} alt="whale-background"></img>
                        <img className="orgs-whale" src={whale} alt="whale"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Organisations;
