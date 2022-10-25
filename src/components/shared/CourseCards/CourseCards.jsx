import React from "react";
import CourseCard from "../CourseCard/CourseCard";
import { Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const CourseCards = ({ courses, loading }) => {
    return (
        <Container>
            <Row className="mb-5">
                {loading ? (
                    <h3 className="text-white text-center">Loading...</h3>
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
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
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
