import React from 'react'
import Headshot from "../../assets/images/head-shot.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">About LA Tipton</h1>
      <img src={Headshot} style={{ width: "7%" }} alt="personal phote" />
      <div className="about-p">
        <p>
          Former IBM Project Exectuve, now a full stack developer ready for the next adventure.  Set to complete Vanderbilt University's Full Stack Developer Bootcamp in June.
        </p>
      </div>
    </section>
  )
}

export default About