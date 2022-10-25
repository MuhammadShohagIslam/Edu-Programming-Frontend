import React from "react";
import { Container } from "react-bootstrap";
import classes from "./Jumbotron.module.css";

const Jumbotron = ({ name, intro }) => {
    return (
        <section className={classes.jumbotron}>
            <Container className={classes.jumbotronWrapper}>
                <div className="headerInfo">
                    <h2 className={classes.jumbotronTitle}>{name}</h2>
                    {intro && (
                        <p className={classes.jumbotronDescription}>{intro}</p>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default Jumbotron;
