import React from 'react';

const CourseDetail = () => {
  const course = {
    name: "Machine Learning Basics",
    description: "An introductory course on Machine Learning concepts.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    materials: ["Lecture Notes", "Assignments", "Reference Books"]
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2>{course.name}</h2>
      <p>{course.description}</p>

      <h3>Course Video</h3>
      <iframe
        width="560"
        height="315"
        src={course.videoUrl}
        title="Course Video"
        frameBorder="0"
        allowFullScreen
        style={{ borderRadius: '10px' }}
      ></iframe>

      <h3 style={{ marginTop: '20px' }}>Study Materials</h3>
      <ul>
        {course.materials.map((item, index) => (
          <li key={index} style={{ padding: '5px', backgroundColor: '#f0f0f0', marginBottom: '5px', borderRadius: '5px' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetail;
