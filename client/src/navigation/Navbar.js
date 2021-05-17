import React from 'react';
import './Navbar.css';
import {NavLink, Navbar, Nav} from "react-bootstrap";

const TaggerNavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <NavLink href="/annotate" active={setActive("annotate") || setActive("")}>Annotate</NavLink>
                    <NavLink href="/repository" active={setActive("repository")}>Repository</NavLink>
                    <NavLink href="/user" active={setActive("user")}>User Setting</NavLink>
                </Nav>
            </Navbar>
        </>
    )
}
const setActive = (url) =>{
    return  window.location.href.substring(window.location.href.lastIndexOf('/') + 1) === url
}

export default TaggerNavBar;
