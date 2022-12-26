import React from 'react';
import { Navbar, Button } from 'react-bootstrap'
import logo from '../../assets/Frame 54.png';
import StyledNavigation from "./navigation.style";

export default function Navigation() {
    return (
        <StyledNavigation>
            <Navbar bg="dark" className="w-100 d-flex align-items-center justify-content-between py-10 px-84">
                <Navbar.Brand>
                    <img src={logo} alt="logo" width="170" />
                </Navbar.Brand>
                <ul className="d-flex align-items-center text-white gap-30 p-0 m-0">
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Pricing</li>
                </ul>
                <ul className="d-flex align-items-center text-white gap-30 p-0 m-0">
                    <li>Login</li>
                    <Button className="btn-primary">Sign Up</Button>
                </ul>
            </Navbar>
        </StyledNavigation>
    );
}
