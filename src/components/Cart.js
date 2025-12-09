import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Cart.css';
const Cart = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: ''
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleCheckout = (e) => {
    e.preventDefault();
    alert(`Bravo ${formData.fullName}! Commande validée. Total: ${cartTotal} Dhs`);
    clearCart(); 
    navigate('/'); 
  };
  if (cartItems.length === 0) {
    return (
      <div className="cart-page-container" style={{textAlign: 'center', padding: '50px'}}>
        <div style={{fontSize: '4rem', marginBottom: '20px'}}>🛒</div>
        <h2 style={{color: '#1e293b'}}>Votre panier est vide</h2>
        <p style={{color: '#64748b', margin: '10px 0 20px'}}>On dirait que vous n'avez pas encore fait votre choix.</p>
        <Link to="/shop" className="btn-commander" style={{display: 'inline-block', width: 'auto', textDecoration: 'none'}}>
          Retourner à la boutique
        </Link>
      </div>
    );
  }
  return (
    <div className="cart-page-container">
      <h1 style={{marginBottom: '30px', color: '#1e293b'}}>Votre Panier ({cartItems.length} articles)</h1>
      <div className="cart-content">
        <div className="cart-items-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item-card">
              <img src={item.image} alt={item.name} className="cart-item-img" />
              
              <div className="cart-item-info">
                <h3 style={{margin: '0 0 5px 0', fontSize: '1.1rem'}}>{item.name}</h3>
                <p style={{color: '#64748b', fontSize: '0.9rem', margin: 0}}>{item.category}</p>
                <div style={{marginTop: '10px', display: 'flex', gap: '15px', color: '#475569'}}>
                   <span style={{fontWeight: 'bold'}}>{item.price}</span>
                   <span style={{background: '#f1f5f9', padding: '2px 8px', borderRadius: '4px', fontSize: '0.9rem'}}>x {item.quantity}</span>
                </div>
              </div>

              <div className="item-total-price" style={{fontWeight: 'bold', color: '#166534', fontSize: '1.1rem'}}>
                {(parseFloat(item.price.replace(" Dhs", "")) * item.quantity)} Dhs
              </div>
            </div>
          ))}
          
          <div style={{marginTop: '20px', textAlign: 'right', borderTop: '2px solid #f1f5f9', paddingTop: '20px'}}>
            <h3 style={{fontSize: '1.3rem'}}>Total Global : <span style={{color: '#166534'}}>{cartTotal} Dhs</span></h3>
          </div>
        </div>
        <div className="checkout-form-section">
          <h2>Informations de Livraison</h2>
          <form onSubmit={handleCheckout} className="checkout-form">
            
            <div className="form-group">
              <label>Nom Complet</label>
              <input 
                type="text" name="fullName" required 
                placeholder="Ex: Ahmed Alami"
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-group">
              <label>Téléphone</label>
              <input 
                type="tel" name="phone" required 
                placeholder="Ex: 06 00 00 00 00"
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Ville</label>
              <select name="city" required onChange={handleInputChange}>
                <option value="">Choisir une ville</option>
                <option value="Casablanca">Casablanca</option>
                <option value="Rabat">Rabat</option>
                <option value="Marrakech">Marrakech</option>
                <option value="Tanger">Tanger</option>
                <option value="Fes">Fes</option>
                <option value="Agadir">Agadir</option>
              </select>
            </div>

            <div className="form-group">
              <label>Adresse Exacte</label>
              <textarea 
                name="address" required rows="3"
                placeholder="Ex: Rue 12, Quartier..."
                onChange={handleInputChange}
              ></textarea>
            </div>

            <button type="submit" className="btn-commander">
              Confirmer la commande ({cartTotal} Dhs)
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Cart;