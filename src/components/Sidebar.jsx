import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Sidebar.css';
const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { title: 'Eclairages' },
    { title: 'Direction & Suspension' },
    { title: 'Rétroviseurs et +' },
    { title: 'Roues & Jantes' },
    { title: 'Accessoires & Entretien' },
    { title: 'Pare chocs arrière & +' },
    { title: 'Capots et +' }
  ];
  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      <div className={`sidebar ${isOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <div className="sidebar-logo-icon">A</div>
            <span className="sidebar-logo-text">AutoPart</span>
          </div>
          <button className="sidebar-close" onClick={onClose}>×</button>
        </div>
        <div className="sidebar-menu-title">
          <h6>MENU</h6>
        </div>
        <ul className="sidebar-menu-list">
          {menuItems.map((item, index) => (
            <li key={index} className="sidebar-menu-item">
              <Link 
                to="/shop" 
                className="sidebar-menu-link"
                onClick={onClose} 
                state={{ category: item.title }} 
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="sidebar-contact">
          <h6>INFORMATIONS DE CONTACT</h6>
          <div className="contact-item">
            <div>
              <strong>+212 653-063571</strong>
              <small>Vous pouvez nous appeler de 9h à 18h.</small>
            </div>
          </div>
          <div className="contact-item">
            <div>
              <strong>autopartcontact38@gmail.com</strong>
              <small>Contactez-nous facilement par e-mail.</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;