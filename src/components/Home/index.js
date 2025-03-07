import { Link } from 'react-router-dom';
import LogoTitle from '../../assests/images/logo-s.png';
import './index.scss';
import { useEffect, useState } from 'react';
import Logo from './logo';

 

import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['P', 'R', 'I', 'Y', 'A', 'N', <img key="logo" src={LogoTitle} alt="developer" />,'H', 'U'];
  const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={letterClass}>i</span>
          <br />
          <span className={letterClass}>I</span>
          <span className={letterClass}>‘m&nbsp;</span>
          
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={16} />
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
        </h1>
        <h2>Frontend Developer / Javascript Expert / YouTuber</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo></Logo>
    </div>
    <Loader type="pacman"/>
    </>
  );
};

export default Home;

