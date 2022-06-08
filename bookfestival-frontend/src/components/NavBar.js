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
    NavbarBrand,
} from 'reactstrap';
import Dropdown from 'react-bootstrap/Dropdown';
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
                <NavbarBrand href="/venues">Venue</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <NavbarBrand href="/calendar">Events Calendar</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />

                <Dropdown>
                    <Dropdown.Toggle variant="success">
                        Select price range
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    <Dropdown.Item href="/">
                        All Events
                    </Dropdown.Item>
                    <Dropdown.Item href="/free">
                        Free events
                    </Dropdown.Item>
                    <Dropdown.Item href="/midRange">
                    £0-£10
                    </Dropdown.Item>
                    <Dropdown.Item href="/expensive">
                    Above £10
                    </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar>
        </div >
    );
}
export default NavBar;