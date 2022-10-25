import React from "react";
import { Accordion } from "react-bootstrap";

const SingleFAQ = ({ faq }) => {
    console.log(faq);
    return (
        <Accordion.Item eventKey={`${faq.id}`}>
            <Accordion.Header> {faq.question}</Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
        </Accordion.Item>
    );
};

export default SingleFAQ;
