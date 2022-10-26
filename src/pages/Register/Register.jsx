import React from "react";
import Layout from "../../layout/Layout";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <Layout>
            <Container className="my-5">
                <Row>
                    <Col lg={5} className="m-auto">
                        <h2 className="text-white text-center mb-3">
                            Register and Start Learning
                        </h2>

                        <div className="d-grid gap-2">
                            <Button
                                className="fs-5 text-white border border-white d-flex justify-content-center"
                                variant="outline-dark"
                                size="lg"
                            >
                                <div>
                                    <FaGoogle className="align-baseline mt-1  me-1 fs-4" />
                                </div>
                                <div>Continue with Google</div>
                            </Button>
                            <Button
                                className="fs-5 text-white border border-white d-flex justify-content-center"
                                variant="outline-dark"
                                size="lg"
                            >
                                <div>
                                    {" "}
                                    <FaGithub className="align-baseline mt-1 me-1 fs-4" />{" "}
                                </div>
                                <div>Continue with Github</div>
                            </Button>
                        </div>
                        <h3 className="text-white text-center mt-2">Or</h3>
                        <Form>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label className="text-white">
                                    FullName
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="fullname"
                                    placeholder="Enter Full Name"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label className="text-white">
                                    PhotoURL
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="PhotoURL"
                                    placeholder="Enter PhotoURL"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label className="text-white">
                                    Email address
                                </Form.Label>
                                <Form.Control
                                    name="email"
                                    type="email"
                                    placeholder="Enter Email"
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Label className="text-white">
                                    Password
                                </Form.Label>
                                <Form.Control
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicCheckbox"
                            >
                                <Form.Check
                                    className="text-white"
                                    type="checkbox"
                                    label={
                                        <>
                                            By Register, you agree to our
                                            <Link
                                                className="mx-1 text-decoration-underline"
                                                to="/term-condition"
                                            >
                                                Terms of Use
                                            </Link>
                                            and
                                            <Link
                                                className="ms-1 text-decoration-underline"
                                                to="/privacy-policy"
                                            >
                                                Privacy Policy
                                            </Link>
                                        </>
                                    }
                                />
                            </Form.Group>
                            <Button
                                size="lg"
                                className="text-white border border-white"
                                variant="outline-dark"
                                type="submit"
                            >
                                Register
                            </Button>
                            <hr className="border border-white border-1 opacity-50 mt-5"></hr>
                            <p className="text-white text-center">
                                Already have an account?{" "}
                                <Link
                                    className="text-decoration-underline"
                                    to="/login"
                                >
                                    Log in
                                </Link>
                            </p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default Register;
