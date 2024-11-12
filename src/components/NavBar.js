import { useState, useEffect} from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
        <NavBar expand="mg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                    <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                    <Nav.Link as={HashLink} to="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link as={HashLink} to="#gallery" className={activeLink === 'gallery' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('gallery')}>Gallery</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                        <button className="social-icon-btn" onClick={() => {}}>
                            <img src={navIcon1} alt="Social Icon 1" /></button>
                        <button className="social-icon-btn" onClick={() => {}}>
                            <img src={navIcon2} alt="Social Icon 2" /></button>
                        <button className="social-icon-btn" onClick={() => {}}>
                            <img src={navIcon3} alt="Social Icon 3" /></button>
                        </div>
                        <HashLink to='#connect'>
                        <button className="vvd"><span>Check It Out!</span></button>
                        </HashLink>
                    </span>
                </Navbar.Collapse>
            </Container>
        </NavBar>
   )
}
    
