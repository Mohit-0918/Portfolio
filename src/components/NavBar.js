import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from '../assets/img/Logo3.png';  
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon5 from '../assets/img/nav-icon5.svg';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // Track menu state

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    const handleToggle = () => {
        setMenuOpen(!menuOpen); // Toggle menu state
    };

    return (
        <Router>
            <Navbar expand="md" className={`${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            alt="logo"
                            style={{ transform: `scale(${window.innerWidth <= 450 ? 2 : 1})` }} // Dynamic scaling
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}>
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/mohit-sharma0918" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
                                <a href="https://github.com/Mohit-0918" target="_blank" rel="noopener noreferrer"><img src={navIcon5} alt="" style={{ transform: "scale(1.5)" }} /></a>
                                <a href="https://www.linkedin.com/in/mohit-sharma0918" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="" /></a>
                            </div>
                            <a
                              href="#connect"
                              className={
                                (activeLink === 'connect' ? 'active navbar-link ' : '') + 'lets-connect-btn'
                              }
                              onClick={() => onUpdateActiveLink('connect')}
                            >
                              <span>Lets Connect</span>
                            </a>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
}