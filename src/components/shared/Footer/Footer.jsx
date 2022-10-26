import React from "react";
import classes from "./Footer.module.css";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="pt-5 pb-4 bg-dark text-white">
            <Container>
                <Row>
                    <Col lg={6} md={6}>
                        <h3>EduTech</h3>
                        <p>
                            EduTech is an online learning and teaching
                            marketplace with over 6 courses. Learn programming,
                            marketing and more.
                        </p>
                    </Col>
                    <Col lg={3} md={6}>
                        <h4>Information</h4>
                        <ul className="ps-0">
                            <li>
                                <Link className={classes.navLink} to="/courses">
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link className={classes.navLink} to="/blog">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link className={classes.navLink} to="/faq">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={3} md={6}>
                        <h4>Legal</h4>
                        <ul className="ps-0">
                            <li>
                                <Link
                                    className={classes.navLink}
                                    to="/term-condition"
                                >
                                    Term And Condition
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={classes.navLink}
                                    to="/privacy-policy"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <hr class="border border-white border-1 opacity-50 mt-2"></hr>
                <p className={`${classes.footerParagarph} text-center mb-0`}>
                    Copyright &#169; 2022 EduTech
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
