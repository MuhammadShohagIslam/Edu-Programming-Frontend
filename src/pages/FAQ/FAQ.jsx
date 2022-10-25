import React from "react";
import Layout from "../../layout/Layout";
import { Container, Row, Col } from "react-bootstrap";
import SingleFAQ from "../../components/shared/SingleFAQ/SingleFAQ";
import { Accordion } from "react-bootstrap";
import useFetchFAQ from "../../hooks/useFetchFAQ";

const FAQ = () => {
    const { data, loading } = useFetchFAQ();
    const defaultActiveKeyArray = data.map(d=> d.id);
    
    return (
        <Layout>
            <article className="mt-5 mb-4">
                <Container>
                    <Row className="ms-0 me-0">
                        {loading ? (
                            <h2 className="text-white text-center">
                                Loading...
                            </h2>
                        ) : (
                            <>
                                <Col md={8} className="m-auto bg-white mb-4 p-0">

                                    <Accordion alwaysOpen defaultActiveKey={defaultActiveKeyArray}>
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
