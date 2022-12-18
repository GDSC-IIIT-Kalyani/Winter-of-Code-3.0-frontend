import React, {useState, useEffect } from "react"
import "./community-partners.css"
import data from "./partners-data.js"

function ExpandOnClickContainer() {
    const [isExpanded, setIsExpanded] = useState(false);

    function toggle() {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="expandable-content">
            <button onClick={toggle} className="expand-button" style={isExpanded ? {top: '90%', backdropFilter: 'none', '-webkit-backdrop-filter': 'none'} : {}}>
                {isExpanded ? 'Collapse ⇑' : 'Expand ⇓'}
            </button>
            { isExpanded ? (
                <div className="partners-grid">
                <a href="https://gdsc.community.dev/indian-institute-of-technology-bhubaneswar/" target={"_blank"} rel="noopener noreferrer">
                    <img src={data["bbs"]} alt="IIT Bhubhaneswar" className="partner-logo" />
                </a>
                <a href="https://gdsc.community.dev/jabalpur-engineering-college-jabalpur/" target={"_blank"} rel="noopener noreferrer">
                    <img src={data["jabalpur"]} alt="Jabalpur Engineering College" className="partner-logo" />
                </a>
                <a href="https://gdsc.community.dev/jaipur-engineering-college-research-centre-jaipur/" target={"_blank"} rel="noopener noreferrer">
                    <img src={data["jaipur"]} alt="Jaipur Engineering college and research centre" className="partner-logo" />
                </a>
                <a href="https://gdsc.community.dev/p-p-savani-university-surat/" target={"_blank"} rel="noopener noreferrer">
                    <img src={data["pps"]} alt="PP Savani University" className="partner-logo" />
                </a>
                <a href="https://gdsc.community.dev/shaheed-rajguru-college-of-applied-sciences-for-women-delhi/" target={"_blank"} rel="noopener noreferrer">
                    <img src={data["sr"]} alt="Shaheed Rajguru College of Applied Sciences for Women" className="partner-logo" />
                </a>
                <a href="https://gdsc.community.dev/shri-govindram-seksaria-institute-of-technology-and-science-indore/" target={"_blank"} rel="noopener noreferrer">
                    <img src={data["sgsits"]} alt="Shri Govindram Seksaria Institute of Technology and Science, Indore" className="partner-logo" />
                </a>
                <a href="https://gdsc.community.dev/srm-university/" target={"_blank"} rel="noopener noreferrer">
                    <img src={data["srm"]} alt="SRM University Sonepat" className="partner-logo" />
                </a>
                <a href="https://gdsc.community.dev/guru-tegh-bahadur-institute-of-technology-delhi/" target={"_blank"} rel="noopener noreferrer">
                    <img src={data["gtbit"]} alt="Guru Tegh Bahadur Institute of Technology" className="partner-logo" />
                </a>
                <a href="https://gdsc.community.dev/s-n-patel-institute-of-technology-research-bardoli/" target={"_blank"} rel="noopener noreferrer">
                    <img src={data["snpit"]} alt="S.N. Patel Institute of Technology" className="partner-logo" />
                </a>
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
                <a href="https://gdsc.community.dev/guru-nanak-dev-university-amritsar/" target={"_blank"} rel="noopener noreferrer">
                    <img src={data["gnd"]} alt="Guru Nanak Dev University" className="partner-logo" />
                </a>
                <a href="https://jamiagdsc.github.io/" target={"_blank"} rel="noopener noreferrer">
                    <img src={data["jmi"]} alt="Jamia Millia Islamia" className="partner-logo" />
                </a>
                <a href="https://gdsc.community.dev/abes-institute-of-technology-ghaziabad/" target={"_blank"} rel="noopener noreferrer">
                    <img src={data["abesit"]} alt="ABES Institute of Technology, Ghaziabad" className="partner-logo" />
                </a>
                <a href="https://gdsc.community.dev/bharati-vidyapeeths-college-of-engineering-delhi/" target={"_blank"} rel="noopener noreferrer">
                    <img src={data["bharti"]} alt="Bharti Vidyapeeth's College of Engineering" className="partner-logo" />
                </a>
                <a href="https://gdsc.community.dev/mkssss-cummins-college-of-engineering-for-women-pune/" target={"_blank"} rel="noopener noreferrer">
                    <img src={data["cummins"]} alt="Cummins College of Engineering" className="partner-logo" />
                </a>
                <a href="https://gdsc.community.dev/gla-university-mathura/" target={"_blank"} rel="noopener noreferrer">
                    <img src={data["gla"]} alt="GLA University" className="partner-logo" />
                </a>
            </div>
            <ExpandOnClickContainer />
        </section>
    )
}

export default Community_Partners;