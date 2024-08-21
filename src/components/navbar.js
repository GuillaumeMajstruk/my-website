import {
    Switch,
    NavLink,
    Route,
    useLocation
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
    Contact,
    Experience,
    Home,
    NotFound,
    Skills
} from "../views";
import { LanguageSelector } from './language-select';
import { withNamespaces } from 'react-i18next';
import LinkBtn from './link-btn';
import { useAppTheme } from '../hooks/useAppTheme';

const Nav = ({t}) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [hideContactButton, setHideContactButton] = useState(false);
    const location = useLocation();
    const { theme, setTheme } = useAppTheme();

    useEffect(() => setHideContactButton(location.pathname !== '/' && location.pathname !== '/contact'), [location]);
    useEffect(() => {
        if (theme) {
            if (theme === 'dark') {
                document.documentElement.classList.add("dark");
                document.getElementById("theme-slider").classList.remove("active");
                document.getElementById("theme-slider-mobile").classList.remove("active");
            } else {
                document.documentElement.classList.remove("dark");
                document.getElementById("theme-slider").classList.add("active");
                document.getElementById("theme-slider-mobile").classList.add("active");
            }
        }
    }, [theme]);

    const updateTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    const openCloseMenu = () => {
        document.getElementById("show-menu").classList.toggle("triggered");
        document.getElementById("navbar-mobile-actions").classList.toggle("open");
        setMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <div className="navbar">
                <div className="navbar--left">
                    <NavLink exact id="logo" to="/"><img src="logo192.png" alt="logo"></img></NavLink>
                    <NavLink exact className="navbar--link" activeClassName="navbar--link-active" to="/">{t('navigation.home')}</NavLink>
                    <NavLink exact className="navbar--link" activeClassName="navbar--link-active" to="/skills">{t('navigation.skills')}</NavLink>
                    <NavLink exact className="navbar--link" activeClassName="navbar--link-active" to="/experience">{t('navigation.xp')}</NavLink>
                    <NavLink exact className="navbar--link" activeClassName="navbar--link-active" to="/contact">{t('navigation.contact')}</NavLink>
                </div>
                <div className="navbar--right">
                    { hideContactButton && <LinkBtn destination="/contact" />}
                    <LanguageSelector />
                    <div id="theme-slider" className="slider active" onClick={updateTheme}></div>
                </div>
            </div>
            <div></div>
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
                            <div className="mb-xs"><NavLink exact className="navbar-mobile--link" activeClassName="navbar-mobile--link-active" to="/" onClick={() => openCloseMenu()}>{t('navigation.home')}</NavLink></div>
                            <div className="mb-xs"><NavLink exact className="navbar-mobile--link" activeClassName="navbar-mobile--link-active" to="/skills" onClick={() => openCloseMenu()}>{t('navigation.skills')}</NavLink></div>
                            <div className="mb-xs"><NavLink exact className="navbar-mobile--link" activeClassName="navbar-mobile--link-active" to="/experience" onClick={() => openCloseMenu()}>{t('navigation.xp')}</NavLink></div>
                            <div><NavLink exact className="navbar-mobile--link" activeClassName="navbar-mobile--link-active" to="/contact" onClick={() => openCloseMenu()}>{t('navigation.contact')}</NavLink></div>
                        </div>
                        <div>
                            <a href="cv-guillaume-majstruk.pdf" download="Majstruk-Guillaume-Resume">
                                <div className="button button-outlined">download resume</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="navbar-mobile--buttons-row">
                    <div id="theme-slider-mobile" className="slider active" onClick={updateTheme}></div>
                    <div id="show-menu-container" onClick={() => openCloseMenu()}>
                        <div id="show-menu"></div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default withNamespaces()(Nav);
