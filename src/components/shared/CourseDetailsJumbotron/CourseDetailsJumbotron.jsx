import React from "react";
import { Container } from "react-bootstrap";
import classes from "./CourseDetailsJumbotron.module.css";

const CourseDetailsJumbotron = ({ name, description }) => {
    return (
        <section className={classes.jumbotron}>
            <Container className={classes.jumbotronWrapper}>
                <div className="headerInfo">
                    <h2 className={classes.jumbotronTitle}>{name}</h2>
                </div>
            </Container>
        </section>
    );
};

export default CourseDetailsJumbotron;
