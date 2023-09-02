import React from "react";
import { FcFlashOn, FcGraduationCap } from "react-icons/fc";
import { Link } from "react-router-dom";

import "./../Styles/Utility.scss";
import "./../Styles/Education.scss";
import "./../Styles/Theme.scss";

const Education = () => {
  return (
    <div className="Education u-Row">
      <div
        className="wrapper u-Row"
        style={{
          width: "100%",
          height: "6.25rem",
          alignItems: "end",
          justifyContent: "center",
        }}
      >
        <div
          className="Title primary-Heading u-Row"
          style={{
            width: "auto",
            textDecoration: "underline",
            textAlign: "center",
          }}
        >
          Basic Education
        </div>
      </div>
      <div className="Left">
        <div className="FakeDivUp">2017</div>
        <div className="FakeDivBelow">
          <div className="tertiary-Heading">
            <span className="highlight-Heading">Class X</span>
            <br />
            <span className="highlight-Heading">CGPA: 9.4</span>
            <br />
            Cathedral Sr. Sec. School
            <br /> Lucknow, Uttar Pradesh, India
            <br />
          </div>
        </div>
        <div className="FakeDiv"></div>
        <div className="FakeDivUp" style={{ animationDelay: "2s" }}>
          2024
        </div>
        <div className="FakeDivBelow">
          <div className="tertiary-Heading">
            <span className="highlight-Heading">Bachelor Of Technology</span>
            <br />
            <span className="highlight-Heading">CGPA: 9.45</span>
            <br />
            SRMIST
            <br /> Ghaziabad, Uttar Pradesh
            <br />
          </div>
        </div>
      </div>
      <div className="Right">
        <div className="FakeDiv"></div>
        <div className="FakeDivUp">2019</div>
        <div className="FakeDivBelow">
          <div className="tertiary-Heading">
            <span className="highlight-Heading">Class XII</span>
            <br />
            <span className="highlight-Heading">Percentage: 89.3%</span>
            <br />
            Cathedral Sr. Sec. School
            <br /> Lucknow, Uttar Pradesh, India
            <br />
          </div>
        </div>
      </div>
      <div
        className="wrapper u-Row"
        style={{
          width: "100%",
          height: "6.25rem",
          alignItems: "start",
          justifyContent: "start",
        }}
      >
        <div
          className="Title primary-Heading u-Row"
          style={{
            width: "auto",
            textDecoration: "underline",
            textAlign: "left",
          }}
        >
          Certifications
        </div>
      </div>
      <div className="FakeDiv02"></div>
      <div className="showItems u-Row">
        <a
          href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS70S2335047309016862"
          style={{ cursor: "pointer" }}
          target="_blank"
          rel="noreferrer"
        >
          <div className="Item Item-NP"></div>
        </a>
        <a
          href="https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS16S4456035003109163"
          style={{ cursor: "pointer" }}
          target="_blank"
          rel="noreferrer"
        >
          <div className="Item Item-ND"></div>
        </a>

        <a
          href="https://www.udemy.com/certificate/UC-0e1de28a-4102-4e5a-93f9-f76dc5789321/"
          style={{ cursor: "pointer" }}
          target="_blank"
          rel="noreferrer"
        >
          <div className="Item Item-U"></div>
        </a>
      </div>
      {/* <div
        className="wrapper u-Row"
        style={{
          width: "100%",
          height: "6.25rem",
          alignItems: "end",
          justifyContent: "end",
        }}
      >
        <div
          className="Title primary-Heading u-Row"
          style={{
            width: "auto",
            textDecoration: "underline",
            textAlign: "right",
          }}
        >
          Internships
        </div>
      </div>
      <div className="showItems u-Row " style={{ height: "125rem" }}>
        <a
          href="https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=e60e9e05f591649b279ab84898d35652"
          style={{ cursor: "pointer" }}
          target="_blank"
        >
          <div className="Item Item-Internship pahla"></div>
        </a>
        <a
          href="https://smartinternz.com/internships/salesforce_certificates/f624208d3113dd1ce4c1a8d8e4bf064f"
          style={{ cursor: "pointer" }}
          target="_blank"
        >
          <div className="Item Item-Internship Item-Internship-02 dusra"></div>
        </a>
      </div>
      <div
        className="FakeDiv02"
        style={{
          borderRight: 0,
          borderLeft: "10px solid transparent",
          animationDelay: "7.5s",
          height: "125rem",
        }}
      ></div> */}
    </div>
  );
};

export default Education;
