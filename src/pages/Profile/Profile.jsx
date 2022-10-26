import React from "react";
import Layout from "../../layout/Layout";
import { Form, Button, Container, Col, Row, Figure } from "react-bootstrap";
import { useAuth } from './../../contexts/AuthProvider/AuthProvider';


const Profile = () => {
    const {user} = useAuth();
    return (
        <Layout>
            <Container className="my-5">
                <Row>
                    <Col lg={7} className="m-auto">
                        <Figure className="text-center w-100">
                            <Figure.Image
                                width={100}
                                height={100}
                                alt="profile"
                                roundedCircle
                                src={`${user?.photoURL}`}
                            />
                        </Figure>
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
                                    defaultValue={user?.displayName}
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
                                    defaultValue={user?.photoURL}
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
                                    disabled
                                    defaultValue={user?.email}
                                    placeholder="Enter Email"
                                />
                            </Form.Group>

                            <Button
                                size="lg"
                                className="text-white border border-white"
                                variant="outline-dark"
                                type="submit"
                            >
                                Save
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default Profile;
