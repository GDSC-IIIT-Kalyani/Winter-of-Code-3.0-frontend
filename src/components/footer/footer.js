import React from "react";
import "./footer.css";
import {
  BsTwitter,
  BsInstagram,
  BsYoutube,
  BsLinkedin,
  BsCode,
  BsGithub
} from "react-icons/bs";
const Footer = () => {
  return (
      <div id="footer">
        <div className="footer-content">
          <h3>WOC 3.0</h3>
          <p2>Brought to you by</p2>
          <h2>GOOGLE DEVELOPER STUDENT CLUB IIIT KALYANI</h2>
          <ul class="socials">
            <li>
              <a href="https://gdsc.community.dev/indian-institute-of-information-technology-kalyani/">
                <BsCode size={26}/>
              </a>
            </li>
            <li>
              <a href="https://mobile.twitter.com/gdsciiitkalyani">
                <BsTwitter size={26}/>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCvRPKamvUtnQhij5y1MF11A">
                <BsYoutube size={26}/>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/gdsciiitkalyani/">
                <BsInstagram size={26}/>
              </a>
              </li>
            <li>
                <a href="https://github.com/GDSC-IIIT-Kalyani">
                <BsGithub size={26}/>
              </a>
            </li>
            <li>
              <a href="https://in.linkedin.com/company/gdsc-iiit-kalyani">
                <BsLinkedin size={26} />
              </a>
            </li>
            
          </ul>
          <p2>© GDSC IIIT Kalyani 2022-2023</p2>
        </div>
      </div>
  );
};

export default Footer;
