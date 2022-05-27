import React from 'react';
import ProjectList from '../ProjectList';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 id="portfolio">Portfolio</h1>
      <ProjectList name={currentCategory.name} />
    </section>
  );
}
export default Portfolio;
