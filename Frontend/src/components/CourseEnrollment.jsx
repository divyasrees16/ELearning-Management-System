import React, { useState } from 'react';

const CourseEnrollment = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: "Machine Learning Basics", enrolled: false },
    { id: 2, name: "React for Beginners", enrolled: false },
    { id: 3, name: "Data Structures and Algorithms", enrolled: false }
  ]);

  const handleEnroll = (courseId) => {
    setCourses(courses.map(course => 
      course.id === courseId ? { ...course, enrolled: true } : course
    ));
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2>Available Courses</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {courses.map(course => (
          <li key={course.id} style={{ padding: '10px', backgroundColor: '#f9f9f9', marginBottom: '10px', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>{course.name}</span>
            <button 
              onClick={() => handleEnroll(course.id)}
              style={{
                backgroundColor: course.enrolled ? 'gray' : '#4CAF50',
                color: 'white',
                border: 'none',
                padding: '10px',
                borderRadius: '5px',
                cursor: course.enrolled ? 'not-allowed' : 'pointer'
              }}
              disabled={course.enrolled}
            >
              {course.enrolled ? "Enrolled" : "Enroll"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseEnrollment;
