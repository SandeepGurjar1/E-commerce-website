import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {Route, Routes, Switch } from "react-router-dom";
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
    {<Navbar/>};
      <Routes>
        <Route path='*' element={<Home/>}/>
        <Route  path='/register' element={<Register/>} />
        <Route  path='/login' element={<Login/>} />
        <Route  path='/products' element={<Products/>} />
        <Route  path='/cart' element={<Cart/>} />
        <Route  path='/products/:id' element={<Product/>} />
        <Route  path='/about' element={<About/>} />
        <Route  path='/contact' element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
