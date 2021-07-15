import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <div className="container fullscreen center-h center-v">
            <div className="background-header">home</div>
            <div className="row center-h m-auto h-100">
                <div className="column center-h">
                    <div className="profile-picture--container">
                        <img src="profile.png" alt="profile"></img>
                    </div>
                    <h3 className="text-normal mt-sm">MAJSTRUK GUILLAUME</h3>
                    <h3 className="text-normal">27 yo</h3>
                    <h2 className="mt-sm">FULLSTACK DEVELOPER</h2>
                    <h3 className="underlined font-space">OPEN TO WORK</h3>
                    <div id="home-grid" className="grid-wrapper mt-lg w-100">
                        <div>
                            <div className="text-bold">42, Paris</div>                            
                            <div>Junior</div>
                            <br></br>
                            <div className="text-bold">Aeronautics Mechanics Graduation</div>                            
                            <div>Very Good</div>
                            <br></br>
                            <div className="text-bold">Scientific Graduation</div>                            
                            <div>Well</div>
                            <br></br>
                        </div>
                        <div>
                            <div>
                                <Icon icon={faMapMarkerAlt} className="mr-xs"></Icon>
                                Chantilly, Oise, France
                            </div>
                            <div className="mt-xs">
                                <Icon icon={faGithub} className="mr-xs"></Icon>
                                <a style={{color: "var(--link-color)"}}href="https://www.google.com" rel="noreferrer" target="_blank">/GuillaumeMajstruk</a>
                            </div>
                            <div className="mt-xs">
                                <Icon icon={faLinkedin} className="mr-xs"></Icon>
                                <a style={{color: "var(--link-color)"}}href="https://www.google.com" rel="noreferrer" target="_blank">/in/guillaume-majstruk</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;