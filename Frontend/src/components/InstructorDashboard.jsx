import React, { useState } from "react";
import axios from "axios";

const InstructorDashboard = () => {
  const [course, setCourse] = useState({
    c_type: "",
    c_name: "",
    c_description: "",
    c_year: "",
    youtube_url: "",
    website_url: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/courses/add", course);
      if (response.status === 200) {
        setMessage("Course added successfully!");
        setCourse({ c_type: "", c_name: "", c_description: "", c_year: "", youtube_url: "", website_url: "" });
      }
    } catch (error) {
      setMessage("Error adding course. Please try again.");
    }
  };

  return (
    <div style={{ width: "500px", margin: "50px auto", padding: "20px", textAlign: "center", border: "1px solid #ddd", borderRadius: "10px" }}>
      <h2>Instructor Dashboard - Add Course</h2>
      
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input type="text" name="c_type" placeholder="Course Type" value={course.c_type} onChange={handleChange} required />
        <input type="text" name="c_name" placeholder="Course Name" value={course.c_name} onChange={handleChange} required />
        <textarea name="c_description" placeholder="Course Description" value={course.c_description} onChange={handleChange} required />
        <input type="text" name="c_year" placeholder="Year (e.g., 2025)" value={course.c_year} onChange={handleChange} required />
        <input type="text" name="youtube_url" placeholder="YouTube URL" value={course.youtube_url} onChange={handleChange} required />
        <input type="text" name="website_url" placeholder="Website URL" value={course.website_url} onChange={handleChange} required />
        <button type="submit" style={{ padding: "10px", backgroundColor: "#2a2a72", color: "white", border: "none" }}>
          Add Course
        </button>
      </form>

      {message && <p style={{ marginTop: "10px", color: "green" }}>{message}</p>}
    </div>
  );
};

export default InstructorDashboard;
