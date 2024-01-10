import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
const About = () => {
    return (
        <div className="container about-page">
            <div className="text-zone">
            <h1>
                <AnimatedLetters
                strArray={['A','b','o','u','t','','m','e']}
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

        </div>
    )
}

export default About
