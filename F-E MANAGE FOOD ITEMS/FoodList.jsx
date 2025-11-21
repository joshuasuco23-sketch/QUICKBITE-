import React, { useState } from 'react'
import './FoodList.css'

function FoodList({ foodItems, loading, category }) {
  const [sortBy, setSortBy] = useState('Popular')

  if (loading) {
    return (
      <div className="food-list-container">
        <div className="loading">Loading...</div>
      </div>
    )
  }

  return (
    <div className="food-list-container">
      <div className="sort-section">
        <select
          className="sort-dropdown"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option>Sort By Popular</option>
          <option>Sort By Price</option>
          <option>Sort By Rating</option>
        </select>
      </div>
      <div className="food-items">
        {foodItems.map((item) => (
          <div key={item._id} className="food-item">
            <div className="food-image">
              <img
                src={item.image || '/placeholder-food.jpg'}
                alt={item.name}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/200x150?text=' + encodeURIComponent(item.name)
                }}
              />
            </div>
            <div className="food-info">
              <h3 className="food-name">{item.name}</h3>
              {item.description && (
                <p className="food-description">{item.description}</p>
              )}
              <div className="food-footer">
                <div className="rating">
                  <span className="rating-value">{item.rating}</span>
                </div>
                <div className="price">{item.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FoodList

