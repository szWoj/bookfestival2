import './NavBar.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
const NavBar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div style={{
            display: 'inline', width: 550, padding: 10
        }}>
            <h5>Book Festival</h5>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Events</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <NavbarBrand href="/calendar">Events Calendar</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <NavbarBrand href="/venues">Venue</NavbarBrand>
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