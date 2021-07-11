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
                    <div className="row mt-sm">
                        <div className="column mr-md">
                            <div className="column">
                                <h4>42 School</h4>
                                <span>Junior</span>
                            </div>
                            <div className="column mt-xs">
                                <h4>Aeronautics Mecanic Graduate</h4>
                                <span>Very Good</span>
                            </div>
                            <div className="column mt-xs">
                                <h4>Scientific Graduation</h4>
                                <span>Well</span>
                            </div>
                        </div>
                        <div className="column">
                            <div className="row">
                                <Icon icon={faMapMarkerAlt} className="mr-xs"></Icon>
                                Chantilly, Oise, France
                            </div>
                            <div className="row mt-xs">
                                <Icon icon={faGithub} className="mr-xs"></Icon>
                                <a style={{color: "var(--link-color)"}}href="https://www.google.com" rel="noreferrer" target="_blank">/GuillaumeMajstruk</a>
                            </div>
                            <div className="row mt-xs">
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