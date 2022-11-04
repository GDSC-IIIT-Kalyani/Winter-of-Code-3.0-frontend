import React from "react";
import "./footer.css";
import {BsTwitter,BsInstagram,BsYoutube,BsLinkedin, BsCode} from "react-icons/bs"
const Footer = () => {
    return (
        <div>
          <div id="footer">
            <div class="footer-content">
                <h3>WOC 3.0</h3>
                <p2>Brought to you by</p2>
                <h2>GOOGLE STUDENT DEVELOPER CLUB IIIT KALYANI</h2>
                <ul class="socials">
                
                    <li>
                        <a href="https://gdsc.community.dev/indian-institute-of-information-technology-kalyani/"><BsCode/></a>
                    </li>
                    <li>
                        <a href="https://mobile.twitter.com/gdsciiitkalyani"><BsTwitter/></a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCvRPKamvUtnQhij5y1MF11A"><BsYoutube/></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/gdsciiitkalyani/"><BsInstagram/></a>
                    </li>
                    <li><a href="https://in.linkedin.com/company/gdsc-iiit-kalyani"><BsLinkedin/></a></li>

                </ul>
            </div>
            </div>
        </div>
    )
}

export default Footer;