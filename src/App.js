import React from "react";
// import router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import page
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetails";
// import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Sidebar />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
