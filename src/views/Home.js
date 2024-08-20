import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { withNamespaces } from 'react-i18next';
import { default as LinkBtn } from "../components/link-btn";

const Home = ({t}) => {
    return (
        <div className="column container-content fullscreen center-h center-v">
            <div className="background-header">{t('home.page_title')}</div>
            <div className="row center-h h-100">
                <div className="column center-h">
                    <div className="profile-picture--container">
                        <img src="profile.png" alt="profile"></img>
                    </div>
                    <span style={{ display: "flex", flexFlow: "row nowrap", alignItems: "center", minHeight: "110px" }}>
                        <h2 className="mt-sm">{t('home.title')}</h2>
                    </span>
                    <h3 className="underlined font-space">{t('home.open_to_work')}</h3>
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
                        {t('home.presentation.dev')}  <b>Javascript</b> / <b>Typescript</b>
                        <br /><br />
                        {t('home.presentation.services')}
                        <br /><br />
                        {t('home.presentation.your_needs')}
                        <br /><br />
                        {t('home.presentation.quality')}
                        <br /><br />
                        {t('home.presentation.languages')} 🇫🇷 🏴󠁧󠁢󠁥󠁮󠁧󠁿 🇪🇸
                    </div>
                    <div className="mb-lg" >
                        <LinkBtn destination="/contact"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withNamespaces()(Home);
