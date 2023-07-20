import React from "react";
import "./../Styles/Contact-Me.scss";
import ContactForm from "./ContactForm";
const ContactMe = () => {
  return (
    <div className="Contact-Me u-Column">
      <div className="Contact-Me--Section u-Row">
        <div className="Block-For-Image u-Row">
          <div className="Actual-Image Actual-Image-Contact-01"></div>
        </div>
        <div className="Block-For-Text u-Row">
          <div className="Actual-Text u-Row">
            <div className="Heading-Text u-Row" style={{ textAlign: "center" }}>
              Contact Me
            </div>
            <div
              className="Paragraph-Text"
              style={{
                paddingLeft: "1vh",
                paddingTop: "1vh",
                textAlign: "left",
              }}
            >
              Liked My Work???
              <br />
              Have An Internship For Me????🙂
              <br />
              Contact Me From The Below Social Profiles..{" "}
            </div>
            <div className="Link-Text u-Row">
              <a
                href="https://www.linkedin.com/in/siddharth-ghosh-35121a1ab/"
                target="_blank"
              >
                <div className="Profile LinkedIn-Profile"></div>
              </a>
              <a href="https://github.com/sg3220" target="_blank">
                <div className="Profile GitHub-Profile"></div>
              </a>
              <a href="https://twitter.com/IndominusCoder" target="_blank">
                <div className="Profile Twitter-Profile"></div>
              </a>
              <a
                href="https://instagram.com/siddharth_3220?igshid=MzNlNGNkZWQ4Mg=="
                target="_blank"
              >
                <div className="Profile Instagram-Profile"></div>
              </a>
              <a href="mailto: siddharthghosh3220@gmail.com" target="_blank">
                <div className="Profile Email-Profile"></div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="Contact-Me--Section u-Row">
        <div className="Block-For-Text u-Row">
          <div className="Actual-Text u-Row">
            <div className="Heading-Text u-Row" style={{ textAlign: "center" }}>
              Message Me Here...
            </div>

            <ContactForm />
          </div>
        </div>

        <div className="Block-For-Image u-Row">
          <div className="Actual-Image Actual-Image-Contact-02"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
