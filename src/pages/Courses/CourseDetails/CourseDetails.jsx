import React, { useEffect, useState } from "react";
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
import CourseDetailsJumbotron from "../../../components/shared/CourseDetailsJumbotron/CourseDetailsJumbotron";
import Layout from "../../../layout/Layout";

const CourseDetails = () => {
    const [course, setCourse] = useState();
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const fetchCourse = async () => {
            const response = await fetch(`http://localhost:5000/courses/${id}`);
            const data = await response.json();
            setCourse(data);
            setLoading(false);
        };
        fetchCourse();
    }, [id]);

    return (
        <Layout>
            {loading ? (
                <h3 className="text-white text-center">Loading...</h3>
            ) : (
                <>
                    <CourseDetailsJumbotron
                        name={course.name}
                        description={course.description}
                    />
                    <Container className="mt-5">
                        <Row>
                            <Col lg={8} md={6} sm={12} className="mb-4">
                                <Card className="p-4">
                                    <Card.Title> {course.name}</Card.Title>
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
                                                {course.overview.map(
                                                    (ov, index) => (
                                                        <ListGroup.Item
                                                            key={index}
                                                        >
                                                            {ov}
                                                        </ListGroup.Item>
                                                    )
                                                )}
                                            </ListGroup>
                                        </Tab>
                                        <Tab
                                            eventKey="description"
                                            title="Description"
                                        >
                                            {course.description}
                                        </Tab>
                                    </Tabs>
                                </Card>
                            </Col>
                            <Col lg={4} md={6} sm={12} className="mb-4">
                                <Card>
                                    <Card.Img
                                        variant="top"
                                        alt={course.name}
                                        src={course.img}
                                        style={{ height: "400px" }}
                                        className="img-fluid"
                                    />
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </>
            )}
        </Layout>
    );
};

export default CourseDetails;
