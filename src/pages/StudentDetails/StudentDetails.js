import React, { useState } from "react";
import "./StudentDetails.css";
import { signInWithGoogle } from "../Login/Login";

const StudentDetails = () => {
  const [studentData, setStudentData] = useState({
    name: "",
    email: "",
    phone: "",
    github: "",
    linkedIn: "",
    twitter: "",
    portfolio: "",
    openSourceWork: "",
    role: "",
    question1: "",
    question2: "",
  });

  const handleInputChange = (event) => {
    setStudentData({
      ...studentData,
      [event.target.name]: event.target.value,
    });
  };

  const handleStudentDetails = (event) => {
    event.preventDefault();
    console.log(studentData);
  };

    // const [user, setUser] = useState(null);

  if (sessionStorage.getItem("name")) {
      return (
        <div>
          {/* <header className="form_header">
            <h1 className="form_h1">REGISTRATION FORM</h1>
          </header> */}
          
          <div id="form">
            <div className="hx">
              <h1>REGISTRATION FORM</h1>
              <div ><img className="sd-avatar" src={sessionStorage.getItem("profilePic")} alt="profilePic" /></div>
            </div>
            {/* <div>
                <button class="login-with-google-btn" onClick={signInWithGoogle}>Sign In with Google</button>
            </div> */}
            <div className="fish" id="fish"></div>
            <div className="fish" id="fish2"></div>
            <div className="fish" id="fish3"></div>
            <form id="waterform">
              <div class="formgroup" id="name-form">
                <label for="name">Your name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  value={studentData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formgroup" id="email-form">
                <label for="email">Your e-mail*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your e-mail"
                  required
                  value={studentData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formgroup" id="phone-form">
                <label for="phone">Your phone number*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                  required
                  value={studentData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formgroup" id="github-form">
                <label for="github">Your github profile link*</label>
                <input
                  type="text"
                  id="github"
                  name="github"
                  placeholder="Your github profile link"
                  value={studentData.github}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formgroup" id="linkedin-form">
                <label for="linkedin">Your LinkedIn profile link</label>
                <input
                  type="text"
                  id="linkedin"
                  name="linkedIn"
                  placeholder="Your LinkedIn profile link"
                  value={studentData.linkedIn}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formgroup" id="twitter-form">
                <label for="twitter">Your twitter profile link</label>
                <input
                  type="text"
                  id="twitter"
                  name="twitter"
                  placeholder="Yout twitter profile link"
                  value={studentData.twitter}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formgroup" id="portfolio-form">
                <label for="portfolio">Your portfolio profile link</label>
                <input
                  type="text"
                  id="portfolio"
                  name="portfolio"
                  placeholder="Your portfolio profile link"
                  value={studentData.portfolio}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formgroup" id="others-form">
                <label for="others">Prev open source contribution link</label>
                <input
                  type="text"
                  id="others"
                  name="openSourceWork"
                  placeholder="Open source contributions link"
                  value={studentData.openSourceWork}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formgroup" id="question1-form">
                <label for="question1">Question1 *</label>
                <textarea
                  type="textarea"
                  id="question1"
                  name="question1"
                  placeholder="write your answer in not more than 200 words"
                  value={studentData.question1}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formgroup" id="question2-form">
                <label for="question2">Question2 *</label>
                <textarea
                  type="textarea"
                  id="question2"
                  name="question2"
                  placeholder="write your answer in not more than 200 words"
                  value={studentData.question2}
                  onChange={handleInputChange}
                />
              </div>
              <input
                type="submit"
                value="Submit details!"
                onClick={handleStudentDetails}
              ></input>
            </form>
          </div>
        </div>
      );
  } else {
    return (
      <div>
          {/* <header className="form_header">
            <h1 className="form_h1">REGISTRATION FORM</h1>
          </header> */}
          
          <div id="form">
            <div className="hx">
              <h1>REGISTRATION FORM</h1>
            </div>
            <div>
                <button class="login-with-google-btn" onClick={signInWithGoogle}>Sign In with Google</button>
            </div>
            <div className="fish" id="fish"></div>
            <div className="fish" id="fish2"></div>
            <div className="fish" id="fish3"></div>
            
          </div>
        </div>
    );
  }
};
export default StudentDetails;