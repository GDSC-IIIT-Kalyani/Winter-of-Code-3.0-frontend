import React from "react"
import './sponsor.css'
import sponsorsData from './sponsorData';
import background from '../../assets/sponsors-bg-image.png';

const Sponsor = () => {
    return (
        <section id='sponsors'>
            <div><img className="background" src={background} alt="background"></img></div>
            <h2 className="header">PAST SPONSORS</h2>
            <div className="sponsorsGrid">

                <div className="diamond-sponsors">
                    <h5>DIAMOND-SPONSORS</h5>
                    <div className="sponsor-icon-container">
                        {sponsorsData.diamond.map((sIcon, k) => {
                            return (
                                <img className="sponsor-icon" src={sIcon.image} alt={sIcon.title} />
                            );
                        })}
                    </div>
                </div>

                <div className="platinum-sponsors">
                    <h5>PLATINUM SPONSORS</h5>
                    <div className="sponsor-icon-container">
                        {sponsorsData.platinum.map((sIcon, k) => {
                            return (
                                <img className="sponsor-icon" src={sIcon.image} alt={sIcon.title} />
                            );
                        })}
                    </div>
                </div>

                <div className="gold-sponsors">
                    <h5>GOLD SPONSORS</h5>
                    <div className="sponsor-icon-container">
                        {sponsorsData.gold.map((sIcon, k) => {
                            return (
                                <img className="sponsor-icon" src={sIcon.image} alt={sIcon.title} />
                            );
                        })}
                    </div>
                </div>

                <div className="silver-sponsors">
                    <h5>SILVER SPONSORS</h5>
                    <div className="sponsor-icon-container">
                        {sponsorsData.silver.map((sIcon, k) => {
                            return (
                                <img className="sponsor-icon" src={sIcon.image} alt={sIcon.title} />
                            );
                        })}
                    </div>
                </div>

                <div className="ivory-sponsors">
                    <h5>IVORY SPONSORS</h5>
                    <div className="sponsor-icon-container">
                        {sponsorsData.ivory.map((sIcon, k) => {
                            return (
                                <img className="sponsor-icon" src={sIcon.image} alt={sIcon.title} />
                            );
                        })}
                    </div>
                </div>

                <div className="media-sponsors">
                    <h5>MEDIA SPONSORS</h5>
                    <div className="sponsor-icon-container">
                        {sponsorsData.media.map((sIcon, k) => {
                            return (
                                <img className="sponsor-icon" src={sIcon.image} alt={sIcon.title} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Sponsor
