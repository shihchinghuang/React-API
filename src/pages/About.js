import React from 'react';
import '../styles/style.css';
import footer from '../img/footer.svg';

const About = () => {
  return (
    <div className="about">
      <div className="data">
        <h1>
          visit my website {''}
          <a
            href="https://shihchinghuang.github.io/React-personal-web/"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          !
        </h1>
        <img src={footer} alt="" />
      </div>
    </div>
  );
};

export default About;
