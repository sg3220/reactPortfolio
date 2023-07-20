import React from "react";
import "./../Styles/Projects-Internship.scss";
import "./../Styles/Typography.scss";
const Projects = () => {
  return (
    <div className="Projects-Internship u-Column">
      <div className="Contact-Me u-Column">
        <div className="Contact-Me--Section u-Row">
          <div className="Block-For-Image u-Row">
            <div className="Actual-Image project-Image ekAurClass"></div>
          </div>

          <div className="Block-For-Text u-Row">
            <div className="Actual-Text u-Row">
              <div
                className="Heading-Text u-Row"
                style={{ textAlign: "center" }}
              >
                Projects
              </div>
              <div
                className="Paragraph-Text"
                style={{
                  paddingLeft: "1vh",
                  paddingTop: "1vh",
                  textAlign: "left",
                }}
              >
                As An Ardent Front-End Developer,
                <br /> I Craft Captivating Web Projects, <br />
                Persistently Improving My Abilities.
                <br /> Additionally, I've Embarked On Learning <br />
                Backend Technologies.
              </div>
              <div className="Link-Text u-Row"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="Projects-Internship--Section-02 u-Row">
        <div
          className="primary-Heading"
          style={{ textAlign: "center", width: "100%" }}
        >
          Projects
        </div>
        <div className="projects-Container u-Row">
          <div className="project-Div">
            <div className="primary-Heading project-Heading">
              <a href="https://github.com/sg3220" target="_blank">
                Chrome-Extension(Color-Picker)
              </a>
            </div>
            <div className="tertiary-Heading project-Description">
              I Developed A Chrome Extension For Color-Picking, Primarily Using
              JS, And Minimal HTML, CSS. Integrated External APIs For Enhanced
              Functionality.
            </div>
            <div
              className="icons-Array u-Row"
              style={{ justifyContent: "start" }}
            >
              <div className="Icon Icon-HTML  iconSize"></div>
              <div
                className="Icon Icon-CSS  iconSize"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="Icon Icon-JavaScript  iconSize"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>

          <div className="project-Div">
            <div className="primary-Heading project-Heading">
              <a href="https://github.com/sg3220" target="_blank">
                Chrome-Extension(Joke Generator)
              </a>
            </div>
            <div className="tertiary-Heading project-Description">
              I Created A Chrome Extension For Joke Generation, Using Mainly JS
              And Some HTML, CSS. Utilized "DAD JOKE" External API.
            </div>
            <div
              className="icons-Array u-Row"
              style={{ justifyContent: "start" }}
            >
              <div className="Icon Icon-HTML  iconSize"></div>
              <div
                className="Icon Icon-CSS  iconSize"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="Icon Icon-JavaScript  iconSize"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>

          {/* <div className="project-Div">
            <div className="primary-Heading project-Heading">
              <a href="https://github.com/sg3220" target="_blank">
                Full Stack To Do App
              </a>
            </div>
            <div className="tertiary-Heading project-Description">
              The To-Do app combines ExpressJS, NodeJS, and MongoDB for a robust
              backend, while leveraging ReactJS for a dynamic frontend.
            </div>
            <div
              className="icons-Array u-Row"
              style={{ justifyContent: "start" }}
            >
              <div className="Icon Icon-HTML  iconSize"></div>
              <div
                className="Icon Icon-CSS  iconSize"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="Icon Icon-JavaScript  iconSize"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
