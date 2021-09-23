import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function AppNavbar() {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Sample Portfolio</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <Nav.Link href="#contactus">Contact Us</Nav.Link>
                <Nav.Link href="#products">Products</Nav.Link>
            </Nav>
        </Navbar>
    )
}