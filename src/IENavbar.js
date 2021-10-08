import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import { NavLink, Link} from "react-router-dom";


function IENavbar (props){

    var logoStroke = "/logo_stroke.png";
    var logo = "/logo.png"
    var srcV = logoStroke;
    var isNotHome = false;

    console.log("props: " + props.page);
    if(props.page !== "/"){
        srcV = logo;
        isNotHome = true;
    }

    return (
        <>
            <Navbar 
                className = "IENav"
                expand="lg"
                variant="dark"
                fixed= "top">
                <Container>
                    <Nav className="LinkNav">
                        <NavLink tag={Link} to="/">
                            
                            <img
                                alt="IEye Logo"
                                src= {srcV}
                                width="30"
                                height="30"
                                className="d-inline-block"
                                

                                onMouseOver= {e => (isNotHome) ? (e.currentTarget.src = logoStroke) : ""}
                                onMouseOut= {e => (isNotHome) ? (e.currentTarget.src = logo): ""}
                            />
                        </NavLink>
                        <NavLink tag={Link} to="/games"  Label="games" activeClassName = "ActiveLink" className = "UnactiveLink">Games </NavLink>
                        <NavLink tag={Link} to="/comics" Label="comics" activeClassName = "ActiveLink" className = "UnactiveLink">Comics </NavLink>
                        <NavLink tag={Link} to="/about" Label="about" activeClassName = "ActiveLink" className = "UnactiveLink">About </NavLink>
                        <NavLink tag={Link} to="/contact" Label="contact" activeClassName = "ActiveLink" className = "UnactiveLink">Contact </NavLink>
                    </Nav>
                </Container>
            </Navbar>
            
        </>
    );
    
}


export default IENavbar;