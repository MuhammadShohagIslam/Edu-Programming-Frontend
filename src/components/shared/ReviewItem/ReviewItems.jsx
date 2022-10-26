import React from "react";
import { Table } from "react-bootstrap";
import classes from "./ReviewItems.module.css";

const ReviewItems = ({ course }) => {
    const { img, name } = course;
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead className="text-center">
                    <tr>
                        <th>Image</th>
                        <th>Course Name</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <tr>
                        <td>
                            <img
                                className={classes.reviewItemImg}
                                src={img}
                                alt={name}
                            />
                        </td>
                        <td>{name}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default ReviewItems;
