import React from "react";
import "./../Styles/Main.scss";
import "./../Styles/Typography.scss";
import "./../Styles/Utility.scss";
import { FcFlashOn, FcOk } from "react-icons/fc";
import { AiOutlineApi, AiOutlineCloudServer } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";

const Main = () => {
  return (
    <div className="Main u-Column">
      <div className="Main--Section Main--Section-01 u-Row">
        <div className="text-Section-01 ">
          <div
            className="secondary-Heading"
            style={{ marginLeft: 0, marginBottom: 0, fontWeight: 700 }}
          >
            Hello👋.
          </div>
          <div className="tertiary-Heading" style={{ textAlign: "left" }}>
            Myself <span class="highlight-Heading">Siddharth Ghosh</span>
            <br />
            Proficient In HTML, CSS,{" "}
            <span class="highlight-Heading">SASS, ReactJS </span>&
            <span class="highlight-Heading"> Javascript </span>
            <br /> A Passionate Front-End Developer, Creating <br />
            Captivating Web Projects & Continuously Honing My Back-End
            Skills.&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
        <div className="image-Section image-Section-01 custom-Dialog-Box"></div>
      </div>

      <div className="primary-Heading u-Row">Here's What I Do...</div>

      <div className="Main--Section Main--Section-02 u-Row">
        <div className="image-Section image-Section-02 custom-Dialog-Box"></div>
        <div className="text-Section-02">
          <div
            className="secondary-Heading u-Row"
            style={{ justifyContent: "center" }}
          >
            <FcFlashOn />
            My Tools For Dev🧑🏽‍💻
          </div>

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
          <div className="pointers"></div>
        </div>
      </div>

      <div className="Main--Section Main--Section-03 u-Row">
        <div className="text-Section-03">
          <div
            className="secondary-Heading u-Row"
            style={{ justifyContent: "center" }}
          >
            <FcFlashOn />
            My Skill-Set:
          </div>
          <div className="tertiary-Heading">
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
        <div className="image-Section image-Section-03 custom-Dialog-Box"></div>
      </div>
    </div>
  );
};

export default Main;
