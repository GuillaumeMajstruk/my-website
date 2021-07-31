import {
    NavLink,
} from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="column container fullscreen center-h center-v">
            <div></div>
            <div className="center-h h-100 ml-auto mr-auto">
                <div className="column">
                    <div className="background-header not-found--header">
                        404
                    </div>
                    <div className="background-header--not-found">
                        page not found
                    </div>
                    <div>Oops, the page you were looking for doesn’t exists…</div>
                    <div style={{fontSize: "1.8rem"}} className="mt-sm"><strong>Not such a big deal, visit the other ones:</strong></div>
                    <div className="mt-xs row gap center-h">
                        <NavLink exact className="navbar-mobile--link navbar-mobile--link-active" to="/">home</NavLink>
                        <NavLink exact className="navbar-mobile--link navbar-mobile--link-active" to="/skills">skills</NavLink>
                        <NavLink exact className="navbar-mobile--link navbar-mobile--link-active" to="/experience">experience</NavLink>
                        <NavLink exact className="navbar-mobile--link navbar-mobile--link-active" to="/hobbies">hobbies</NavLink>
                        <NavLink exact className="navbar-mobile--link navbar-mobile--link-active" to="/contact">contact</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NotFound;