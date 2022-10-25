import React from "react";
import { Container } from "react-bootstrap";
import classes from "./Jumbotron.module.css";

const Jumbotron = () => {
    return (
        <section className={classes.jumbotron}>
            <Container className={classes.jumbotronWrapper}>
                <div className="headerInfo">
                    <h2 className={classes.jumbotronTitle}>
                        World Class Online Training Course by EduTech
                    </h2>
                </div>
            </Container>
        </section>
    );
};

export default Jumbotron;
