import React from "react";
import Layout from "../../layout/Layout";
import { useParams } from "react-router-dom";
import useFetch from "./../../hooks/useFetch";
import ReviewItems from "../../components/shared/ReviewItem/ReviewItems";
import toast from "react-hot-toast";
import { Container, Row, Col, Button } from "react-bootstrap";

const Cart = () => {
    const { id } = useParams();
    const { data, loading } = useFetch("http://localhost:5000/courses", id);
    const handleAccessItem = () => {
        toast.success("Course Access Successfully!");
    };

    return (
        <Layout>
            {loading ? (
                <h2 className="text-center text-white">Loading...</h2>
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
