import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./pages/Blogs/Blogs";
import CourseDetails from "./pages/Courses/CourseDetails/CourseDetails";
import Courses from "./pages/Courses/Courses";
import FAQ from "./pages/FAQ/FAQ";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/:id" element={<CourseDetails />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </>
    );
}

export default App;
