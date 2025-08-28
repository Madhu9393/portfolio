import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileMenuOpen: false
    };
  }

  componentDidMount() {
    // Close menu when clicking outside
    document.addEventListener('mousedown', this.handleClickOutside);
    // Handle window resize
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    if (window.innerWidth > 768) {
      this.setState({ isMobileMenuOpen: false });
    }
  };

  toggleMobileMenu = () => {
    this.setState(prevState => ({
      isMobileMenuOpen: !prevState.isMobileMenuOpen
    }));
  };

  closeMobileMenu = () => {
    if (window.innerWidth <= 768) {
      this.setState({ isMobileMenuOpen: false });
    }
  };

  handleClickOutside = (event) => {
    const menu = document.querySelector('.menu');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (menu && menuToggle && !menu.contains(event.target) && !menuToggle.contains(event.target)) {
      this.closeMobileMenu();
    }
  };

  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "home";
    const { isMobileMenuOpen } = this.state;
    
    const closeMobileMenu = this.closeMobileMenu;
    const toggleMobileMenu = this.toggleMobileMenu;

    return (
      <>
        <SeoHeader />
        <Fade top duration={1000} distance="20px">
          <header className="header">
            <div className="header-container">
              <NavLink to={link} className="logo">
                <span className="logo-name" style={{ color: theme.text }}>
                  {greeting.logo_name}
                </span>
              </NavLink>
              
              <button 
                className={`menu-toggle ${isMobileMenuOpen ? 'open' : ''}`} 
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="navicon"></span>
              </button>
              <ul 
                className={`menu ${isMobileMenuOpen ? 'open' : ''}`} 
                style={{ backgroundColor: theme.body }}
                aria-hidden={!isMobileMenuOpen}
                role="menu"
              >
                <li role="none">
                  <NavLink
                    to="/home"
                    className={({ isActive }) => isActive ? 'active' : ''}
                    style={{ color: theme.text }}
                    onClick={closeMobileMenu}
                    onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                    onMouseOut={onMouseOut}
                    role="menuitem"
                  >
                    Home
                  </NavLink>
                </li>
                <li role="none">
                  <NavLink
                    to="/education"
                    className={({ isActive }) => isActive ? 'active' : ''}
                    style={{ color: theme.text }}
                    onClick={closeMobileMenu}
                    onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                    onMouseOut={onMouseOut}
                    role="menuitem"
                  >
                    Education
                  </NavLink>
                </li>
                <li role="none">
                  <NavLink
                    to="/experience"
                    className={({ isActive }) => isActive ? 'active' : ''}
                    style={{ color: theme.text }}
                    onClick={closeMobileMenu}
                    onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                    onMouseOut={onMouseOut}
                    role="menuitem"
                  >
                    Experience
                  </NavLink>
                </li>
                <li role="none">
                  <NavLink
                    to="/projects"
                    className={({ isActive }) => isActive ? 'active' : ''}
                    style={{ color: theme.text }}
                    onClick={closeMobileMenu}
                    onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                    onMouseOut={onMouseOut}
                    role="menuitem"
                  >
                    Projects
                  </NavLink>
                </li>
                <li role="none">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) => isActive ? 'active' : ''}
                    style={{ color: theme.text }}
                    onClick={closeMobileMenu}
                    onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                    onMouseOut={onMouseOut}
                    role="menuitem"
                  >
                    Contact Me
                  </NavLink>
                </li>
              </ul>
            </div>
          </header>
        </Fade>
      </>
    );
  }
}
export default Header;
