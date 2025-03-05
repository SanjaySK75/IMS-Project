import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ProductAdd.css";
import Footer from "./Footer";

export default function ProductAdd() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        image: "",
        proname: "",
        category: "",
        price: "",
        brandname: "",
        cost: "",
        quantity: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        axios
            .post("http://localhost:3001/prod/add", formData)
            .then((res) => {
                alert(res.data.message);
                setTimeout(() => {
                    navigate("/product");
                }, 3000);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="ProAdd-container">
            <div className="ProAdd-box">
                <h2>Add Products</h2>
                <form onSubmit={handleSubmit}>
                    <div className="ProAdd-input-group">
                        <label>Product Image :</label>
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            placeholder="Enter Url"
                            required
                        />
                    </div>

                    <div className="ProAdd-input-group">
                        <label>Product Name :</label>
                        <input
                            type="text"
                            name="proname"
                            value={formData.proname}
                            onChange={handleChange}
                            placeholder="Enter Product Name"
                            required
                        />
                    </div>

                    <div className="ProAdd-input-group">
                        <label>Category :</label>
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            placeholder="Enter Category"
                            required
                        />
                    </div>

                    <div className="ProAdd-input-group">
                        <label>Price :</label>
                        <input
                            type="text"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="Enter Price"
                            required
                        />
                    </div>

                    <div className="ProAdd-input-group">
                        <label>BrandName :</label>
                        <input
                            type="text"
                            name="brandname"
                            value={formData.brandname}
                            onChange={handleChange}
                            placeholder="Enter BrandName"
                            required
                        />
                    </div>

                    <div className="ProAdd-input-group">
                        <label>Cost :</label>
                        <input
                            type="text"
                            name="cost"
                            value={formData.cost}
                            onChange={handleChange}
                            placeholder="Enter Cost"
                            required
                        />
                    </div>

                    <div className="ProAdd-input-group">
                        <label>Quantity :</label>
                        <input
                            type="text"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            placeholder="Enter Quantity"
                            required
                        />
                    </div>

                    <button className="ProAdd-btn" type="submit">Add Product</button>
                </form>
            </div>
        </div>
    );
}
