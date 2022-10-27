import React from "react";
import {
    Card, Col, Container, ListGroup, Row, Spinner, Tab, Tabs
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import Jumbotron from "../../../components/shared/Jumbotron/Jumbotron";
import CustomButton from "../../../components/UI/CustomButton/CustomButton";
import useFetch from "../../../hooks/useFetch";
import Layout from "../../../layout/Layout";

const CourseDetails = () => {
    const pdfRef = React.createRef();
    const { id } = useParams();
    const { data, loading } = useFetch("https://course-server-delta.vercel.app/courses", id);

    const { img, name, description, intro, overview } = data;
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
                <div>
                    <Jumbotron
                        className="mt-5"
                        name={name}
                        intro={intro}
                        pdfRef={pdfRef}
                    />
                    <Container ref={pdfRef} className="mt-4">
                        <Row>
                            <Col lg={8} md={6} sm={12} className="mb-4">
                                <Card className="p-4">
                                    <Card.Title className="mb-3"> {name}</Card.Title>
                                    <Tabs
                                        defaultActiveKey="overview"
                                        id="uncontrolled-tab-example"
                                        className="mb-3"
                                    >
                                        <Tab
                                            eventKey="overview"
                                            title="Overview"
                                        >
                                            <ListGroup>
                                                {overview?.map((ov, index) => (
                                                    <ListGroup.Item key={index}>
                                                        {ov}
                                                    </ListGroup.Item>
                                                ))}
                                            </ListGroup>
                                        </Tab>
                                        <Tab
                                            eventKey="description"
                                            title="Description"
                                        >
                                            {description}
                                        </Tab>
                                    </Tabs>
                                </Card>
                            </Col>
                            <Col lg={4} md={6} sm={12} className="mb-4">
                                <Card>
                                    <Card.Img
                                        variant="top"
                                        alt={name}
                                        src={img}
                                        style={{ height: "400px" }}
                                        className="img-fluid"
                                    />
                                </Card>
                                <CustomButton id={id} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            )}
        </Layout>
    );
};

export default CourseDetails;
