import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/landing";
import Verify from "./pages/verify/verify";
import Login from "./pages/login/login";
import Preferences from "./pages/preferences/preferences";
import { Provider } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
// import { ConnectedRouter } from "react-router-redux";
import { store } from "./store";
import Home from "./pages/home/home";
import Reset from "./pages/reset-password/reset";
import MyCourses from "./pages/my-courses/myCourses";
import Courses from "./pages/courses/courses";
import Profile from "./pages/profile/profile";
import CoursesDetail from "./pages/courses-detail/coursesDetail";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

function App() {
  const variants = {
    hidden: { opacity: 0, x: 200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -200 },
  };
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={Route}
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: "linear" }} // Set the transition to linear
        className="">
        <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/login" element={<Login />} />
            <Route path="/preferences" element={<Preferences />} />
            <Route path="/home" element={<Home />} />
            <Route path="/reset-password" element={<Reset />} />
            <Route path="/my-courses" element={<MyCourses />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/profile/my-courses" element={<Preferences />} /> */}
            <Route path="/courses-detail" element={<CoursesDetail />} />
          </Routes>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default AppWrapper;
