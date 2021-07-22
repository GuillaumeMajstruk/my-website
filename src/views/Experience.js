import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
    return (
        <div className="column container fullscreen center-h center-v">
            <div className="background-header">xp</div>
            <div className="center-h h-100 ml-auto mr-auto" style={{width: "90%"}}>
                <div className="column h-100 center-v">
                    <h2 className="font-rhyme text-light">WHAT ABOUT MY <strong>CAREER?</strong>&nbsp;<Icon icon={faUserTie}></Icon></h2>
                    <span className="font-normal">Here is a timeline of it</span>
                    <h3 className="font-space text-normal mt-xs">You have a project? Talk with me! <button className="button text-bold">contact me</button></h3>
                </div>
            </div>
        </div>
    )
};

export default Experience;