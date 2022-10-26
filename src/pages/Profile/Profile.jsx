import React from "react";
import Layout from "../../layout/Layout";
import { Form, Button, Container, Col, Row, Figure } from "react-bootstrap";
import { useAuth } from "./../../contexts/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const Profile = () => {
    const { user, setLoading, userProfileUpdate } = useAuth();

    const handleUserProfileUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.fullName.value;
        const photoURL = form.photoURL.value;

        // validation
        if (!fullName) {
            return toast.error("Please Enter Full Name!");
        }
        if (!photoURL) {
            return toast.error("Please Enter Photo Url!");
        }

        const profile = {
            displayName: fullName,
            photoURL: photoURL,
        };
        userProfileUpdate(profile)
            .then((result) => {
                toast.success("Profile is Updated!");
            })
            .catch((error) => {
                toast.error(error);
                setLoading(false);
            })
            .finally(() => {
                setLoading(false);
            });
    };
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
                        <Form onSubmit={handleUserProfileUpdate}>
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

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label className="text-white">
                                    FullName
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="fullName"
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
                                    name="photoURL"
                                    defaultValue={user?.photoURL}
                                    placeholder="Enter PhotoURL"
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
