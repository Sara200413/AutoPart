import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/FAQ.css';
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqData = [
    {
      question: "Combien de temps prend la livraison ?",
      answer: "La livraison prend généralement entre 24h et 48h ouvrables partout au Maroc via nos partenaires Amana ou Aramex."
    },
    {
      question: "Puis-je retourner une pièce si elle ne convient pas ?",
      answer: "Oui, vous avez 7 jours pour retourner le produit dans son emballage d'origine. Contactez-nous pour lancer la procédure."
    },
    {
      question: "Comment savoir si la pièce est compatible avec ma voiture ?",
      answer: "Sur la page 'Catalogue', utilisez les filtres 'Marque' et 'Modèle'. De plus, cherchez le badge vert '✓ Compatible' sur l'image du produit."
    },
    {
      question: "Quels sont les moyens de paiement acceptés ?",
      answer: "Nous acceptons le paiement à la livraison (Cash on Delivery) pour votre sécurité, ainsi que les virements bancaires."
    },
    {
      question: "Avez-vous un magasin physique ?",
      answer: "Oui, notre dépôt est situé à la Zone Industrielle de Casablanca. Vous pouvez venir récupérer votre commande sur place."
    }
  ];
  return (
    <div className="faq-page-container">
      <div className="faq-header">
        <h1>Questions Fréquentes</h1>
        <p>Retrouvez ici les réponses à vos questions les plus courantes.</p>
      </div>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              <h3>{item.question}</h3>
              <span className="faq-icon">
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="faq-contact-banner">
        <p>Vous ne trouvez pas votre réponse ?</p>
        <Link to="/footer" className="btn-contact">Contactez-nous directement</Link>
      </div>

    </div>
  );
};

export default FAQ;