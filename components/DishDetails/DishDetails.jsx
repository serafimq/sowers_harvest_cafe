// src/components/DishDetails/DishDetails.jsx
import React from 'react';
import { useMenu } from '../../context/MenuContext';
import './DishDetails.scss';

const DishDetails = () => {
  const { selectedDish, setSelectedDish } = useMenu();
  
  if (!selectedDish) return null;
  
  return (
    <div className="dish-details-overlay">
      <div className="dish-details-container">
        <button 
          className="close-button"
          onClick={() => setSelectedDish(null)}
        >
          ×
        </button>
        
        <div className="dish-details-content">
          <div className="dish-details-image-container">
            <img 
              src={selectedDish.image} 
              alt={selectedDish.name} 
              className="dish-details-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/assets/images/default-dish.jpg';
              }}
            />
            <div className="dish-details-category">{selectedDish.category}</div>
          </div>
          
          <div className="dish-details-info">
            <h2 className="dish-details-name">{selectedDish.name}</h2>
            
            <div className="dish-details-price-section">
              <div className="dish-details-price">${selectedDish.price.toFixed(2)}</div>
              
              {selectedDish.allergens && selectedDish.allergens.length > 0 && (
                <div className="dish-details-allergens">
                  <span className="allergens-label">Contains:</span>
                  {selectedDish.allergens.join(', ')}
                </div>
              )}
            </div>
            
            <div className="dish-details-section">
              <h3>Description</h3>
              <p>{selectedDish.description}</p>
            </div>
            
            <div className="dish-details-section">
              <h3>Ingredients</h3>
              <ul className="ingredients-list">
                {selectedDish.ingredients.map((ingredient, index) => (
                  <li key={index} className="ingredient-item">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            
            {selectedDish.recommended && (
              <div className="dish-details-section">
                <h3>Chef's Note</h3>
                <p className="recommendation">
                  {selectedDish.recommended}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishDetails;