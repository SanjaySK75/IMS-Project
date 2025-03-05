import React, { useEffect, useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { FaPlus, FaTrash } from "react-icons/fa";
import axios from "axios";
import Footer from "./Footer";

export default function Product() {
    const [prod, setProd] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/prod/data")
            .then(res => setProd(res.data))
            .catch(err => console.error("Error fetching products:", err));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/prod/delete/${id}`)
            .then(() => {
                alert("Deleted Successfully")
            })
            .catch(err => console.error("Error deleting product:", err));
    };

    return (
        <div className="product-container">
            <div className="product-safety">
                <div className="product-hero">
                    <div>
                        <h1>Product List</h1>
                        <p>
                            The product list effectively dictates product presentation and provides space
                            to list your products and offering in the most appealing way.
                        </p>
                    </div>
                    <div>
                        <Link to="/product/add" className="add-category-btn">
                            <FaPlus /> Add Products
                        </Link>
                    </div>
                </div>

                <div className="entries">
                    <div className="entries-1">
                        <p>Show</p>
                        <select>
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                        <p>entries</p>
                    </div>
                    <div className="entries-2">
                        <label>Search:</label>
                        <input type="text" />
                    </div>
                </div>

                <div className="pro-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Code</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Brand Name</th>
                                <th>Cost</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {prod.map((x) => (
                                <tr key={x.id}>
                                    <td>
                                        <img src={x.image} alt="" height={100} width={100} />
                                    </td>
                                    <td>{x.proname}</td>
                                    <td>{x.category}</td>
                                    <td>{x.price}</td>
                                    <td>{x.brandname}</td>
                                    <td>{x.cost}</td>
                                    <td>{x.quantity}</td>
                                    <td >
                                       <button className="order-delete-btn" onClick={() => handleDelete(x._id)}><FaTrash/></button> 
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
