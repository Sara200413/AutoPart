import React, { useState, useEffect } from "react";
import { LuTruck, LuShieldCheck, LuTrophy, LuHeadphones } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 
import '../styles/Homepage.css'; 
const Homepage = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate(); 
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const carDatabase = {
    Toyota: ["Corolla", "Camry", "RAV4", "Hilux", "Yaris", "Land Cruiser"],
    BMW: ["Serie 3", "Serie 5", "X3", "X5", "X1", "Serie 1"],
    Mercedes: ["Classe A", "Classe C", "Classe E", "GLA", "GLC", "GLE"],
    Peugeot: ["208", "308", "2008", "3008", "5008", "Partner"],
    Renault: ["Clio", "Megane", "Captur", "Kadjar", "Duster", "Kangoo"],
    Dacia: ["Sandero", "Duster", "Logan", "Lodgy", "Dokker"],
    Hyundai: ["i10", "i20", "Tucson", "Santa Fe", "Kona", "Elantra"],
    Volkswagen: ["Golf", "Polo", "Tiguan", "Passat", "T-Roc", "Caddy"],
    Audi: ["A3", "A4", "A6", "Q3", "Q5", "Q7"],
    Ford: ["Fiesta", "Focus", "Kuga", "Puma", "Ranger", "Transit"]
  };
  const years = ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015"];
  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
    setSelectedModel(""); 
    setSelectedYear("");  
  };
  const handleSearch = () => {
    if (selectedBrand && selectedModel && selectedYear) {
      navigate('/shop', { 
        state: { 
          brand: selectedBrand, 
          model: selectedModel, 
          year: selectedYear 
        } 
      });
    } 
  };
  const handleViewCatalogue = () => {
    navigate('/shop'); 
  };
  return (
    <div className="homepage">
      <div className="homepage-container">    
        <div className="homepage-grid">
          <div className="search-box">
            <div className="search-box-content">
              <div className="logo-container">
                <div className="logo-icon">
                 <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> 
                  </svg>
                </div>
                <span className="logo-text">AutoParts </span>
              </div>
              <h1 className="search-title">Trouvez vos pièces auto en quelques clics</h1>
              <p className="search-subtitle">+10 000 pièces compatibles • Livraison rapide • Garantie qualité</p>
              <div className="form-group">
                <label className="form-label">Marque</label>
                <select value={selectedBrand} onChange={handleBrandChange} className="form-select">
                  <option value="">Sélectionnez une marque</option>
                  {Object.keys(carDatabase).map((brand) => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Modèle</label>
                <select 
                  value={selectedModel} 
                  onChange={(e) => setSelectedModel(e.target.value)} 
                  disabled={!selectedBrand} 
                  className="form-select">
                  <option value="">{selectedBrand ? "Choisissez un modèle" : "Choisissez d'abord une marque"}</option>
                  {selectedBrand && carDatabase[selectedBrand].map((model) => (
                    <option key={model} value={model}>{model}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Année</label>
                <select 
                  value={selectedYear} 
                  onChange={(e) => setSelectedYear(e.target.value)} 
                  disabled={!selectedModel} 
                  className="form-select">
                  <option value="">{selectedModel ? "Sélectionnez l'année" : "Choisissez d'abord un modèle"}</option>
                  {selectedModel && years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              <button 
                onClick={handleSearch} 
                disabled={!selectedBrand || !selectedModel || !selectedYear} 
                className={`search-button ${selectedBrand && selectedModel && selectedYear ? 'active' : 'disabled'}`}>
                 Rechercher les pièces
              </button>
              {selectedBrand && (
                <div className="selection-tags">
                  <span className="tag tag-blue">{selectedBrand}</span>
                  {selectedModel && <span className="tag tag-green">{selectedModel}</span>}
                  {selectedYear && <span className="tag tag-orange">{selectedYear}</span>}
                </div>
              )}
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero-image-container">
           <img 
             src="/images/autoPartHomeImg.jpeg"  
             alt="Auto parts" 
             className="hero-image" 
             />
            <div className="hero-overlay"></div>

            <div className="badges-container">
              <div className="badge badge-red"> -30% Cette Semaine</div>
              <div className="badge badge-green"> +10 000 Articles</div>
            </div>

            <div className="hero-content">
              <h2 className="hero-title">Pièces Auto<br/><span>Homologuées</span></h2>
              <p className="hero-description">Carrosserie, moteur, suspension, éclairage. Produits certifiés et testés pour votre sécurité.</p>
              <button className="hero-button" onClick={handleViewCatalogue}>
                Découvrir le catalogue
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <LuTruck size={40} color="#166534" /> 
            </div>
            <div className="feature-title">Livraison Rapide</div>
            <div className="feature-desc">24-48h partout</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <LuShieldCheck size={40} color="#166534" />
            </div>
            <div className="feature-title">100% Garantie</div>
            <div className="feature-desc">Satisfait ou remboursé</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <LuTrophy size={40} color="#166534" />
            </div>
            <div className="feature-title">Qualité Premium</div>
            <div className="feature-desc">Pièces certifiées</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <LuHeadphones size={40} color="#166534" />
            </div>
            <div className="feature-title">Support 24/7</div>
            <div className="feature-desc">Assistance WhatsApp</div>
          </div>
        </div>

        {/*WHATSAPP FLOTTANT */}
        <div className="whatsapp-container" style={{ transform: `translateY(${Math.min(scrollY * 0.1, 20)}px)` }}>
       <div className="whatsapp-glow"></div>
       <a 
       href="https://wa.me/212653063571?text=salut,%20informations%20sur%20votre%20magazin"
       className="whatsapp-button"
       target="_blank" 
       rel="noopener noreferrer"
       style={{ textDecoration: 'none' }} 
       >
    <div className="whatsapp-icon-container">
      <FaWhatsapp size={32} color="#fff" />
    </div>
    <div className="whatsapp-text">
      <div className="whatsapp-text-small">Besoin d'aide ?</div>
      <div className="whatsapp-text-main">WhatsApp</div>
    </div>
      </a>
    </div>

        {/* --- SECTION INFO BOUTIQUE --- */}
        <div className="info-section">
          {/* Colonne de GAUCHE */}
          <div className="info-content">
            <div className="info-header-line"></div>
            <h2 className="info-title">Pièces auto au Maroc – optiques, rétroviseurs, pare-chocs & carrosserie</h2>
            <p className="info-subtitle">LIVRAISON PARTOUT AU MAROC • PAIEMENT À LA LIVRAISON</p>

            <div className="info-tags">
              <span>Carrosserie & pare-chocs</span>
              <span>Optiques & éclairage</span>
              <span>Rétroviseurs & vitrages</span>
              <span>Moteur, freins & suspension</span>
            </div>
            <p className="info-description">
              <strong>AutoPart</strong> propose un large choix de <strong>pièces auto Maroc</strong>. 
              Optiques, pare-chocs, rétroviseurs, ailes, capots : tout pour réparer votre voiture.
            </p>
            <p className="info-description">
              Grâce à notre sélecteur, voyez uniquement les <strong>pièces 100 % compatibles</strong>.
            </p>
            <div className="info-footer">
              <div>
                <h4>Catalogue complet</h4>
                <p>Carrosserie, pare-chocs...</p>
              </div>
              <div>
                <h4>Livraison Maroc</h4>
                <p>Casablanca, Rabat, Fes...</p>
              </div>
              <div>
                <h4>Paiement sécurisé</h4>
                <p>Cash à la livraison.</p>
              </div>
            </div>
          </div>

          {/* Colonne de DROITE (Stats) */}
          <div className="info-stats">
            <h3 className="stats-title">CHIFFRES CLÉS</h3>
            <p className="stats-subtitle">Une plateforme pensée pour les conducteurs.</p>

            <div className="stat-item">
              <div className="stat-number">70 000+</div>
              <div className="stat-label">RÉFÉRENCES</div>
              <p className="stat-desc">Carrosserie, optiques, freins...</p>
            </div>

            <div className="stat-item">
              <div className="stat-number">24-72h</div>
              <div className="stat-label">DÉLAIS</div>
              <p className="stat-desc">Livraison partout au Maroc.</p>
            </div>

            <div className="stat-item">
              <div className="stat-number">100 %</div>
              <div className="stat-label">SÉCURISÉ</div>
              <p className="stat-desc">Cash à la livraison & Support.</p>
            </div>
          </div>
        </div>

        {/* --- SECTION CATEGORIES (4 FAMILLES) --- */}
        <div className="categories-section">
          <div className="categories-header">
            <div className="cat-main-text">
              <span className="yellow-pill">● CATÉGORIES PRINCIPALES</span>
              <h2 className="cat-title">Les 4 grandes familles de pièces</h2>
              <p className="cat-desc-text">
                Un catalogue complet adapté aux marques les plus populaires au Maroc.
              </p>
            </div>
            <div className="cat-side-text">
              <h4 className="cat-side-title">VUE D'ENSEMBLE</h4>
              <p>Parcourez d'abord la famille de pièces, puis affinez avec la marque.</p>
            </div>
          </div>

          <div className="categories-grid">
            <div className="cat-item">
              <div className="cat-number">01</div>
              <div className="cat-content">
                <h3>Carrosserie & extérieur</h3>
                <p>Pare-chocs, ailes, capots...</p>
              </div>
            </div>
            <div className="cat-item">
              <div className="cat-number">02</div>
              <div className="cat-content">
                <h3>Éclairage & optiques</h3>
                <p>Phares, feux arrière, LED...</p>
              </div>
            </div>
            <div className="cat-item">
              <div className="cat-number">03</div>
              <div className="cat-content">
                <h3>Pièces moteur</h3>
                <p>Radiateurs, filtres, pompes...</p>
              </div>
            </div>
            <div className="cat-item">
              <div className="cat-number">04</div>
              <div className="cat-content">
                <h3>Freins & suspension</h3>
                <p>Disques, plaquettes, amortisseurs...</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Homepage;