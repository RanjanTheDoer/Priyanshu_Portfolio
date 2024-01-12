import Loader from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => {
          clearTimeout(timeoutId);
        };
      }, []);

    return(
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','m','e']}
                    idx={15}
                    />
                </h1>
                <p>
                    
                I am Intrested in Freelance Opportunities.
                Drop me a line and let's talk tech! <br></br> 
                Whether you're looking to collaborate on a project, 
                discuss the latest coding trends, or 
                just share a good laugh over a programming joke, I'm all ears.
                </p>
                <div>
                    <form>
                        <ul>
                            <li className='half'>
                                <input type='text' name="name" placeholder="Name" required />
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li className='half'>
                                <input type="text" name="subject" placeholder="Subject" required />
                            </li>
                            <li>
                                <textarea 
                                    placeholder="Message"
                                    name="Message"
                                    required
                                    ></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default Contact;