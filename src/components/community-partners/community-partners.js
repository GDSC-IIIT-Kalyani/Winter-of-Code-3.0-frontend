import React, { useState, useEffect } from "react"
import "./community-partners.css"
import data from "./partners-data.js"

function ExpandOnClickContainer() {
    const [isExpanded, setIsExpanded] = useState(false);

    function toggle() {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="expandable-content">
            <button onClick={toggle} className={isExpanded ? "collapse-button" : "expand-button"}>
                {isExpanded ? 'Collapse ⇑' : 'Expand ⇓'}
            </button>
            {isExpanded ? (
                <div className="partners-grid">
                    {data.map((partner,id) => {
                    return (id>=(5+window.innerWidth/300))?
                     <img src={partner} alt="partner's logof" className="partner-logo" />:<></>
                }) }
            </div> 
            ) : null }
        </div>
    )
}

const Community_Partners = () => {

    useEffect(() => {
        const faqHeading = document.querySelector(".community-partners-header");
        const faqHeadingOptions = {
            root: null,
            threshold: 0.5,
        };
        const faqHeadingObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    faqHeading.classList.add("community-partners-header-active");
                }
            });
        }, faqHeadingOptions);
        faqHeadingObserver.observe(faqHeading);


    }, []);

    return (
        <section id="community-partners">
            <div className="community-partners-header">
                Community Partners
            </div>
            <div className="partners-grid">
                {data.map((partner,id) => {
                   return (id<(5+window.innerWidth/300))?
                     <img src={partner} alt="partner's logo" className="partner-logo" />:<></>
                }) }
            </div>
            <ExpandOnClickContainer />
        </section>
    )
}

export default Community_Partners;