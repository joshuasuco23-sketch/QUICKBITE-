import React from 'react'
import './CategoryBar.css'

const categoryIcons = {
  Snacks: '🥨',
  Meal: '🍽️',
  Vegan: '🌱',
  Dessert: '🧁',
  Drinks: '🥤'
}

function CategoryBar({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="category-bar">
      {categories.map((category) => (
        <div
          key={category}
          className={`category-item ${
            selectedCategory === category ? 'active' : ''
          }`}
          onClick={() => onCategoryChange(category)}
        >
          <div className="category-icon">{categoryIcons[category] || '🍽️'}</div>
          <span className="category-name">{category}</span>
        </div>
      ))}
    </div>
  )
}

export default CategoryBar

