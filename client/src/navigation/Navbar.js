import React from 'react';
import './Navbar.css';
import {Nav, Navbar, NavLink} from "react-bootstrap";

const TaggerNavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <NavLink href={process.env.PUBLIC_URL + "/annotate"}
                             active={setActive("annotate") || setActive("")}>Annotate</NavLink>
                    <NavLink href={process.env.PUBLIC_URL + "/repository"}
                             active={setActive("repository")}>Repository</NavLink>
                    <NavLink href={process.env.PUBLIC_URL + "/user"} active={setActive("user")}>Tagged-Images</NavLink>
                </Nav>
            </Navbar>
        </>
    )
}
const setActive = (url) => {
    return window.location.href.substring(window.location.href.lastIndexOf('/') + 1) === url
}

export default TaggerNavBar;
