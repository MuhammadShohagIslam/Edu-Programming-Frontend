import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import classes from "./CourseCard.module.css";

const CourseCard = ({ course }) => {
    const { id, img, name, description } = course;
    console.log(course, name, "course");
    return (
        <>
            <Col lg={4} md={6} sm={12} className="mb-4 w-100">
                <Card className={classes.courseCard}>
                    <Card.Img
                        className={classes.courseCardImage}
                        variant="top"
                        alt={name}
                        src={img}
                    />
                    <Card.Body>
                        <Card.Title> {name}</Card.Title>
                        <Card.Text className="text-justify">
                            {description?.length > 100 ? description.slice(0,100) + "...": description}
                        </Card.Text>
                        <Link
                            className={`${classes.courseCardButtonWrapper} pt-2`}
                            to={`/courses/${id}`}
                        >
                            <Button className={classes.courseCardButton}>
                                Course Details<FaArrowRight className="ms-1"/>
                            </Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default CourseCard;
