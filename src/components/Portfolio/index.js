import React, { useState } from 'react';

function Portfolio() {
  
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [currentPhoto, setCurrentPhoto] = useState();

  const [ProjectBucket] = useState([
    {
      name: "Let's Get Quizzical",
      where: '',
      description:
        'MERN SPA, MongoDB, Mongoose, Apollo graphQL, JWT Tokens, Javascript, Bootstrap, CSS, HTML'
    },
    {
      name: 'Historical Weather',
      where: '',
      description:
        'Third-party APIs, Javascript, Bootstrap, CSS, HTML'
    },
    {
      name: 'Food Blog',
      where: '',
      description:
        'Node, REST APIs, Express, Heroku, SQL'
    },
    {
      name: 'Note Taker',
      where: '',
      description: ''
    },
    {
      name: 'Social Network APIs',
      where: '',
      description:
        ''
    },
    {
      name: 'Budget Tracking Application',
      where: '',
      description:
        ''
    }
  ]);

  // const toggleModal = (image, i) => {
  //   setCurrentPhoto({ ...image, index: i });
  //   setIsModalOpen(!isModalOpen);
  // };


    return (
    <section>
      <h1 id="portfolio">Portfolio</h1>
      <div>
      <div className="flex-row" >
        {ProjectBucket.map((image, i) => (
          <img
            // src={require(`../../assets/photobucket/${category}/${i}.jpg`)}
            src={require(`../../assets/projectbucket/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name} href={image.where} target="_blank"
          />
        ))}
   
      </div>
    </div>
    </section>
  );
};

export default Portfolio;