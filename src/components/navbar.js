import {
    BrowserRouter as Router,
    Switch,
    NavLink,
    Route
} from 'react-router-dom';
import { useState } from 'react';
import {
    Contact,
    Experience,
    // Hobbies,
    Home,
    MyWork,
    NotFound,
    Skills
} from "../views";

const Nav = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const switchTheme = () => {
        document.documentElement.classList.toggle("dark");
        document.getElementById("theme-slider").classList.toggle("active");
        document.getElementById("theme-slider-mobile").classList.toggle("active");
    }

    const openCloseMenu = () => {
        document.getElementById("show-menu").classList.toggle("triggered");
        document.getElementById("navbar-mobile-actions").classList.toggle("open");
        setMenuOpen(!isMenuOpen);
    }

    return (
        <Router>
            <div className="navbar">
                <div className="navbar--left">
                    <NavLink exact id="logo" to="/"><img src="logo192.png" alt="logo"></img></NavLink>
                    <NavLink exact className="navbar--link" activeClassName="navbar--link-active" to="/">home</NavLink>
                    <NavLink exact className="navbar--link" activeClassName="navbar--link-active" to="/skills">skills</NavLink>
                    <NavLink exact className="navbar--link" activeClassName="navbar--link-active" to="/experience">experience</NavLink>
                    {/* <NavLink exact className="navbar--link" activeClassName="navbar--link-active" to="/hobbies">hobbies</NavLink> */}
                    <NavLink exact className="navbar--link" activeClassName="navbar--link-active" to="/my-work">my work</NavLink>
                    <NavLink exact className="navbar--link" activeClassName="navbar--link-active" to="/contact">contact</NavLink>
                </div>
                <div className="navbar--right">
                    <a href="cv-guillaume-majstruk.pdf" download="Majstruk-Guillaume-Resume">
                        <div className="button button-outlined">download resume</div>
                    </a>
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
                <Route path="/experience">
                    <Experience />
                </Route>
                {/* <Route path="/hobbies">
                    <Hobbies />
                </Route> */}
                <Route path="/my-work">
                    <MyWork />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
            <div className="navbar-mobile">
                <div id="navbar-mobile-actions" className="navbar-mobile--actions">
                    <div id="navbar-mobile--grid" className="grid-wrapper">
                        <div>
                            <div className="mb-xs"><NavLink exact className="navbar-mobile--link" activeClassName="navbar-mobile--link-active" to="/" onClick={() => openCloseMenu()}>home</NavLink></div>
                            <div className="mb-xs"><NavLink exact className="navbar-mobile--link" activeClassName="navbar-mobile--link-active" to="/skills" onClick={() => openCloseMenu()}>skills</NavLink></div>
                            <div className="mb-xs"><NavLink exact className="navbar-mobile--link" activeClassName="navbar-mobile--link-active" to="/experience" onClick={() => openCloseMenu()}>experience</NavLink></div>
                            <div className="mb-xs"><NavLink exact className="navbar-mobile--link" activeClassName="navbar-mobile--link-active" to="/my-work" onClick={() => openCloseMenu()}>my work</NavLink></div>
                            <div><NavLink exact className="navbar-mobile--link" activeClassName="navbar-mobile--link-active" to="/contact" onClick={() => openCloseMenu()}>contact</NavLink></div>
                        </div>
                        <div>
                            <a href="cv-guillaume-majstruk.pdf" download="Majstruk-Guillaume-Resume">
                                <div className="button button-outlined">download resume</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="navbar-mobile--buttons-row">
                    <div id="theme-slider-mobile" className="slider active" onClick={() => switchTheme()}></div>
                    <div id="show-menu-container" onClick={() => openCloseMenu()}>
                        <div id="show-menu"></div>
                    </div>
                </div>
            </div>
        </Router>
    )
};

export default Nav;