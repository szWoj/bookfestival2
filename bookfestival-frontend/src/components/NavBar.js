import './NavBar.css';

import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand
} from 'reactstrap';
// import { whenTransitionDone } from 'fullcalendar';
const NavBar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div style={{
            display: 'inline', width: '100%', position: 'fixed'
        }}>
            <Navbar style={{backgroundColor:'#D6D5C9'}} light expand="md">
            <img src={require("./images/BOOKME.png")} className="logo"></img>
                <NavbarBrand href="/" style={{color: 'red', fontSize: '2.2em', borderRadius: '5px', fontFamily: 'Hind Madurai, sans-serif'}}>Events</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <NavbarBrand href="/venues" style={{color: 'red', fontSize: '2.2em', borderRadius: '5px', fontFamily: 'Hind Madurai, sans-serif'}}>Venue</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <NavbarBrand href="/calendar" style={{color: 'red', fontSize: '2.2em', borderRadius: '5px', fontFamily: 'Hind Madurai, sans-serif'}}>Events Calendar</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                {/* <NavbarBrand href="/events">Events</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} /> */}
                
                {/* <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/events">Events</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/venues">Venues</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Signup</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse> */}
            </Navbar>
        </div >
    );
}
export default NavBar;