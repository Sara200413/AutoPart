import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Navigation.css';

const Navigation = () => {
  const menuItems = [
    'Eclairages',
    'Direction & Suspension',
    'Rétroviseurs et +',
    'Roues & Jantes',
    'Accessoires & Entretien',
    'Pare chocs arrière & +',
    'Capots et +'
  ];

  return (
    <nav className="navigation">
      <div className="container-fluid">
        <ul className="nav-list">
          {menuItems.map((item, index) => (
            <li key={index} className="nav-item">
             
              <Link 
                to="/shop" 
                className="nav-link"
                state={{ category: item }} // Envoie la catégorie au Shop
              >
                {item}
              </Link>

            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;