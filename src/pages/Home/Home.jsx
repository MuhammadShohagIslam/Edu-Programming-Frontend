import React, { useEffect, useState } from "react";
import CourseCards from "../../components/shared/CourseCards/CourseCards";
import Jumbotron from "../../components/shared/Jumbotron/Jumbotron";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import Layout from "../../layout/Layout";

const Home = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchCourses = async () => {
            const response = await fetch("http://localhost:5000/courses");
            const data = await response.json();
            setCourses(data);
            setLoading(false);
        };
        fetchCourses();
    }, []);

    return (
        <Layout>
            <Jumbotron />
            <SectionTitle
                title="Course"
                description="EduTech is an online learning and teaching marketplace with over 6 courses. Learn programming, marketing and more."
            />
            <CourseCards courses={courses} loading={loading}/>
        </Layout>
    );
};

export default Home;
