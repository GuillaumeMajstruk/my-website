import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faGamepad, faRunning } from '@fortawesome/free-solid-svg-icons';

const Hobbies = () => {
    return (
        <div className="column container fullscreen center-h center-v">
            <div className="background-header">hobbies</div>
            <div className=" center-h h-100 ml-auto mr-auto" style={{width: "90%"}}>
                <div className="column h-100 center-v">
                    <h2 className="font-rhyme text-light">WHAT ARE MY <strong>HOBBIES?</strong> &nbsp;<Icon icon={faGamepad}></Icon></h2>
                    <h3 className="font-space text-normal mt-xs">Want to talk about something or <strong>nothing</strong>? <button className="button text-bold">contact me</button></h3>
                    <div id="hobbies-grid" className="grid-wrapper space-between mt-lg w-100 ml-auto mr-auto" style={{fontSize: "1.8rem"}}>
                        <div className="">
                            <div className="row space-between mb-xs">
                                <h3 className="text-bold">Sports</h3>
                                <Icon icon={faRunning}></Icon>
                            </div>
                            <div>Running</div>
                            <div>Rock-climbing</div>
                            <div>Bycicle</div>
                        </div>
                        <div className="">
                            <div className="row space-between mb-xs">
                                <h3 className="text-bold">Miscellanious</h3>
                                <Icon icon={faEllipsisH}></Icon>
                            </div>
                            <div>Technology learning</div>
                            <div>(Web)design</div>
                            <div>Development</div>
                            <div>Music</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hobbies;