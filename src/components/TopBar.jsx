import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/TopBar.css';
const TopBar = () => {
  const scrollToFooter = (e) => {
    e.preventDefault(); 
    const footerElement = document.getElementById('footer'); 
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' }); 
    }};
  return (
    <div className="top-bar">
      <div className="container-fluid px-4">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
            <a href="#footer" onClick={scrollToFooter}>Contactez-nous</a>
            <Link to="/shop">Catalogue</Link>
            <Link to="/faq">FAQ</Link>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <i className="fas fa-phone-alt me-2"></i>
            Vous pouvez nous contacter 24/7 sur
            <span className="phone"> +212 653-063571</span>
          </div>
        </div>
      </div>
    </div>);};
export default TopBar;