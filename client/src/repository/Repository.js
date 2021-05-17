import React, {useState} from 'react';
import './Navbar.css';
import ReactImageAnnotate from "react-image-annotate";

const Navbar = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}
export default Navbar;
