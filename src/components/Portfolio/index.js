import React, { useState } from 'react';

function Portfolio() {

  const [ProjectBucket] = useState([
    {
      name: "Let's Get Quizzical",
      where: 'https://shielded-dusk-33243.herokuapp.com/',
      github: 'https://github.com/loriful/quiz-quiz',
      description: 'Team Project - MERN'
    },
    {
      name: 'Historical Weather',
      where: 'https://loriful.github.io/bang-the-drum/',
      github: 'https://github.com/loriful/bang-the-drum',
      description: 'Team Project - Third Party APIs'
    },
    {
      name: 'Food Blog',
      where: 'https://feed-your-camera.herokuapp.com/',
      github: 'https://github.com/adamvaughn/feed-the-camera',
      description: 'Team Project - Interactive Full Stack Project'
    },
    {
      name: 'Note Taker',
      where: 'https://serene-wildwood-86248.herokuapp.com',
      github: 'https://github.com/loriful/note-to-self',
      description: 'API Creation, Node, Express'
    },
    {
      name: 'Social Network API',
      deploy: 'https://watch.screencastify.com/v/VcD78SctoJOX53o3pGk9',
      github: 'https://github.com/loriful/socially-unacceptable',
      description: 'API creation & MongoDB'
    },
    {
      name: 'Budget Tracking Application',
      deploy: 'https://enigmatic-brook-58947.herokuapp.com/',
      github: 'https://github.com/loriful/making-bank',
      description: 'Progressive Web Application'
    }
  ]);

    return (
        <div className="portfolio" href="#portfolio" >
          <h1 id="portfolio">Portfolio</h1>
          <section className="project-container">
          {ProjectBucket.map((project, i) => ( 
           
                <div className="project-card" >
                    <h6 className="description" >{project.description}</h6>
                    <a href={project.github} target="_blank" rel="noreferrer">
                    <img className="git-icon" src={require(`../../assets/images/femalecodertocat.png`)} alt=""></img>
                    </a>
                  <a className="project-img" href={project.where} target="_blank" rel="noreferrer">
                  <img
                    src={require(`../../assets/projectbucket/${i}.jpg`)}
                    alt={project.name}
                    key={project.name}
                  /></a>
             </div> 
          
          ))}
             </section>  
        </div>
    )    // return
};    // end function

export default Portfolio;