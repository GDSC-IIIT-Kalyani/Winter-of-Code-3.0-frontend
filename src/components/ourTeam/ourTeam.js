import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ourTeam.css";
import background from "../../assets/bg images/WOC_LIS_08.gif";

const OurTeam = () => {
    const[isOpen, setisOpen] = useState(false);

    const showCards = () => setisOpen(!isOpen);

  return (
    <div id="ourTeam">
      <img className="ourTeam-background" src={background} alt="background" />
       <div className="ourTeam-header"> OUR TEAM </div>
      <div className="ourTeam-cards">
        <motion.div className="card design" layout transition={{ layout: { duration: 1.5, type: "spring" }}} onClick={showCards}>
            <motion.h2 layout="position" className="card-heading">DESIGN</motion.h2>
            {isOpen && (
            <motion.div className="contributors">
                <h3>bleh</h3>
            </motion.div>
            )}
        </motion.div>

        <motion.div className="card webDev" layout transition={{ layout: { duration: 1.5, type: "spring" }}} onClick={showCards}>
            <motion.h2 layout="position" className="card-heading">WEB DEV</motion.h2>
            {isOpen && (
            <motion.div className="contributors">
                <h3>bleh</h3>
                <h3>bleh</h3>
                <h3>bleh</h3>
                <h3>bleh</h3>
                <h3>bleh</h3>
                <h3>bleh</h3>
            </motion.div>
            )}
        </motion.div>

        <motion.div className="card marketing" layout transition={{ layout: { duration: 1.5, type: "spring" }}} onClick={showCards}>
            <motion.h2 layout="position" className="card-heading">MARKETING</motion.h2>
            {isOpen && (
            <motion.div className="contributors">
                <h3>bleh</h3>
                <h3>bleh</h3>
                <h3>bleh</h3>
                <h3>bleh</h3>
            </motion.div>
            )}
        </motion.div>

        <motion.div className="card media" layout transition={{ layout: { duration: 1.5, type: "spring" }}} onClick={showCards}>
            <motion.h2 layout="position" className="card-heading">MEDIA AND SPONSERS</motion.h2>
            {isOpen && (
            <motion.div className="contributors">
                <h3>bleh</h3>
                <h3>bleh</h3>
                <h3>bleh</h3>
            </motion.div>
            )}
        </motion.div>
      </div>
    </div>
  );
};

export default OurTeam;
