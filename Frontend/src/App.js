import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import StudentDashboard from './components/StudentDashboard';
import CourseDetail from './components/CourseDetail';
import CourseEnrollment from './components/CourseEnrollment';
import InstructorDashboard from "./components/InstructorDashboard";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/dashboard" element={<StudentDashboard />} />
                <Route path="/course-detail" element={<CourseDetail />} />
                <Route path="/course-enrollment" element={<CourseEnrollment />} />
                <Route path="/instructor-dashboard" element={<InstructorDashboard />} />

            </Routes>
        </Router>
    );
}

export default App;
