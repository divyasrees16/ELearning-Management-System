import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [userType, setUserType] = useState("student");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    profession: "",
    specialization: "",
    institution_name: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url =
      userType === "student"
        ? "http://localhost:8080/students/register"
        : "http://localhost:8080/instructors/register";

    const data =
      userType === "student"
        ? {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
            profession: formData.profession,
          }
        : {
            i_name: formData.name,
            i_email: formData.email,
            i_phone: formData.phone,
            i_password: formData.password,
            specialization: formData.specialization,
            institution_name: formData.institution_name,
          };

    try {
      const response = await axios.post(url, data, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Registration successful!");
      console.log(response.data);
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Error in registration. Try again!");
    }
  };

  return (
    <div
      style={{
        width: "450px",
        margin: "100px auto",
        padding: "30px",
        backgroundColor: "white",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#333" }}>Sign Up</h2>

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
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          margin: "10px 0",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          margin: "10px 0",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
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
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          margin: "10px 0",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />

      {userType === "student" && (
        <input
          type="text"
          name="profession"
          placeholder="Profession"
          value={formData.profession}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
      )}

      {userType === "instructor" && (
        <>
          <input
            type="text"
            name="specialization"
            placeholder="Specialization"
            value={formData.specialization}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
          <input
            type="text"
            name="institution_name"
            placeholder="Institution Name"
            value={formData.institution_name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </>
      )}

      <button
        onClick={handleSubmit}
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#ff3e4d",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
