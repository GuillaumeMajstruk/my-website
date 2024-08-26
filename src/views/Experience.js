import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { experiences } from "../data";
import { withNamespaces, Trans } from 'react-i18next';
import i18n from '../i18n';


const Experience = ({t}) => {
    const currentLanguage = i18n.language || "fr";

    return (
        <div className="column container fullscreen center-h center-v">
            <div className="background-header">xp</div>
            <div className="text-align-left-sm h-100 ml-auto mr-auto" style={{width: "100%"}}>
                <div className="column h-100 center-v">
                    <h2 className="font-rhyme text-light mt-sm">
                        <Trans i18nKey="experience.my_xp" >
                            Here is a timeline of my <strong>EXPERIENCE?</strong>
                        </Trans>
                        &nbsp;<Icon icon={faUserTie}></Icon>
                    </h2>
                    <h3 className="font-space text-normal mt-xs">{t('experience.get_in_touch')}</h3>
                    <div className="xp--container mt-md mb-sm">
                        <div className="xp--timeline"></div>
                        {experiences[currentLanguage].map((experience, index) => {
                            return (
                                <div className={"xp--content-container " + experience.class + "-b"} key={experience.title}>
                                    {
                                        index % 2 !== 0 ? <div className="xp--date-container">
                                            <span>{experience.dates.to}</span>
                                            <span>{experience.dates.from}</span>
                                        </div> : null
                                    }
                                    <div className={"xp--content " + experience.class}>
                                        <div className="xp--content-header mb-xs">
                                            <div>{experience.title}</div>
                                            <div className="xp--content-dates">{experience.dates.from} { experience.dates?.to ? ` - ${experience.dates?.to}`: '' }</div>
                                        </div>
                                        <div className="xp--content-header" style={{textTransform: 'capitalize'}}>{experience.function}</div>
                                        <div className="xp--content-desc" style={{textAlign: experience.class === "xp--content-formation" ? "center" : null}}>
                                            {experience.desc}
                                            <ul>
                                                {
                                                    experience.tasks?.map(
                                                        (task, index) => <li key={index}>{task}</li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                        <div className="xp--content-technos">
                                            {experience.techs?.map(tech => <div key={tech} style={{display: "flex"}}>{tech}</div>)}
                                        </div>
                                    </div>
                                    {
                                        index % 2 === 0 ? <div className="xp--date-container">
                                            <span>{experience.dates.to}</span>
                                            <span>{experience.dates.from}</span>
                                        </div> : null
                                    }
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default withNamespaces()(Experience);
