import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import No_match from './Components/No_match'
import Product from './Components/Product';
import ProductAdd from './Components/ProductAdd';
import CategoryList from './Components/CategoryList';
import AddEditCategory from './Components/AddEditCategory';
import OrdersTransactions from './Components/OrdersTransactions';
import OrderEdit from './Components/OrderEdit';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path="/product/add" element={<ProductAdd/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<No_match />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/categories/add" element={<AddEditCategory />} />
        <Route path="/categories/edit/:id" element={<AddEditCategory />} />
        <Route path="/orders" element={<OrdersTransactions/>} />
        <Route path="/orders/edit/:id" element={<OrderEdit />} />
      </Routes>
    </div>
  );
}

export default App;
