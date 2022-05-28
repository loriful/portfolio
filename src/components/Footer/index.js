import React from 'react';

const Footer = () => {
  return (
      <>
        <div className="icon-container">
          <div className="icons">
              <a href="https://www.linkedin.com/in/loritipton/" target="_blank" rel="noreferrer">
              <img src={require(`../../assets/images/link.ico`)} alt=" "/></a>
          </div>
          <div className="icons">
              <a href="https://github.com/loriful" target="_blank" rel="noreferrer">
              <img src={require(`../../assets/images/octocat.png`)} alt=" "/></a>
          </div><div className="icons">
              <a href="https://stackoverflow.com/users/17558306/tiptontn" target="_blank" rel="noreferrer">
              <img src={require(`../../assets/images/stack.ico`)} alt=" "/></a>
          </div>
      </div>
      <div className="copy">
        &copy; 2022 by Tipton
      </div>
  </>
  );
};

export default Footer;
