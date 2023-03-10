import React from "react";
import Layout from "../../layout/Layout";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { useAuth } from "./../../contexts/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
    const {
        setUser,
        loginWithEmailAndPassword,
        registerAndLoginWithProvider,
        setLoading,
    } = useAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // validation
        if (!email) {
            return toast.error("Please Enter Email!");
        }
        if (!password) {
            return toast.error("Please Enter Password!");
        }

        loginWithEmailAndPassword(email, password)
            .then((result) => {
                if (result.user.emailVerified) {
                    form.reset();
                    toast.success("Login Successfully!");
                    setUser(result.user);
                    navigate(from, { replace: true });
                } else {
                    toast.success("Verify Your Email Address!");
                }
            })
            .catch((error) => {
                toast.error(error.message.split("Firebase: ").join(""));
            })
            .finally(() => {
                setLoading(false);
            });
    };
    const handleSignUpWithProvider = (event, providerName) => {
        event.preventDefault();
        if (providerName === "google") {
            popupForSignInProvider(googleProvider);
        }
        if (providerName === "github") {
            popupForSignInProvider(githubProvider);
        }
    };

    const popupForSignInProvider = (provider) => {
        registerAndLoginWithProvider(provider)
            .then((result) => {
                if (provider.providerId === "github.com") {
                    result.user.emailVerified = true;
                    setUser(result.user);
                }
                navigate(from, { replace: true });
            })
            .catch((error) => {
                toast.error(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    return (
        <Layout>
            <Container className="my-5">
                <Row>
                    <Col lg={5} className="m-auto">
                        <h2 className="text-white text-center mb-3">
                            Log in to your EduTech Account
                        </h2>

                        <div className="d-grid gap-2">
                            <Button
                                className="fs-5 text-white border border-white d-flex justify-content-center"
                                variant="outline-dark"
                                size="lg"
                                onClick={(e) =>
                                    handleSignUpWithProvider(e, "google")
                                }
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
                                onClick={(e) =>
                                    handleSignUpWithProvider(e, "github")
                                }
                            >
                                <div>
                                    {" "}
                                    <FaGithub className="align-baseline mt-1 me-1 fs-4" />{" "}
                                </div>
                                <div>Continue with Github</div>
                            </Button>
                        </div>
                        <h3 className="text-white text-center mt-2">Or</h3>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label className="text-white">
                                    Email Address
                                </Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Enter email"
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
                                    type="password"
                                    required
                                    name="password"
                                    placeholder="Password"
                                />
                            </Form.Group>
                            <Button
                                size="lg"
                                className="text-white border border-white"
                                variant="outline-dark"
                                type="submit"
                            >
                                Login
                            </Button>
                            <hr className="border border-white border-1 opacity-50 mt-5"></hr>
                            <p className="text-white text-center">
                                Don't have an account?{" "}
                                <Link
                                    className="text-decoration-underline"
                                    to="/register"
                                >
                                    Register
                                </Link>
                            </p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default Login;
