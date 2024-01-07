import { Link } from 'react-router-dom'
import LogoTitle from '../../assests/images/logo-s.png'
import './index.scss';
const Home = () => {

    return(
        <div className="container home-page">
            <div className="text-zone" >
                <h1>Hi, <br /> I'm PRIYAN
                <img src={LogoTitle} alt="developer" />
                HU
                <br />
                web developer
                </h1>
                <h2>Fronted Developer / Javascript Expert / YouTuber </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
        </div>
    )

}

export default Home