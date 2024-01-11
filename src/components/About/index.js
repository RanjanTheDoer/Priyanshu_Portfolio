import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => {
          clearTimeout(timeoutId);
        };
      }, []);


    return (
        <div className="container about-page">
            <div className="text-zone">
            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}
                />
            </h1>
            <p>
            Hi, I'm Priyanshu Ranjan,
             a Software Developer with a knack for turning lines of code
              into impactful solutions. Proficient in JAVA, C++, 
              and Python, I excel in MERN stack web development, 
              wielding tools like Android Studio and Visual Studio Code
               to craft seamless projects.
            </p>
            <p>In the realm of engineering, 
                I thrive on projects that emphasize the product lifecycle.
                 Collaborating with cross-functional teams,
                  I ensure effective communication and project success, 
                managing it all with the finesse of a GitHub maestro.
            </p>
            <p>
            Why do programmers prefer dark mode? 
            Because light attracts bugs! 
            Join me in the coding twilight zone, 
            where we embrace the humor in tech and turn every bug into a feature.
             Let's share a laugh and some code! 😄💻 
            #CodeJokes #ConnectAndChuckle
            </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#008000" />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default About
