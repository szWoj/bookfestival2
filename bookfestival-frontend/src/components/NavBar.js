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
                
                <NavbarBrand href="/venues">Venues</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />

                {/* <NavbarBrand href="/events">Events</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} /> */}

                <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                
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