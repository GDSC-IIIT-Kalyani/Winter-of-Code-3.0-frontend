import React from "react";
import Timeline from "../../components/timeline/timeline";
import Organisations from "../../components/organisations/organisations";
import Projects from "../../components/projects/project.js"
import Sponsor from "../../components/sponsors/sponsor.js";
import Footer from "../../components/footer/footer";
import Faq from "../../components/faq/faq";
import WelcomePage from "../welcomePage/welcomePage";
import "../../components/about/about.css";

export default function Home() {
  return (
    <div className="Home">
      <WelcomePage />
      <Timeline />
      <Organisations />
      <Projects />
      <Sponsor />
      <Faq />
      <Footer />
    </div>
  );
}
