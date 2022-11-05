import React from "react";
import Timeline from "../../components/timeline/timeline";
import About from "../../components/about/about.js";
import Organisations from "../../components/organisations/organisations";
// import background from "./assets/background.jpg";
import Sponsor from "../../components/sponsors/sponsor.js";
import Footer from "../../components/footer/footer";
import Faq from "../../components/faq/faq";
import WelcomePage from "../../components/welcomePage/welcomePage";

export default function Home() {
  return (
    <div className="Home">
      <WelcomePage />
      <About />
      <Timeline />
      <Organisations />
      <Sponsor />
      <Faq />
      <Footer />
    </div>
  );
}
