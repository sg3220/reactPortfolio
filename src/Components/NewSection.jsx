import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FcFlashOn, FcOk } from "react-icons/fc";
import { AiOutlineApi, AiOutlineCloudServer } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import "./../Styles/NewSection.scss";
import "./../Styles/Theme.scss";
const NewSection = () => {
  const [vArray] = useTypewriter({
    words: ["Problem-Solver", "Web-Developer"],
    loop: {},
  });
  return (
    <>
      <div className="componentBox">
        <div className="imageBox">
          <div className="imageBox--actualImage actualImage01"></div>
        </div>
        <div className="descriptionBox alignItems-FS">
          <div className="primaryHeading">Hello👋.</div>
          <br></br>
          <div className="tertiaryHeading">
            Myself <span className="highlightHeading">Siddharth Ghosh</span>
          </div>
          <div className="tertiaryHeading">
            I'm A &nbsp;<span className="highlightHeading">{vArray}</span>
            <span>
              <Cursor />
            </span>
            .
          </div>
        </div>
      </div>

      <div className="componentBox">
        <div className="descriptionBox alignItems-C">
          <div className="secondaryHeading">
            <FcFlashOn />
            My Tools For Dev🧑🏽‍💻
          </div>
          <br></br>
          <div>
            <div
              className="icons-Array u-Row"
              style={{ justifyContent: "center" }}
            >
              <div className="Icon Icon-HTML cutom-Dialog-Box"></div>
              <div className="Icon Icon-CSS cutom-Dialog-Box"></div>
              <div className="Icon Icon-JavaScript cutom-Dialog-Box"></div>
            </div>

            <div
              className="icons-Array u-Row"
              style={{ justifyContent: "center" }}
            >
              <div className="Icon Icon-SASS cutom-Dialog-Box"></div>
              <div className="Icon Icon-MongoDB cutom-Dialog-Box"></div>
              <div className="Icon Icon-Express cutom-Dialog-Box"></div>
              <div className="Icon Icon-React cutom-Dialog-Box"></div>
              <div className="Icon Icon-Node cutom-Dialog-Box"></div>
            </div>

            <div
              className="icons-Array u-Row"
              style={{ justifyContent: "center" }}
            >
              <div className="Icon Icon-Git cutom-Dialog-Box"></div>
              <div className="Icon Icon-GitHub cutom-Dialog-Box"></div>
            </div>
          </div>
        </div>
        <div className="imageBox">
          <div className="imageBox--actualImage actualImage02"></div>
        </div>
      </div>

      <div className="componentBox">
        <div className="imageBox">
          <div className="imageBox--actualImage actualImage03"></div>
        </div>
        <div className="descriptionBox alignItems-FS">
          <div className="secondaryHeading">
            {" "}
            <FcFlashOn />
            My Skill-Set:
          </div>
          <br></br>
          <div className="tertiaryHeading">
            <p>
              <FcOk />
              &nbsp;Develop Interactive UI.
            </p>
            <p>
              <FcOk />
              &nbsp;Build Responsive Website.
            </p>
            <p>
              <FcOk />
              &nbsp;Develop API <AiOutlineApi />, Work With 3rd Party APIs
            </p>
            <p>
              <FcOk />
              &nbsp;Build Application Back-End <AiOutlineCloudServer />
            </p>
            <p>
              <FcOk />
              &nbsp;Problem Solving Using C++
              <BsCodeSlash />
            </p>
            <p>
              <FcOk />
              &nbsp;Core CSE Fundamentals
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewSection;
