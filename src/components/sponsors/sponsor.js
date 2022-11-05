import React from "react"
import './sponsor.css'
import image from '../../assets/150.png';
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
                        <img className="sponsor-icon" src={image} alt="background"></img>
                        <img className="sponsor-icon" src={image} alt="background"></img>
                        <img className="sponsor-icon" src={image} alt="background"></img>
                        <img className="sponsor-icon" src={image} alt="background"></img>
                    </div>
                </div>

                <div className="platinum-sponsors">
                    <h5>PLATINUM SPONSORS</h5>
                    <div className="sponsor-icon-container">
                        <img className="sponsor-icon" src={image} alt="background"></img>
                        <img className="sponsor-icon" src={image} alt="background"></img>
                        <img className="sponsor-icon" src={image} alt="background"></img>
                        <img className="sponsor-icon" src={image} alt="background"></img>
                    </div>
                </div>

                <div className="gold-sponsors">
                    <h5>GOLD SPONSORS</h5>
                    <div className="sponsor-icon-container">
                        <img className="sponsor-icon" src={image} alt="background"></img>
                        <img className="sponsor-icon" src={image} alt="background"></img>
                        <img className="sponsor-icon" src={image} alt="background"></img>
                        <img className="sponsor-icon" src={image} alt="background"></img>
                    </div>
                </div>

                <div className="silver-sponsors">
                    <h5>SILVER SPONSORS</h5>
                    <div className="sponsor-icon-container">
                        <img className="sponsor-icon" src={image} alt="background"></img>
                        <img className="sponsor-icon" src={image} alt="background"></img>
                        <img className="sponsor-icon" src={image} alt="background"></img>
                        <img className="sponsor-icon" src={image} alt="background"></img>
                    </div>
                </div>

                <div className="ivory-sponsors">
                    <h5>IVORY SPONSORS</h5>
                    <div className="sponsor-icon-container">
                        <img className="sponsor-icon" src={image} alt="background"></img>
                        <img className="sponsor-icon" src={image} alt="background"></img>
                        <img className="sponsor-icon" src={image} alt="background"></img>
                        <img className="sponsor-icon" src={image} alt="background"></img>
                    </div>
                </div>

                <div className="media-sponsors">
                    <h5>MEDIA SPONSORS</h5>
                    <div className="sponsor-icon-container">
                        <img className="sponsor-icon" src={image} alt="background"></img>
                        <img className="sponsor-icon" src={image} alt="background"></img>
                        <img className="sponsor-icon" src={image} alt="background"></img>
                        <img className="sponsor-icon" src={image} alt="background"></img>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Sponsor
