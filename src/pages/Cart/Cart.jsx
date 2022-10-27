import React from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import ReviewItems from "../../components/shared/ReviewItem/ReviewItems";
import Layout from "../../layout/Layout";
import useFetch from "./../../hooks/useFetch";

const Cart = () => {
    const { id } = useParams();
    const { data, loading } = useFetch("https://course-server-delta.vercel.app/courses", id);
    const handleAccessItem = () => {
        toast.success("Course Access Successfully!");
    };

    return (
        <Layout>
            {loading ? (
                <div
                    style={{ height: "400px" }}
                    className="d-flex justify-content-center align-items-center"
                >
                    <Spinner animation="border" variant="info" />
                </div>
            ) : (
                <Container>
                    <h3 className="text-white mt-5 mb-4">Shopping Cart</h3>
                    <Row>
                        <Col lg={8}>
                            <ReviewItems course={data} />
                        </Col>
                        <Col lg={4}>
                            <div className="d-grid gap-2">
                                <Button
                                    size="lg"
                                    className="text-white border border-white"
                                    variant="outline-dark"
                                    onClick={handleAccessItem}
                                >
                                    Checkout
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            )}
        </Layout>
    );
};

export default Cart;
