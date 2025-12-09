import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
const Footer = () => {
const [email, setEmail] = useState('');
  const handleNewsletter = (e) => {
    e.preventDefault();
    if(email) {
      alert(`Merci ! Votre email (${email}) a été ajouté à notre newsletter.`);
      setEmail('');
    }
  };
  return (
    <footer id="footer" className="footer-section">
      <div className="container-fluid">
        <div className="footer-content">
          <div className="footer-col">
            <div className="footer-logo">
              <div className="logo-icon">A</div>
              <span className="logo-text">AutoPart</span>
            </div>
            <p className="footer-desc">
              Votre spécialiste numéro 1 des pièces automobiles au Maroc. 
              Qualité garantie et livraison rapide partout dans le royaume.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=61584647314381&sfnsn=wa">
              <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/auto.part38?utm_source=qr&igsh=Z2hqdjczb2hqOWQw">
              <i className="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/212653063571"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Navigation</h3>
            <ul className="footer-links">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/shop">Catalogue Complet</Link></li>
              <li><Link to="/cart">Mon Panier</Link></li>
              <li><Link to="/faq">FAQ & Aide</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Catégories</h3>
            <ul className="footer-links">
              <li><Link to="/shop" state={{category: 'Eclairages'}}>Eclairages</Link></li>
              <li><Link to="/shop" state={{category: 'Roues & Jantes'}}>Roues & Jantes</Link></li>
              <li><Link to="/shop" state={{category: 'Accessoires & Entretien'}}>Accessoires</Link></li>
              <li><Link to="/shop" state={{category: 'Direction & Suspension'}}>Suspension</Link></li>
            </ul>
          </div>
          {/* Col 4: Contact & Newsletter */}
          <div className="footer-col">
            <h3>Contactez-nous</h3>
            <ul className="contact-info">
              <li><i className="fas fa-map-marker-alt"></i> Magasin N°12, Zone Industrielle, Casa</li>
              <li><i className="fas fa-phone-alt"></i> +212 653-063571</li>
              <li><i className="fas fa-envelope"></i> autopartcontact38@gmail.com</li>
            </ul>

            <form onSubmit={handleNewsletter} className="newsletter-form">
              <input 
                type="email" 
                placeholder="Votre Email..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit"><i className="fas fa-paper-plane"></i></button>
            </form>
          </div>
        </div>
        {/* PARTIE DU BAS*/}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AutoPart Maroc. Tous droits réservés.</p>
          <div className="payment-icons">
             <i className="fab fa-cc-visa"></i>
             <i className="fab fa-cc-mastercard"></i>
             <i className="fab fa-cc-paypal"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;