import React from "react";
import "./organisations.css"
import whale from "../../assets/WOC_LIS_whale.png"
import logo from "../../assets/org-logos/placeholder-logo.png"

const Organisations = () => {
    return (
        <div id="organisations">
            <div className="orgs-flex">
                <div className="orgs-left">
                    <div className="orgs-header">ORGANISATIONS</div>
                    <ul className="orgs-images">
                        <li>
                            <img src={logo} alt=""></img>
                        </li>
                        <li>
                            <img src={logo} alt=""></img>
                        </li>
                        <li>
                            <img src={logo} alt=""></img>
                        </li>
                        <li>
                            <img src={logo} alt=""></img>
                        </li>
                        <li>
                            <img src={logo} alt=""></img>
                        </li>
                        <li>
                            <img src={logo} alt=""></img>
                        </li>
                        <li>
                            <img src={logo} alt=""></img>
                        </li>
                        <li>
                            <img src={logo} alt=""></img>
                        </li>
                        <li>
                            <img src={logo} alt=""></img>
                        </li>
                    </ul>
                </div>
                <div className="orgs-right">
                    <img src={whale} alt="orgs whale"></img>
                </div>
            </div>
        </div>
    )
}

export default Organisations;