import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 50px",
          backgroundColor: "#2a2a72",
          color: "white",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div style={{ fontSize: "24px", fontWeight: "bold" }}>E-Learning</div>
        <input
          type="text"
          placeholder="Search courses..."
          style={{
            padding: "8px",
            width: "300px",
            borderRadius: "5px",
            border: "none",
            outline: "none",
          }}
        />
        <div>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button
              style={{
                padding: "10px 20px",
                margin: "0 10px",
                backgroundColor: "#ff6f61",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#ff3e4d")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#ff6f61")}
            >
              Login
            </button>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#ff3e4d",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#ff1e2d")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#ff3e4d")}
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div
        style={{
          textAlign: "center",
          padding: "80px 20px",
          background: "linear-gradient(to right,rgb(117, 193, 255),rgb(126, 214, 255))",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "50px", marginBottom: "10px" }}>
          Learn Anything, Anytime
        </h1>
        <p style={{ fontSize: "20px" }}>
          Join thousands of learners on our platform!
        </p>
        <Link to="/signup">
          <button
            style={{
              padding: "15px 30px",
              backgroundColor: "white",
              color: "#ff3e4d",
              border: "none",
              borderRadius: "5px",
              fontSize: "18px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#ffdde1")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
          >
            Get Started
          </button>
        </Link>
      </div>

      {/* Features Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          padding: "50px 20px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <div
          style={{
            width: "300px",
            padding: "20px",
            textAlign: "center",
            backgroundColor: "white",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
          }}
        >
          <h3>📚 Learn from Experts</h3>
          <p>Get top-quality courses from industry experts.</p>
        </div>
        <div
          style={{
            width: "300px",
            padding: "20px",
            textAlign: "center",
            backgroundColor: "white",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
          }}
        >
          <h3>🎥 Interactive Video Lessons</h3>
          <p>Engage with interactive, high-quality videos.</p>
        </div>
        <div
          style={{
            width: "300px",
            padding: "20px",
            textAlign: "center",
            backgroundColor: "white",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
          }}
        >
          <h3>🏆 Earn Certificates</h3>
          <p>Complete courses and get verified certifications.</p>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          backgroundColor: "#2a2a72",
          color: "white",
          textAlign: "center",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <p>© 2025 E-Learning Platform | All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;
