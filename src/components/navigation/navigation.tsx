import React from 'react';
import { Navbar, Button } from 'react-bootstrap'
import logo from '../../assets/Frame 54.png';
import StyledNavigation from "./navigation.style";

export default function Navigation() {
    return (
        <StyledNavigation>
            <Navbar bg="dark" className="w-100 d-flex align-items-center justify-content-between py-10 px-84">
                <Navbar.Brand>
                    <img src={logo} alt="logo" width="170" className="cursor--pointer" />
                </Navbar.Brand>
                <ul className="d-flex align-items-center text-white gap-30 p-0 m-0">
                    <li className="cursor--pointer">Home</li>
                    <li className="cursor--pointer">Services</li>
                    <li className="cursor--pointer">About</li>
                    <li className="cursor--pointer">Pricing</li>
                </ul>
                <ul className="d-flex align-items-center text-white gap-30 p-0 m-0">
                    <li>Login</li>
                    <Button className="btn-primary">Sign Up</Button>
                </ul>
            </Navbar>
        </StyledNavigation>
    );
}
