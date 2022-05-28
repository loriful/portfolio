import React from 'react';
import ResumeDoc from "../../assets/LATResume.pdf"

function Resume() {
  return (
    <section className="my-5" href="#resume" >

      <h1 id="resume">Resume</h1>
      <div className="resumedoc">
        <a href={ResumeDoc}>Click to view</a>
      </div>
      <ul className="skills">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Node</li>
        <li>MERN Stack</li>
        <li>mySQL</li>
        <li>MongoDB</li>
        <li> Mongoose</li>
        <li>graphQL</li>
      </ul>
    </section>
  )
}

export default Resume;
