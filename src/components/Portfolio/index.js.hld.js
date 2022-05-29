import React, { useState } from 'react';

function Portfolio() {

  const [ProjectBucket] = useState([
    {
      name: "Let's Get Quizzical",
      where: 'https://shielded-dusk-33243.herokuapp.com/',
      github: 'https://github.com/loriful/quiz-quiz',
      description: 'Team MERN Project'
    },
    {
      name: 'Historical Weather',
      where: 'https://loriful.github.io/bang-the-drum/',
      github: 'https://github.com/loriful/bang-the-drum',
      description: 'Team Project - HTML, Bootstrap CSS, JavaScript, Third Party APIs'
    },
    {
      name: 'Food Blog',
      where: 'https://feed-your-camera.herokuapp.com/',
      github: 'https://github.com/adamvaughn/feed-the-camera',
      description: 'Team Interactive Full Stack Project - HTML, CSS, Javascript, REST APIs, MVC Development, Handlebars'
    },
    {
      name: 'Note Taker',
      where: 'https://serene-wildwood-86248.herokuapp.com',
      github: 'https://github.com/loriful/note-to-self',
      description: 'API Creation, Node, Insomnia, Express, JSON, FS, Heroku'
    },
    {
      name: 'Social Network API',
      deploy: 'https://watch.screencastify.com/v/VcD78SctoJOX53o3pGk9',
      github: 'https://github.com/loriful/socially-unacceptable',
      description: 'API creation, Insomnia, Express, MongoDB, Mongoose ODM, BSON, Screencastify'
    },
    {
      name: 'Budget Tracking Application',
      deploy: 'https://enigmatic-brook-58947.herokuapp.com/',
      github: 'https://github.com/loriful/making-bank',
      description: 'Progressive Web Application'
    }
  ]);

    return (
        <section className="portfolio" href="#portfolio" >
          <h1 id="portfolio">Portfolio</h1>
          {ProjectBucket.map((project, i) => ( 
            <div className="flex-row">
                  <div className="project-container">
                      <div className="description-container">
                          <p className="description">{project.description}</p>
                              <div className="git">
                                  <a href={project.github} target="_blank" rel="noreferrer">
                                  <img src={require(`../../assets/images/femalecodertocat.png`)} alt=""></img>
                                  </a>
                              </div>
                       </div>
                      <div className="image">
                        <a href={project.where} target="_blank" rel="noreferrer">
                        <img
                          src={require(`../../assets/projectbucket/${i}.jpg`)}
                          alt={project.name}
                          key={project.name}
                        /></a>
                      </div>
                  </div>
            </div>
          ))}
        </section>
    )    // return
};    // end function

export default Portfolio;