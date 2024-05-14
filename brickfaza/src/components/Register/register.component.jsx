import React, { useState } from "react";
import "./register.scss";

const Register = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    email: "",
    password: "",
    gameName: "",
    gameImage: "",
    gameWebsite: "",
    gameType: "",
    releaseDate: "",
    gameDescription: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add register functionality
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" required />
      <input type="text" name="website" value={formData.website} onChange={handleChange} placeholder="Website" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
      <input type="text" name="gameName" value={formData.gameName} onChange={handleChange} placeholder="Game Name" required />
      <input type="text" name="gameImage" value={formData.gameImage} onChange={handleChange} placeholder="Game Image" required />
      <input type="text" name="gameWebsite" value={formData.gameWebsite} onChange={handleChange} placeholder="Game Website" required />
      <input type="text" name="gameType" value={formData.gameType} onChange={handleChange} placeholder="Game Type" required />
      <input type="date" name="releaseDate" value={formData.releaseDate} onChange={handleChange} placeholder="Release Date" required />
      <textarea name="gameDescription" value={formData.gameDescription} onChange={handleChange} placeholder="Game Description" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
