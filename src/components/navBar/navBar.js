import React, { useState } from "react";

const NavBar = ({ navLinkColor }) => {
    return (
        <div className="header">
            <ul>
                <li>
                    <a href="/#About" style={{ color: navLinkColor }}>
                        About
                    </a>
                </li>
                <li>
                    <a href="/projects" style={{ color: navLinkColor }}>
                        Projects
                    </a>
                </li>
                <li>
                    <a href="/#timeline" style={{ color: navLinkColor }}>
                        Timeline
                    </a>
                </li>
                <li>
                    <a href="/#sponsors" style={{ color: navLinkColor }}>
                        Sponsors
                    </a>
                </li>
                <li>
                    <a href="/#our-team" style={{ color: navLinkColor }}>
                        Our Team
                    </a>
                </li>
            </ul>
        </div>

    )
}

export default NavBar;
