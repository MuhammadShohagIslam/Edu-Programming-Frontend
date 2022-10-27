import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blogs/Blogs";
import Cart from "./pages/Cart/Cart";
import CourseDetails from "./pages/Courses/CourseDetails/CourseDetails";
import Courses from "./pages/Courses/Courses";
import FAQ from "./pages/FAQ/FAQ";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import TermCondition from "./pages/TermCondition/TermCondition";
import PrivateRouter from "./routes/PrivateRouter/PrivateRouter";

function App() {
    return (
        <>
            <Toaster />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/:id" element={<CourseDetails />} />
                <Route
                    path="/courses/cart/:id"
                    element={
                        <PrivateRouter>
                            <Cart />
                        </PrivateRouter>
                    }
                />
                <Route path="/blog" element={<Blog />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/profile"
                    element={
                        <PrivateRouter>
                            <Profile />
                        </PrivateRouter>
                    }
                />
                <Route path="/term-condition" element={<TermCondition />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
