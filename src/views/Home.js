import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <div className="column container fullscreen center-h center-v">
            <div className="background-header">home</div>
            <div className="row center-h m-auto h-100">
                <div className="column center-h">
                    <div className="profile-picture--container">
                        <img src="profile.png" alt="profile"></img>
                    </div>
                    <span style={{ display: "flex", flexFlow: "row nowrap", alignItems: "center", minHeight: "110px" }}>
                        <h2 className="mt-sm">Expert Web Fullstack</h2>
                    </span>
                    <h3 className="underlined font-space">EN RECHERCHE DE MISSION</h3>
                    <div className="mt-md mb-md">
                        <div>
                            <Icon icon={faMapMarkerAlt} className="mr-xs"></Icon>
                            Chantilly, Oise, France
                        </div>
                        <div className="mt-xs">
                            <Icon icon={faGithub} className="mr-xs"></Icon>
                            <a style={{ color: "var(--link-color)" }} href="https://github.com/GuillaumeMajstruk" rel="noreferrer" target="_blank">/GuillaumeMajstruk</a>
                        </div>
                        <div className="mt-xs">
                            <Icon icon={faLinkedin} className="mr-xs"></Icon>
                            <a style={{ color: "var(--link-color)" }} href="https://www.linkedin.com/in/guillaume-majstruk/" rel="noreferrer" target="_blank">/in/guillaume-majstruk</a>
                        </div>
                    </div>
                    <div className='text-break w-50 text-start mb-md'>
                        Développeur fullstack spécialisé  <b>Javascript</b> / <b>Typescript</b>
                        <br /><br />
                        Je mets à disposition mon expertise pour vous proposer des solutions performantes à vos besoins applicatifs. Que ce soit une Marketplace, un site d'E-commerce, une application web ou mobile, ma démarche sera centrée sur votre besoin 🫵
                        <br /><br />
                        🚀 Je m'engage à fournir des solutions qui non seulement répondent aux exigences techniques mais aussi améliorent l'expérience utilisateur et contribuent à la réussite de vos projets.
                        <br /><br />
                        📈 En quête de qualité et d'excellence, je suis prêt à relever de nouveaux défis et à collaborer pour transformer vos idées en réalités.
                        <br /><br />
                        Langues: 🇫🇷 🏴󠁧󠁢󠁥󠁮󠁧󠁿 🇪🇸
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
