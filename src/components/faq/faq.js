import React, { useEffect } from "react";
import "./faq.css";
import faqData from "./faqData";
import faqImg from "../../assets/faq/faqImg.png";
import{ 
  IoMdArrowDropdown
} from "react-icons/io"

const Faq = () => {
  useEffect(() => {
    const faq = document.querySelectorAll(".faq-sec-item");

    faq.forEach((faq_sec_item) => {
      faq_sec_item.addEventListener("click", () => {
        faq_sec_item.classList.toggle("faq-active");
      });
    });
  }, []);

  useEffect(() => {
    const faqHeading = document.querySelector(".faq-sec-heading");
    const faqHeadingOptions = {
      root: null,
      threshold: 0.5,
    };
    const faqHeadingObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          faqHeading.classList.add("faq-sec-heading-active");
        }
      });
    }, faqHeadingOptions);
    faqHeadingObserver.observe(faqHeading);
  }, []);

  return (
    <div className="faq-sec" id="faq">
      <div className="faq-sec-content">
        <div className="faq-sec-heading">
          Frequently
          <br />
          <div className="faq-sec-heading-line-2">Asked Questions</div>
        </div>

        <div className="faq-sec-container">
          {faqData.map((faq, index) => (
            <div key={index} value={false} className="faq-sec-item">
              <img src={faqImg} alt="faqImg" className="faqImg" />
              <div className="faq-sec-ques">
                <div className="ques">{faq.question}</div>
                <div className="arrow"><a><IoMdArrowDropdown size={20}/></a></div>
              </div>
              <div className="answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
