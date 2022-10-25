import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import classes from "./LeftSideBar.module.css";

const LeftSideBar = ({ courses }) => {
    return (
        <Card className="rounded-0 py-3">
            <Card.Body>
                <ul>
                    {courses.map((course, index) => (
                        <li
                            key={course.id}
                            className={`mb-1 ${classes.leftSidebarItem}`}
                        >
                            <Link
                                className="text-dark font-weight-bolder"
                                to={`/courses/${course.id}`}
                            >{`${index + 1}. ${course.name}`}</Link>
                        </li>
                    ))}
                </ul>
            </Card.Body>
        </Card>
    );
};

export default LeftSideBar;
