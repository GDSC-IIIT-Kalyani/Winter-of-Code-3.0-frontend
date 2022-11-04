import React from "react";
import "./organisations.css"
import whale from "../../assets/fish.png"
import whale_bg from "../../assets/fish-bg-leaves.png"
import images from "./images.js"

const Organisations = () => {
    return (
        <section id="organisations">
            <div className="orgs-flex">
                <div className="orgs-left">
                    <h2 className="orgs-header">ORGANISATIONS</h2>
                    <ul className="orgs-image-container">
                        <div className="orgs-image-rows row-stretch">
                            <li>
                                <img className="org-image" src={images["abc"]} alt=""></img>
                            </li>
                            <li>
                                <img className="org-image" src={images["autodl"]} alt=""></img>
                            </li>
                            <li>
                                <img className="org-image" src={images["hoppscotch"]} alt=""></img>
                            </li>
                        </div>
                        <div className="orgs-image-rows row-stagger">
                            <li>
                                <img className="org-image" src={images["gitAInit"]} alt=""></img>
                            </li>
                            <li>
                                <img className="org-image" src={images["llvm"]} alt=""></img>
                            </li>
                            <li>
                                <img className="org-image" src={images["codeDigger"]} alt=""></img>
                            </li>
                        </div>
                        <div className="orgs-image-rows row-stretch">
                            <li>
                                <img className="org-image" src={images["laayak"]} alt=""></img>
                            </li>
                            <li>
                                <img className="org-image" src={images["gdsc"]} alt=""></img>
                            </li>
                            <li>
                                <img className="org-image" src={images["dezenix"]} alt=""></img>
                            </li>
                            </div>
                            <div className="orgs-image-rows row-stagger">
                            <li>
                                <img className="org-image" src={images["mojaGlobal"]} alt=""></img>
                            </li>
                            <li>
                                <img className="org-image" src={images["asyncAPI"]} alt=""></img>
                            </li>
                        </div>
                    </ul>
                </div>
                <div className="orgs-right">
                    <img className="orgs-whale-bg" src={whale_bg} alt="orgs-whale-background"></img>
                    <img className="orgs-whale" src={whale} alt="orgs-whale"></img>
                </div>
            </div>
        </section>
    )
}

export default Organisations;