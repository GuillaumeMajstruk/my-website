import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faCode, faLanguage, faUserTie } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    return (
        <div className="column container fullscreen center-h center-v">
            <div className="background-header">skills</div>
            <div className="center-h h-100 ml-auto mr-auto" style={{width: "90%"}}>
                <div className="column h-100 center-v">
                    <h2 className="font-rhyme text-light">WHAT ARE MY <strong>SKILLS? #</strong></h2>
                    <h3 className="font-space text-normal mt-xs">Any question(s)? Fill free to <button className="button text-bold">contact me</button></h3>
                    <div id="skill-grid" className="grid-wrapper space-between mt-lg w-100" style={{fontSize: "1.8rem"}}>
                        <div className="w-100">
                            <div className="row space-between mb-xs">
                                <h3 className="text-bold">Technicals</h3>
                                <Icon icon={faCode}></Icon>
                            </div>
                            <div className="grid-item">
                                <div className="text-start font-rhyme" >
                                    <div>Javascript</div>
                                    <div>Typescript</div>
                                </div>
                                <div className="text-end text-muted font-space">Advanced</div>
                                <div className="text-start font-rhyme">
                                    <div>Angular 2+</div>
                                </div>
                                <div className="text-end text-muted font-space">advanced</div>
                                <div className="text-start font-rhyme">
                                    <div>Vue.js</div>
                                </div>
                                <div className="text-end text-muted font-space">Medium</div>
                                <div className="text-start font-rhyme">
                                    <div>Html</div>
                                    <div>Css</div>
                                </div>
                                <div className="text-end text-muted font-space">High</div>
                                <div className="text-start font-rhyme">
                                    <div>MongoDb</div>
                                </div>
                                <div className="text-end text-muted font-space">High</div>
                                <div className="text-start font-rhyme">
                                    <div>Neo4j</div>
                                </div>
                                <div className="text-end text-muted font-space">High</div>
                                <div className="text-start font-rhyme">
                                    <div>Git</div>
                                </div>
                                <div className="text-end text-muted font-space">High</div>
                                <div className="text-start font-rhyme">
                                    <div>Docker</div>
                                </div>
                                <div className="text-end text-muted font-space">Beginner</div>
                            </div>
                        </div>
                        <div className="w-100">
                            <div className="row w-100 space-between mb-xs">
                                <h3 className="text-bold">Professionals</h3>
                                <Icon icon={faUserTie}></Icon>
                            </div>
                            <div className="grid-item">
                                <div className="text-start font-rhyme" >
                                    <div>Rigor</div>
                                </div>
                                <div className="text-end text-ok font-space"></div>
                                <div className="text-start font-rhyme" >
                                    <div>Team working</div>
                                </div>
                                <div className="text-end text-ok font-space"></div>
                                <div className="text-start font-rhyme" >
                                    <div>Polyvalence</div>
                                </div>
                                <div className="text-end text-ok font-space"></div>
                                <div className="text-start font-rhyme" >
                                    <div>Autonomy</div>
                                </div>
                                <div className="text-end text-ok font-space"></div>
                                <div className="text-start font-rhyme" >
                                    <div>Project managment</div>
                                </div>
                                <div className="text-end text-ok font-space"></div>
                            </div>
                        </div>
                        <div className="w-100">
                            <div className="row w-100 space-between mb-xs">
                                <h3 className="text-bold">Languages</h3>
                                <Icon icon={faLanguage}></Icon>
                            </div>
                            <div className="grid-item">
                                <div className="text-start font-rhyme" >
                                    <div>French</div>
                                </div>
                                <div className="text-end text-muted font-space">Native</div>
                                <div className="text-start font-rhyme" >
                                    <div>English</div>
                                </div>
                                <div className="text-end text-muted font-space">Professional</div>
                                <div className="text-start font-rhyme" >
                                    <div>Spanish</div>
                                </div>
                                <div className="text-end text-muted font-space">High</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;