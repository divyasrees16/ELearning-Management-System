import React, { useState, useEffect } from 'react';

const StudentDashboard = () => {
  const [student, setStudent] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    enrolledCourses: []
  });

  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    // Simulating API fetch from student_courses table
    const fetchEnrolledCourses = async () => {
      try {
        // Replace with actual API call
        const response = await fetch("/api/student/enrolled-courses");
        const data = await response.json();
        setStudent(prevState => ({ ...prevState, enrolledCourses: data }));
      } catch (error) {
        console.error("Error fetching enrolled courses:", error);
      }
    };

    fetchEnrolledCourses();
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#4CAF50', padding: '15px', color: 'white' }}>
        <h2>Student Dashboard</h2>
        {/* Profile Box */}
        <div 
          onClick={() => setShowProfile(!showProfile)}
          style={{
            cursor: 'pointer', backgroundColor: '#fff', color: '#333',
            padding: '10px', borderRadius: '5px', position: 'relative'
          }}>
          Profile
          {/* Profile Dropdown */}
          {showProfile && (
            <div style={{
              position: 'absolute', top: '40px', right: '0',
              backgroundColor: '#fff', color: '#333', padding: '10px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '5px',
              width: '200px'
            }}>
              <p><strong>{student.name}</strong></p>
              <p>{student.email}</p>
              <hr />
              <h4>Enrolled Courses:</h4>
              <ul style={{ paddingLeft: '10px' }}>
                {student.enrolledCourses.length > 0 ? (
                  student.enrolledCourses.map(course => (
                    <li key={course.id}>{course.name}</li>
                  ))
                ) : (
                  <li>No courses enrolled</li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Enrolled Courses Section */}
      <h3 style={{ marginTop: '20px' }}>Enrolled Courses</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {student.enrolledCourses.map(course => (
          <li key={course.id} style={{ padding: '10px', backgroundColor: '#f9f9f9', marginBottom: '10px', borderRadius: '5px' }}>
            <strong>{course.name}</strong> - Progress: {course.progress}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
