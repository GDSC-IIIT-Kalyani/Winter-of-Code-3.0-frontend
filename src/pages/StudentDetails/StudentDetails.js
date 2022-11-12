import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./StudentDetails.css";
import { signInWithGoogle } from "../Login/Login";
import { addDoc, collection, getFirestore  } from "firebase/firestore"; 
import { ref } from 'firebase/database';

const StudentDetails = () => {
  // var form = document.getElementById("form");
  // function handleForm(event) { event.preventDefault(); } 
  // form.addEventListener('submit', handleForm);

  const [studentData, setStudentData] = useState({
    name: "",
    email: sessionStorage.getItem("email"),
    phone: "",
    github: "",
    linkedIn: "",
    twitter: "",
    portfolio: "",
    openSourceWork: "",
    // role: "",
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
    // alert(JSON.stringify(event));
    const db = getFirestore();
    console.log(studentData);
    addDoc(collection(db, "students"), {
      name: studentData.name,
      email: studentData.email,
      phone: studentData.phone,
      github: studentData.github,
      linkedIn: studentData.linkedIn,
      twitter: studentData.twitter,
      portfolio: studentData.portfolio,
      openSourceWork: studentData.openSourceWork,
      role: studentData.role,
      question1: studentData.question1,
      question2: studentData.question2,
    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      }
    );
  };

  const { register, handleSubmit, formState: { errors } } = useForm();

    // const [user, setUser] = useState(null);
    // const handleGoogleSignIn = () => {
    //     signInWithGoogle();
    // }

  if (sessionStorage.getItem("name")) {
      return (
        <div>
          <div id="form">
            <div className="hx">
              <h1>Student Application FORM</h1>
              <div style={{display:`${sessionStorage.getItem("name")?"block":"none"}`}}><img className="sd-avatar" src={sessionStorage.getItem("profilePic")} alt="profilePic"  /></div>
            </div>

            <div className="fish" id="fish"></div>
            <div className="fish" id="fish2"></div>
            <div className="fish" id="fish3"></div>
            <form id="waterform"
            onSubmit={(e) => handleStudentDetails(e)} 
            // onClick={(e) => {errors();handleSubmit(handleStudentDetails)(e);}}
            >
              <div className="formgroup" id="name-form">
                <label for="name">Your name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  ref={register("name",{ required: true })}
                  value={studentData.name}
                  onChange={handleInputChange}
                  />
                  {errors.name && <p>Please check the First Name</p>}
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
                <label for="question1">Why do you want to be a part of WOC 3.0? *</label>
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
                <label for="question2">What languages are you proficient in? What's your tech stack? </label>
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
                // onClick={handleStudentDetails}
              ></input>
            </form>:<div>
                <button class="login-with-google-btn" onClick={signInWithGoogle}>Sign In with Google</button>
            </div>}
          </div>
        </div>
      );
};
export default StudentDetails;