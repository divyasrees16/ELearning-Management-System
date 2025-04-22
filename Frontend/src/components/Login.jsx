import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [userType, setUserType] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const loginUrl =
      userType === "student"
        ? "http://localhost:8080/students/login"
        : "http://localhost:8080/instructors/login";

    try {
      const response = await axios.post(loginUrl, {
        email,
        password,
      });

      if (response.status === 200) {

        const studentId = response.data.studentId; // Fetch studentId from response
        localStorage.setItem("studentId", studentId); // Store student ID
        alert("Login successful!");
        if (userType === "student") {
          navigate("/dashboard");
        } else {
          navigate("/instructor-dashboard");
        }
      }
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "100px auto",
        padding: "30px",
        backgroundColor: "white",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#333" }}>Login</h2>

      <form onSubmit={handleLogin}>
        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <option value="student">Student</option>
          <option value="instructor">Instructor</option>
        </select>

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#2a2a72",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
