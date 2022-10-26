import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Blog from "../../components/shared/Blog/Blog";
import useBlogFetch from "../../hooks/useBlogFetch";
import Layout from "../../layout/Layout";

const Blogs = () => {
    const { data, loading } = useBlogFetch();

    return (
        <Layout>
            <article className="mt-5 mb-4">
                <Container>
                    <Row className="ms-0 me-0">
                        {loading ? (
                            <div
                                style={{ height: "400px" }}
                                className="d-flex justify-content-center align-items-center"
                            >
                                <Spinner animation="border" variant="info" />
                            </div>
                        ) : (
                            <>
                                {data.map((blog) => (
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
