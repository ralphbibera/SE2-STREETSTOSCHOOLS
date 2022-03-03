import React from "react";
import "../Stylesheets/Contacts.css";
import bg from "../Assets/bg.png";
import ContactUs_Gmail from "../Assets/ContactUs_Gmail.png";
import ContactUs_FB from "../Assets/ContactUs_FB.png";
import ContactUs_IG from "../Assets/ContactUs_IG.png";
import ContactUs_TWT from "../Assets/ContactUs_TWT.png";

const Contacts = () => {
  const faqs = [
    {
      question: "Section 1",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolo",
    },
    {
      question: "Section 2",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolo",
    },
    {
      question: "Section 3",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolo",
    },
    {
      question: "Section 4",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolo",
    },
    {
      question: "Section 5",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolo",
    },
    {
      question: "Section 6",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolo",
    },
  ];

  return (
    <div
      class="bg_image"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      <div id="contact">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className="text-center" style={{ fontSize: "3.5vw" }}>
          Frequently Asked Questions
        </h1>
        <br />
        <div className="container">
          <div className="accordion" id="accordionExample">
            {faqs.map((faq, index) => (
              <Accordion faq={faq} index={index} />
            ))}
          </div>
        </div>

        <div className="main_content">
          <br />
          <h1 style={{ fontSize: "3.5vw" }} className="text-center">
            Contact Us
          </h1>
          <div style={{ fontSize: "2vw" }} className="info">
            Get in touch and let us know how we can help
          </div>

          <div className="flex-container-contact">
            <div className="flex-item-contact" id="div-contact">
              <a href="mailto:streetstoschools.org@gmail.com" target="_blank">
                <img
                  src={ContactUs_Gmail}
                  alt="gmail"
                  style={{ width: "100%" }}
                />
              </a>
            </div>
            <div className="flex-item-contact" id="div-contact">
              <a
                href="https://www.facebook.com/StreetstoSchoolsProject/"
                target="_blank"
              >
                <img src={ContactUs_FB} alt="fb" style={{ width: "100%" }} />
              </a>
            </div>
            <div className="flex-item-contact" id="div-contact">
              <a
                href="https://www.instagram.com/streetstoschools.project/"
                target="_blank"
              >
                <img src={ContactUs_IG} alt="ig" style={{ width: "100%" }} />
              </a>
            </div>
            <div className="flex-item-contact" id="div-contact">
              <a href="#">
                <img
                  src={ContactUs_TWT}
                  alt="twitter"
                  style={{ width: "100%", background: "none" }}
                />
              </a>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

const Accordion = (props) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#accordion${props.index}`}
          aria-expanded="true"
          aria-controls={`accordion${props.index}`}
        >
          {props.faq.question}
        </button>
      </h2>
      <div
        id={`accordion${props.index}`}
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">{props.faq.answer}</div>
      </div>
    </div>
  );
};

export default Contacts;
