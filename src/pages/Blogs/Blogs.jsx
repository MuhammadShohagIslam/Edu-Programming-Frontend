import React, { useState } from 'react';
import { Container, Row } from "react-bootstrap";
import Blog from '../../components/shared/Blog/Blog';
import Layout from '../../layout/Layout';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    return (
        <Layout>
           <article className="mt-5 mb-4">
            <Container>
                <Row className="ms-0 me-0">
                    {loading ? (
                        <h2 className="text-white text-center">Loading...</h2>
                    ) : (
                        <>
                            {blogs.map((blog) => (
                                <Blog key={blog.id} blog={blog} />
                            ))}
                        </>
                    )}
                </Row>
            </Container>
        </article> 
        </Layout>
    );
};

export default Blogs;