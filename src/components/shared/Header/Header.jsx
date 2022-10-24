import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <>
            <Navbar
                className={classes.navBar}
                expand="lg"
                bg="dark"
                variant="dark"
            >
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand className={classes.logo}>
                            EduTech
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={`${classes.centerNavbar} d-flex justify-content-between`}>
                            <div className="d-flex">
                                <LinkContainer to="/">
                                    <Nav.Link className={classes.navLink}>
                                        Home
                                    </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/courses">
                                    <Nav.Link className={classes.navLink}>
                                        Courses
                                    </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/blog">
                                    <Nav.Link className={classes.navLink}>
                                        Blog
                                    </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/faq">
                                    <Nav.Link className={classes.navLink}>
                                        FAQ
                                    </Nav.Link>
                                </LinkContainer>
                            </div>
                            <div className="d-flex">
                                <LinkContainer to="/login">
                                    <Nav.Link className={classes.navLink}>
                                        Login
                                    </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/profile">
                                    <Nav.Link className={classes.navLink}>
                                        Profile
                                    </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/register">
                                    <Nav.Link className={classes.navLink}>
                                        Register
                                    </Nav.Link>
                                </LinkContainer>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
