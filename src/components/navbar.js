import {
    BrowserRouter as Router,
    Switch,
    NavLink,
    Route
} from 'react-router-dom';
import Home from "../views/Home";
import Skills from "../views/Skills";

const Nav = () => {
    const switchTheme = () => {
        document.documentElement.classList.toggle("dark");
        document.getElementById("theme-slider").classList.toggle("active");
    }

    return (
        <Router>
            <div className="navbar">
                <div className="navbar--left">
                    <NavLink exact className="navbar--link" activeClassName="navbar--link-active" to="/">home</NavLink>
                    <NavLink exact className="navbar--link" activeClassName="navbar--link-active" to="/skills">skills</NavLink>
                    <NavLink exact className="navbar--link" activeClassName="navbar--link-active" to="/experience">experience</NavLink>
                    <NavLink exact className="navbar--link" activeClassName="navbar--link-active" to="/hobbies">hobbies</NavLink>
                    <NavLink exact className="navbar--link" activeClassName="navbar--link-active" to="/contact">contact</NavLink>
                </div>
                <div className="navbar--right">
                    <div className="button button-outlined">download my resume</div>
                    <div id="theme-slider" className="slider active" onClick={() => switchTheme()}></div>
                </div>
            </div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/skills">
                    <Skills />
                </Route>
            </Switch>
        </Router>
    )
};

export default Nav;