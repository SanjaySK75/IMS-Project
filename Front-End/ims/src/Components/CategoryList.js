import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaEdit, FaTrash, FaPlus, FaSearch } from "react-icons/fa";
import "./CategoryList.css";
import Footer from "./Footer";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/category/data")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/category/delete/${id}`)
      .then((res) => {
        alert("Category Deleted Successfully")
      })
      .catch(err => console.error("Error deleting category:", err));
  };

  return (
    <div className="category-page">
      <div className="main-content">
        <div className="header">
          <h2>Category Management</h2>
          <div className="search-add">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-box-inp"
              />
            </div>
            <Link to="/categories/add" className="add-category-btn">
              <FaPlus /> Add Category
            </Link>
          </div>
        </div>
        <div className="category-summary">
          <p>
            Total Categories: <strong>{categories.length}</strong>
          </p>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Created Date</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            {categories.map((x) => (
              <tbody>
                <tr key={x.id}>
                  <td>{x.name}</td>
                  <td>{x.desc}</td>
                  <td>{x.date}</td>
                  <td>
                    <Link to={`/categories/data/${x.id}`} className="cat-edit-btn"><FaEdit /></Link>
                  </td>
                  <td>
                    <button className="cat-delete-btn" onClick={() => handleDelete(x._id)}><FaTrash /></button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
      <Footer/>
    </div >
  );
};

export default CategoryPage;
