import React from "react";
import {
    Container,
    Navbar,
    Nav,
    Figure,
    OverlayTrigger,
    Tooltip,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import classes from "./Header.module.css";
import Logo from "../../../images/eduTech.png";
import { useAuth } from "../../../contexts/AuthProvider/AuthProvider";
import { AiOutlineLogout } from "react-icons/ai";

const Header = () => {
    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch((error) => {
                console.log(error);
            });
    };
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
                            <Figure.Image
                                width={30}
                                height={30}
                                alt="logo"
                                roundedCircle
                                src={Logo}
                            />
                            EduTech
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                            className={`${classes.centerNavbar} d-flex justify-content-between`}
                        >
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
                                {user ? (
                                    <>
                                        <LinkContainer to="/profile">
                                            <Nav.Link
                                                className={classes.navLink}
                                            >
                                                <OverlayTrigger
                                                    placement="left"
                                                    overlay={
                                                        <Tooltip
                                                            id={`tooltip-left`}
                                                        >
                                                            {user?.displayName}
                                                        </Tooltip>
                                                    }
                                                >
                                                    <Figure.Image
                                                        width={35}
                                                        height={35}
                                                        alt="profile"
                                                        roundedCircle
                                                        src={user?.photoURL}
                                                    />
                                                </OverlayTrigger>
                                            </Nav.Link>
                                        </LinkContainer>
                                        <span
                                            onClick={handleLogOut}
                                            className={classes.logOutIcon}
                                        >
                                            <AiOutlineLogout className="text-white fs-4" />
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <LinkContainer to="/login">
                                            <Nav.Link
                                                className={classes.navLink}
                                            >
                                                Login
                                            </Nav.Link>
                                        </LinkContainer>

                                        <LinkContainer to="/register">
                                            <Nav.Link
                                                className={classes.navLink}
                                            >
                                                Register
                                            </Nav.Link>
                                        </LinkContainer>
                                    </>
                                )}
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
