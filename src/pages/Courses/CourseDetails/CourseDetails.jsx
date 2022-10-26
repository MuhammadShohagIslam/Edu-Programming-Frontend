import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Tabs,
    Tab,
    ListGroup,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import Jumbotron from "../../../components/shared/Jumbotron/Jumbotron";
import useFetch from "../../../hooks/useFetch";
import Layout from "../../../layout/Layout";
import CustomButton from "../../../components/UI/CustomButton/CustomButton";

const CourseDetails = () => {
    const pdfRef = React.createRef();
    const { id } = useParams();
    const { data, loading } = useFetch("http://localhost:5000/courses", id);

    const { img, name, description, intro, overview } = data;
    return (
        <Layout>
            {loading ? (
                <h3 className="text-white text-center">Loading...</h3>
            ) : (
                <div>
                    <Jumbotron
                        className="mt-5"
                        name={name}
                        intro={intro}
                        pdfRef={pdfRef}
                    />
                    <Container ref={pdfRef}>
                        <Row>
                            <Col lg={8} md={6} sm={12} className="mb-4">
                                <Card className="p-4">
                                    <Card.Title> {name}</Card.Title>
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
