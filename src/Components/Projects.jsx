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
              ></div>
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
          className="pHeading"
          style={{ textAlign: "center", width: "100%" }}
        >
          Projects
        </div>

        <div className="projects-Container u-Row">
          <div className="project-Div">
            <div className="sHeading">
              <a
                href="https://github.com/sg3220/ghoshColorPicker"
                target="_blank"
                rel="noreferrer"
              >
                Color-Picker{" "}
              </a>
            </div>
            <div className="tHeading project-Description">
              A Chrome Extension Using External APIs For Enhanced Color-Picking.
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
            <div className="sHeading ">
              <a
                href="https://github.com/sg3220/ghoshJokeGenerator"
                target="_blank"
                rel="noreferrer"
              >
                Joke-Generator
              </a>
            </div>
            <div className="tHeading project-Description">
              A Chrome Extension For Joke Generation, Using "DAD JOKE" External
              API.
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
            <div className="sHeading ">
              <a
                href="https://cache-verse.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                CacheVerse
              </a>
            </div>
            <div className="tHeading project-Description">
              A Team-Portfolio To Showcase Purpose, Projects & Other Necessary
              Details About My Team.
            </div>
            <div
              className="icons-Array u-Row"
              style={{ justifyContent: "start" }}
            >
              <div className="Icon Icon-HTML  iconSize"></div>
              <div
                className="Icon Icon-SASS  iconSize"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </div>

          <div className="project-Div">
            <div className="sHeading ">
              <a
                href="https://github.com/sg3220/CalculatorInURLL"
                target="_blank"
                rel="noreferrer"
              >
                Calculator-In-URL
              </a>
            </div>
            <div className="tHeading project-Description">
              A Simple Calculator, In Which Expressions Are Passed In URL
              Itself.
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
              <div className="Icon Icon-JavaScript  iconSize"></div>
              <div
                className="Icon Icon-Node  iconSize"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div className="Icon Icon-Express  iconSize"></div>
            </div>
          </div>

          <div className="project-Div">
            <div className="sHeading ">
              <a
                href="https://socket-sg3220.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                Grocery-Store
              </a>
            </div>
            <div className="tHeading">
              A Grocery Store Using All Modern Day Technologies.
            </div>
            <div
              className="icons-Array u-Row"
              style={{ justifyContent: "start" }}
            >
              <div
                className="Icon Icon-JavaScript  iconSize"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div className="Icon Icon-SASS  iconSize"></div>
              <div
                className="Icon Icon-MongoDB  iconSize"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div className="Icon Icon-Express  iconSize"></div>
              <div
                className="Icon Icon-React  iconSize"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div className="Icon Icon-Node  iconSize"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
