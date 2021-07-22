import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import {faHourglassHalf} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className="column container fullscreen center-h center-v">
            <div className="background-header">Contact</div>
            <div className="center-h h-100 ml-auto mr-auto" style={{width: "90%"}}>
                <div id="contact-col" className="column h-100 center-v ml-auto mr-auto gap">
                    <h2 className="font-rhyme">ASK ME ABOUT EVERYTHING YOU WANT</h2>
                    <h3 className="font-space text-normal mt-xs mb-sm">I'll be responding you ASAP <Icon icon={faHourglassHalf}></Icon></h3>
                    <div className="gap" style={{
                        display: "flex",
                        flexFlow: "row wrap"
                    }}>
                        <input type="text" placeholder="firstname..."></input>
                        <input type="text" placeholder="lastname..."></input>
                    </div>
                    <div className="gap" style={{
                        display: "flex",
                        flexFlow: "row wrap"
                    }}>
                        <input type="text" placeholder="email..."></input>
                        <input type="text" placeholder="subject..."></input>
                    </div>
                    <div className="gap" style={{
                        display: "flex",
                        flexFlow: "row wrap"
                    }}>
                        <textarea placeholder="your message"></textarea>
                    </div>
                    <button className="button">Send</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;