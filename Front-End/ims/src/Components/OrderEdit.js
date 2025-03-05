import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./OrderEdit.css";
import Footer from "./Footer";

const OrderEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [order, setOrder] = useState({
        customer: "John Doe",
        date: "2024-02-25",
        total: "120.00",
        status: "Completed"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrder((prevOrder) => ({ ...prevOrder, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Order updated successfully!");
        navigate("/orders");
    };

    return (
        <div className="order-edit-page">
            <div className="form-container">
                <h2>Edit Order #{id}</h2>
                <form onSubmit={handleSubmit}>
                    <label>Customer Name:</label>
                    <input
                        type="text"
                        name="customer"
                        value={order.customer}
                        onChange={handleChange}
                        required
                    />

                    <label>Order Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={order.date}
                        onChange={handleChange}
                        required
                    />

                    <label>Total Amount ($):</label>
                    <input
                        type="number"
                        name="total"
                        value={order.total}
                        onChange={handleChange}
                        required
                    />

                    <label>Status:</label>
                    <select name="status" value={order.status} onChange={handleChange}>
                        <option value="Completed">Completed</option>
                        <option value="Pending">Pending</option>
                        <option value="Canceled">Canceled</option>
                    </select>

                    <button type="submit" className="save-btn">Save Changes</button>
                    <button type="button" className="cancel-btn" onClick={() => navigate("/orders")}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default OrderEdit;