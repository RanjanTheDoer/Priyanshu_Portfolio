import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    // Initialize EmailJS here
    emailjs.init("BnQSWRYjYP2-bi_Ut"); // Replace with your actual EmailJS user ID

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  function sendEmail(event) {
    event.preventDefault();

    var params = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value,
    };

    const serviceID = 'service_zucw7fr'; // Replace with your actual service ID
    const templateID = 'template_d9xb7yo'; // Replace with your actual template ID

    emailjs.send(serviceID, templateID, params)
      .then(
        (res) => {
          document.getElementById('name').value = '';
          document.getElementById('email').value = '';
          document.getElementById('subject').value = '';
          document.getElementById('message').value = '';
          alert("Your message has been sent to Priyanshu");
        }
      )
      .catch(
        (error) => {
          console.error('Oops! Priyanshu did not get your message, try again!', error);
        }
      );
  }

  return (
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
            I am interested in Freelance Opportunities. Drop me a line and let's talk tech! <br></br> 
            Whether you're looking to collaborate on a project, 
            discuss the latest coding trends, or 
            just share a good laugh over a programming joke, I'm all ears.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type='text' id="name" placeholder="Name" required />
                </li>
                <li className='half'>
                  <input type="email" id="email" placeholder="Email" required />
                </li>
                <li className='half'>
                  <input type="text" id="subject" placeholder="Subject" required />
                </li>
                <li>
                  <textarea 
                    placeholder="Message"
                    id="message"
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
      <Loader type='pacman' />
    </>
  );
};

export default Contact;





