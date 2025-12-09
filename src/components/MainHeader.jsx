import React, { useState } from 'react'; 
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../styles/MainHeader.css';
const MainHeader = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems, cartTotal } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const categories = [
    'Eclairages', 'Direction & Suspension', 'Rétroviseurs et +',
    'Roues & Jantes', 'Accessoires & Entretien',
    'Pare chocs arrière & +', 'Capots et +'
  ];
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory !== "") {
      const currentFilters = location.state || {}; 
      navigate('/shop', { 
        state: { ...currentFilters, category: selectedCategory } 
      });}};
  const handleSearchSubmit = () => {
    const currentFilters = location.state || {};
    navigate('/shop', { 
      state: { 
        brand: currentFilters.brand,
        model: currentFilters.model, 
        year: currentFilters.year,
        search: searchTerm  } })};
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };
  return (
    <div className="main-header">
      <div className="container-fluid px-4">
        <div className="row align-items-center g-3">
          
          <div className="col-auto">
            <Link className="logo-link" to="/">
              <div className="logo-icon">A</div>
              <span className="logo-text">AutoPart</span>
            </Link>
          </div>
          
          <div className="col-auto">
            <button className="menu-btn" onClick={onMenuClick}>
              <i className="fas fa-bars"></i> Menu
            </button>
          </div>

          <div className="col">
            <div className="search-wrapper">
              <select className="categories-select" onChange={handleCategoryChange} value="">
                <option value="" disabled>Catégories</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>{cat}</option>
                ))}
              </select>
              <input type="text"  className="search-input"  placeholder="Rechercher (ex: Pneu, Huile...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown} 
              />
              <button className="search-btn" onClick={handleSearchSubmit}>
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
          <div className="col-auto">
           <div className="cart-link" onClick={() => navigate('/cart')} style={{cursor: 'pointer'}}>
              <div className="cart-icon-wrapper">
                <i className="fas fa-shopping-cart"></i>
                <span className="cart-badge">{cartItems.length}</span>
              </div>
              <div className="cart-info">
                <div className="cart-label">Total</div>
                <div className="cart-price">{cartTotal} Dhs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;