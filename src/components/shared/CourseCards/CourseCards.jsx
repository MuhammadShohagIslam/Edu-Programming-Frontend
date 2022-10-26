import React from "react";
import CourseCard from "../CourseCard/CourseCard";
import { Container, Row, Spinner } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const CourseCards = ({ courses, loading }) => {
    return (
        <Container>
            <Row className="mb-5">
                {loading ? (
                    <div
                        style={{ height: "300px" }}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <Spinner animation="border" variant="info" />
                    </div>
                ) : (
                    <>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            modules={[Pagination]}
                        >
                            {courses.map((course) => (
                                <SwiperSlide key={course.id}>
                                    <CourseCard course={course} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </>
                )}
            </Row>
        </Container>
    );
};

export default CourseCards;
