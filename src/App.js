import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Shop from './components/Shop'; 
import Cart from './components/Cart';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import ScrollToTop from './components/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;