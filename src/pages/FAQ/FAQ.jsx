import React from "react";
import Layout from "../../layout/Layout";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import SingleFAQ from "../../components/shared/SingleFAQ/SingleFAQ";
import { Accordion } from "react-bootstrap";
import useFetchFAQ from "../../hooks/useFetchFAQ";

const FAQ = () => {
    const { data, loading } = useFetchFAQ();
    const defaultActiveKeyArray = data.map((d) => d.id);

    return (
        <Layout>
            <article className="mt-5 mb-4">
                <Container>
                    <Row className="ms-0 me-0">
                        {loading ? (
                            <div
                                style={{ height: "400px" }}
                                className="d-flex justify-content-center align-items-center"
                            >
                                <Spinner animation="border" variant="info" />
                            </div>
                        ) : (
                            <>
                                <Col
                                    md={8}
                                    className="m-auto bg-white mb-4 p-0"
                                >
                                    <Accordion
                                        alwaysOpen
                                        defaultActiveKey={defaultActiveKeyArray}
                                    >
                                        {data.map((faq) => (
                                            <SingleFAQ key={faq.id} faq={faq} />
                                        ))}
                                    </Accordion>
                                </Col>
                            </>
                        )}
                    </Row>
                </Container>
            </article>
        </Layout>
    );
};

export default FAQ;
