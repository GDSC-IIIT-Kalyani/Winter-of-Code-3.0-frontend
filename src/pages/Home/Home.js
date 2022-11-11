import React from "react";
import Timeline from "../../components/timeline/timeline";
import About from "../../components/about/about.js";
import Organisations from "../../components/organisations/organisations";
import Projects from "../../components/projects/projects.js"
// import background from "./assets/background.jpg";
import Sponsor from "../../components/sponsors/sponsor.js";
import Footer from "../../components/footer/footer";
import Faq from "../../components/faq/faq";
import WelcomePage from "../welcomePage/welcomePage";
// import Test from '../test/Test';

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
