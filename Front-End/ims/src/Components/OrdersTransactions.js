import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEdit, FaTrash, FaSearch, FaFileInvoice } from "react-icons/fa";
import "./OrdersTransactions.css";
import Footer from "./Footer";

const OrdersTransactions = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [orders, setOrders] = useState([
        { id: 1, customer: "John Doe", date: "2024-02-25", total: "$120.00", status: "Completed" },
        { id: 2, customer: "Jane Smith", date: "2024-02-24", total: "$80.00", status: "Pending" },
        { id: 3, customer: "Michael Lee", date: "2024-02-22", total: "$150.00", status: "Canceled" },
    ]);

    const handleDelete = (id) => {
        setOrders(orders.filter(order => order.id !== id));
    };

    const handleStatusChange = (id, newStatus) => {
        setOrders(orders.map(order => order.id === id ? { ...order, status: newStatus } : order));
    };

    const filteredOrders = orders.filter((order) =>
        order.customer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="orders-page">
            <div className="main-content">
                <div className="header">
                    <h2>Orders & Transactions</h2>
                    <div className="search-box">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search orders..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="order-summary">
                    <p>Total Orders: <strong>{orders.length}</strong></p>
                </div>

                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Customer</th>
                                <th>Date</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th colSpan={2}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrders.map((order) => (
                                <tr key={order.id}>
                                    <td>{order.customer}</td>
                                    <td>{order.date}</td>
                                    <td>{order.total}</td>
                                    <td>
                                        <select
                                            className={`status ${order.status.toLowerCase()}`}
                                            value={order.status}
                                            onChange={(e) => handleStatusChange(order.id, e.target.value)}
                                        >
                                            <option value="Completed">Completed</option>
                                            <option value="Pending">Pending</option>
                                            <option value="Canceled">Canceled</option>
                                        </select>
                                    </td>
                                    <td>
                                        <Link to={`/orders/edit/${order.id}`} className="order-edit-btn"><FaEdit /></Link>
                                    </td>
                                    <td>
                                        <button className="order-delete-btn" onClick={() => handleDelete(order.id)}><FaTrash /></button>
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
};

export default OrdersTransactions;
