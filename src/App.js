import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Home />
      <Routes>
      <Route exact path="/register" element={<Register/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/products/:id" element={<Product/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
