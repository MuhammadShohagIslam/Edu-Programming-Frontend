import React from "react";
import { Col } from "react-bootstrap";
import classes from "./Blog.module.css";

const Blog = ({ blog }) => {
    return (
        <Col md={8} className="m-auto bg-white mb-4">
            <div className={classes.singleBlog}>
                <h2 className={classes.blogTitle}>{blog.title}</h2>
                <p className={classes.blogDescription}>{blog.description}</p>
            </div>
        </Col>
    );
};

export default Blog;
