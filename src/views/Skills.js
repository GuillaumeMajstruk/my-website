import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { SKILLS } from '../data';

const Skills = () => {
    return (
        <div className="column container fullscreen center-h center-v">
            <div className="background-header">skills</div>
            <div className="center-h h-100 ml-auto mr-auto" style={{ width: "90%" }}>
                <div className="column h-100 center-v">
                    <h2 className="font-rhyme text-light">WHAT ARE MY <strong>SKILLS? #</strong></h2>
                    <h3 className="font-space text-normal mt-xs">Any question(s)? Fill free to <Link className="button text-bold" to='/contact'>contact me</Link></h3>
                    <div id="skill-grid" className="grid-wrapper space-between mt-lg w-100" style={{ fontSize: "1.8rem" }}>
                        {
                            Object.keys(SKILLS).map((domain) =>
                                <div className="w-100" key={domain}>
                                    <div className="row space-between mb-xs">
                                        <h3 className="text-bold">{SKILLS[domain].title}</h3>
                                        <Icon icon={SKILLS[domain].icon}></Icon>
                                    </div>
                                    <div className="grid-item">
                                        {
                                            SKILLS[domain].skills.map((domainSkill, index) =>
                                                <Fragment key={index}>
                                                    <div className="text-start font-rhyme">
                                                        {domainSkill.values.map(v => <div key={v}>{v}</div>)}
                                                    </div>
                                                    <div className="text-end text-muted font-space">{domainSkill.state}</div>
                                                </Fragment>
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
