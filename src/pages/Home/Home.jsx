import React from "react";
import CourseCards from "../../components/shared/CourseCards/CourseCards";
import Jumbotron from "../../components/shared/Jumbotron/Jumbotron";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import useFetch from "../../hooks/useFetch";
import Layout from "../../layout/Layout";

const Home = () => {
    const {data, loading} = useFetch("https://course-server-delta.vercel.app/courses");

    return (
        <Layout>
            <Jumbotron name="World Class Online Training Course by  EduProgramming" />
            <SectionTitle
                title="Course"
                description="EduProgramming is an online learning and teaching marketplace with over 6 courses. Learn programming, marketing and more."
            />
            <CourseCards courses={data} loading={loading} />
        </Layout>
    );
};

export default Home;
