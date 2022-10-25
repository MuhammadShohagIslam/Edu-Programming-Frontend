import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CourseCard from "../../components/shared/CourseCard/CourseCard";
import LeftSideBar from "../../components/shared/LeftSideBar/LeftSideBar";
import useFetch from "../../hooks/useFetch";
import Layout from "../../layout/Layout";

const Courses = () => {
    const { data, loading } = useFetch("http://localhost:5000/courses");

    return (
        <Layout>
            <Container className="my-5">
                <Row>
                    <Col lg={4}>
                        {!loading && <LeftSideBar courses={data} />}
                    </Col>
                    <Col lg={8}>
                        <Row>
                            {loading ? (
                                <h3 className="text-white text-center">
                                    Loading...
                                </h3>
                            ) : (
                                <>
                                    {data.map((course) => (
                                        <CourseCard
                                            key={course.id}
                                            course={course}
                                            isSlideShow={false}
                                        />
                                    ))}
                                </>
                            )}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default Courses;
