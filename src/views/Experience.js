import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { experiences } from "../data";

const Experience = () => {
    return (
        <div className="column container fullscreen center-h center-v">
            <div className="background-header">xp</div>
            <div className="center-h h-100 ml-auto mr-auto" style={{width: "100%"}}>
                <div className="column h-100 center-v">
                    <h2 className="font-rhyme text-light mt-sm">WHAT ABOUT MY <strong>EXPERIENCE?</strong>&nbsp;<Icon icon={faUserTie}></Icon></h2>
                    <span className="font-normal">Here is a timeline of it</span>
                    <h3 className="font-space text-normal mt-xs">You have a project? Talk with me! <Link className="button text-bold" to='/contact'>contact me</Link></h3>
                    <div className="xp--container mt-md mb-sm">
                        <div className="xp--timeline"></div>
                        {experiences.map((experience, index) => {
                            return (
                                <div className={"xp--content-container " + experience.class + "-b"} key={experience.id}>
                                    {
                                        index % 2 !== 0 ? <div className="xp--date-container">
                                            <span>{experience.dates.to}</span>
                                            <span>{experience.dates.from}</span>
                                        </div> : null
                                    }
                                    <div className={"xp--content " + experience.class}>
                                        <div className="xp--content-header">
                                            <div>{experience.title}</div>
                                            <div className="xp--content-dates">{experience.dates.from} - {experience.dates.to}</div>
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

export default Experience;