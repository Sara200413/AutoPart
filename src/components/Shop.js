import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../styles/Shop.css';
import { productsData } from '../data/products.js';
import { useCart } from '../context/CartContext';
const Shop = () => {
  const { addToCart } = useCart();
  const location = useLocation();
  const { brand, model, year, category, search } = location.state || {};
  //LOGIQUE DE FILTRAGE 
  const filteredProducts = productsData.filter((product) => {
    let matchesBrand = true;
    let matchesCategory = true;
    let matchesSearch = true;
    // 1. Check Brand
    if (brand) {
      matchesBrand = product.compatible.includes(brand) || product.compatible.includes("All");
    }
    // 2. Check Category
    if (category) {
      matchesCategory = product.category === category;
    }
    // 3. Check Search (Recherche Texte)
    if (search) {
      const searchLower = search.toLowerCase();
      matchesSearch = product.name.toLowerCase().includes(searchLower) || 
                      product.category.toLowerCase().includes(searchLower);
    }
    return matchesBrand && matchesCategory && matchesSearch;
  });

  // Titre Dynamique
  let pageTitle = "Catalogue Complet";
  if (brand) pageTitle = `Résultats pour : ${brand} ${model}`;
  if (category) pageTitle = `Catégorie : ${category}`;
  if (search) pageTitle = `Recherche : "${search}"`;
  
  if (brand && search) pageTitle = `"${search}" pour ${brand} ${model}`;

  return (
    <div className="shop-container">
      <div className="shop-header">
        <h1 className="shop-title">{pageTitle}</h1>
        
        <div className="shop-subtitle">
           {brand && <span style={{color: "#1e293b", fontWeight:"bold"}}>{brand} {model}</span>}
           {(brand && (category || search)) && <span style={{margin: "0 10px"}}>+</span>}
           {category && <span style={{color: "#ff6600", fontWeight:"bold"}}>{category}</span>}
           {search && <span style={{color: "#ff6600", fontWeight:"bold"}}>"{search}"</span>}
        </div>

        <p style={{color:"#666", marginTop:"5px"}}>
          {filteredProducts.length} produits trouvés
        </p>
        
        {(brand || category || search) && (
          <Link to="/" style={{marginTop: "10px", display:"inline-block", textDecoration:"underline", color: "#1e293b"}}>
            ← Nouvelle Recherche
          </Link>
        )}
      </div>

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
                {brand && <span className="product-badge" style={{background: "#166534"}}>✓ Compatible</span>}
              </div>
              
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-title">{product.name}</h3>
                <span className="product-price">{product.price}</span>
                <button className="add-cart-btn" onClick={() => addToCart(product)}>
                  Ajouter au panier
                </button>
              </div>
            </div>
          ))
        ) : (
          
          <div style={{gridColumn: "1/-1", textAlign:"center", padding:"60px"}}>
            <div style={{fontSize: "3rem", marginBottom: "20px"}}>🔍</div>
            <h3 style={{color:"#1e293b"}}>Aucun résultat trouvé pour "{search}".</h3>
            <p style={{color:"#64748b"}}>Essayez de vérifier l'orthographe ou utilisez des mots plus simples (ex: "Huile", "Phare").</p>
            
            <Link to="/" className="add-cart-btn" style={{width:"auto", display:"inline-block", marginTop:"20px"}}>
              Retour à l'accueil
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;