import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./AddEditCategory.css";
import Footer from "./Footer";


const AddEditCategory = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    date: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    axios
        .post("http://localhost:3001/category/add", formData)
        .then((res) => {
            alert(res.data.message);
            setTimeout(() => {
                navigate("/categories");
            }, 3000);
        })
        .catch((err) => console.log(err));
};

  return (
    <div>
      <div className="category-form">
        <h2>Add Category</h2>
        <form onSubmit={handleSubmit}>
          <label>Category Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Description:</label>
          <textarea name="desc" value={formData.desc} onChange={handleChange} required></textarea>

          <label>Date:</label>
          <input type="text" name="date" value={formData.date} onChange={handleChange}/>

          <button type="submit" className="addedit-btn">"Create"</button>
        </form>
      </div>
    </div>
  );
};

export default AddEditCategory;
