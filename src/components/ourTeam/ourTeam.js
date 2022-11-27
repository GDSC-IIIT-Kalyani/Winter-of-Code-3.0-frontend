import React from "react";
import { motion } from "framer-motion";
import "./ourTeam.css";
import background from "../../assets/bg images/WOC_LIS_08.gif";
import { duration, easing } from "@material-ui/core";

const OurTeam = () => {
  //     const[isOpen, setisOpen] = useState(false);
  //     const ref = useRef();
  //     ref.current = isOpen;

  //     useEffect(() => {
  //         const showCards = () => {
  //             const show = window.scrollY >= 2000;

  //             if (ref.current !== show) {
  //                 setisOpen(true)
  //             }
  //         }

  //         window.addEventListener('scroll', showCards);

  //     }, [])
  //     // const showCards = () => setisOpen(!isOpen);

  return (
    <div id="ourTeam">
      <img className="ourTeam-background" src={background} alt="background" />
      <div className="ourTeam-header"> OUR TEAM </div>
      <div className="ourTeam-cards">
        <div className="first-row">
          <motion.div
            className="card design"
            initial={{ x: -100 }}
            layout
            animate={{ x: 50 }}
            transition={{
              layout: { duration: 2.5, type: "spring" },
              delay: 0.5,
              x: { duration: 1 },
              default: { ease: "linear" },
            }}
          >
            <motion.h2 layout="position" className="card-heading desgn">
              DESIGN
            </motion.h2>

            <motion.div className="contributors">
              <h3>bleh</h3>
            </motion.div>
          </motion.div>

          <motion.div
            className="card webDev"
            initial={{ x: -100 }}
            layout
            animate={{ x: 50 }}
            transition={{
              layout: { duration: 2.5, type: "spring" },
              delay: 0.5,
              x: { duration: 1 },
              default: { ease: "linear" },
            }}
          >
            <motion.h2 layout="position" className="card-heading dev">
              WEB DEV
            </motion.h2>
            <motion.div className="contributors">
              <h3>bleh</h3>
              <h3>bleh</h3>
              <h3>bleh</h3>
              <h3>bleh</h3>
              <h3>bleh</h3>
              <h3>bleh</h3>
            </motion.div>
          </motion.div>
        </div>

        <div className="second-row">
          <motion.div
            className="card marketing"
            initial={{ x: -100 }}
            layout
            animate={{ x: 50 }}
            transition={{
              layout: { duration: 2.5, type: "spring" },
              delay: 0.5,
              x: { duration: 1 },
              default: { ease: "linear" },
            }}
          >
            <motion.h2 layout="position" className="card-heading market">
              MARKETING
            </motion.h2>
            <motion.div className="contributors">
              <h3>bleh</h3>
              <h3>bleh</h3>
              <h3>bleh</h3>
              <h3>bleh</h3>
            </motion.div>
          </motion.div>

          <motion.div
            className="card media"
            initial={{ x: -100 }}
            layout
            animate={{ x: 50 }}
            transition={{
              layout: { duration: 2.5, type: "spring" },
              delay: 0.5,
              x: { duration: 1 },
              default: { ease: "linear" },
            }}
          >
            <motion.h2 layout="position" className="card-heading sponser">
              MEDIA AND SPONSERS
            </motion.h2>
            <motion.div className="contributors">
              <h3>bleh</h3>
              <h3>bleh</h3>
              <h3>bleh</h3>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
