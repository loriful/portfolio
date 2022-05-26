import React, { useState } from 'react';

const ProjectList = ({ category }) => {
  const [photobucket] = useState([
    {
      name: "Let's Get Quizzical",
      // category: 'portfolio',
      // category: 'teamprojects',
      description:
        'MERN SPA, MongoDB, Mongoose, Apollo graphQL, JWT Tokens, Javascript, Bootstrap, CSS, HTML'
    },
    {
      name: 'Historical Weather',
      // category: 'portfolio',
      // category: 'teamprojects',
      description:
        'Third-party APIs, Javascript, Bootstrap, CSS, HTML'
    },
    {
      name: 'Food Blog',
      // category: 'portfolio',
      description:
        'Node, REST APIs, Express, Heroku, SQL'
    },
    {
      name: 'Over the Horizon',
      // category: 'portfolio',
      // category: 'challenges',
      description:
        'HTML & CSS'
    },
    {
      name: 'Code-Quiz',
      // category: 'portfolio',
      // category: 'challenges',
      description:
        'Javascript, HTML, & CSS'
    },
  ]);

  // const currentPhotos = photobucket.filter(photo => photo.category === category);

  const currentPhotos = photobucket;
  
  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            // src={require(`../../assets/photobucket/${category}/${i}.jpg`)}
            src={require(`../../assets/photobucket/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
