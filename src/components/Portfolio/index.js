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
      description: 'Team Full Stack Project - HTML, CSS, Javascript, REST APIs, MVC Development, Handlebars'
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
  
      <h1>Portfolio</h1>
       <div className="flex-row">
        <div className="container">
  
          <h4>Project Description</h4>
         
         {/* {ProjectBucket.map(image => return ( */}
          {/* <div style={{flex: 1, justifyContent: 'top', alignItems: 'left', marginTop: 20}}> */}
          {/* <h4 style={{position: 'absolute', marginTop: 20}}>Description</h4> */}
       
        {ProjectBucket.map((image, i) => (  
           <img
            // style={{flex: 1}}
            src={require(`../../assets/projectbucket/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            href={image.where} target="_blank"
            key={image.name} 
            text={image.descripton}

          />
          ))}
  

  </div>
    </div>
    </section>
  );
};

export default Portfolio;