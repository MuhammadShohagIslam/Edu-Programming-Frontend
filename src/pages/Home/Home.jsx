import React, { useState } from "react";
import CourseCards from "../../components/shared/CourseCards/CourseCards";
import Jumbotron from "../../components/shared/Jumbotron/Jumbotron";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import Layout from "../../layout/Layout";

const Home = () => {
    const [courses, setCourses] = useState([
        {
            id: 1,
            img: "https://thumbs.dreamstime.com/z/software-testing-internet-business-technology-concept-143071525.jpg",
            name: "JavaScript Unit Testing - The Practical Guide",
            description: `
            Automated testing is a key concept in modern (web) development.
            
            Yet it is a concept that can be intimidating at first, hence many developers shy away from diving into testing and adding tests to their projects.
            
            This course will teach you automated unit & integration testing with JavaScript from the ground up. You will learn how tests are written and added to your projects, what should (and should not) be tested and how you can test both simple as well as more complex code.`,
        },
        {
            id: 2,
            img: "https://redis.com/wp-content/uploads/2020/04/image1-5-1024x576.png?&auto=webp&quality=85,75&width=800",
            name: "Redis: The Complete Developer's Guide",
            description: `In a world with hundreds of different databases, one database rises to rule them all. 

            Redis is an in-memory database known for its speed and simplicity.  Originally used only for simple caching, its feature set has expanded to be one of the most versatile databases around`,
        },
        {
            id: 3,
            img: "https://webimages.mongodb.com/_com_assets/cms/1-lwnlfl1ryn.png?auto=format%2Ccompress&ch=DPR",
            name: "Master MongoDB Development for Web & Mobile Apps",
            description: `MongoDB is one of the most important NoSQL databases you can work with these days. It's extremely popular and MongoDB developers are in high demand.

            No matter if you're building web applications, mobile applications or any other kind of application or if you're a data scientist - you'll need to work with data. Storing data, querying it efficiently and minimizing complexities whilst optimizing performance are crucial tasks.`,
        },
        {
            id: 4,
            img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191216192618/7-Tips-To-Write-Clean-And-Better-Code-in-2020.png",
            name: "Clean Code",
            description: `you'll learn what exactly clean code is and, more importantly, how you can write clean code. Because if your code is written in a clean way, it's easier to read and understand and therefore easier to maintain.

            Because it's NOT just the computer who needs to understand your code - your colleagues and your future self needs to be able to understand it as well!`,
        },
        {
            id: 5,
            img: "https://www.codecademy.com/resources/blog/content/images/2021/05/what-is-javascript-used-for-1.png",
            name: "JavaScript - The Complete Guide 2022 (Beginner + Advanced)",
            description: `JavaScript is THE most important programming language you need to learn as a web developer - and with this course, you make sure that you will not miss a single thing you have to know as a JavaScript developer!

            This is the most comprehensive and modern course you can find on JavaScript - it's based on all my JavaScript knowledge AND teaching experience. It's both a complete guide, starting with the core basics of the language, as well as an extensive reference of the JavaScript language and environment, ensuring that both newcomers as well as experienced JavaScript developers get a lot out of this course!`,
        },
        {
            id: 6,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJMSrbGUhBcUganZlZpa-DIaF9nio80aWxsw&usqp=CAU",
            name: "Docker & Kubernetes: The Practical Guide [2022 Edition]",
            description: `Docker & Kubernetes are amongst the most in-demand technologies and topics you can learn these days.

            Because they significantly simplify the development and deployment process of both simple and complex software projects. Especially in web development (though not limited to that), Docker can really take you to the next level!

With Docker, you create and manage so-called "Containers" - basically packages of code and tools required to run that code. These containers allow you to run your programs in a predictable, environment-independent way - no matter where you need to run it.`,
        },
    ]);
    return (
        <Layout>
            <Jumbotron />
            <SectionTitle
                title="Course"
                description="EduTech is an online learning and teaching marketplace with over 6 courses. Learn programming, marketing and more."
            />
            <CourseCards courses={courses} />
        </Layout>
    );
};

export default Home;
