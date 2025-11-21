import React from 'react'
import { FiHome, FiHeart, FiList, FiHeadphones } from 'react-icons/fi'
import { FiCoffee } from 'react-icons/fi'
import './BottomNav.css'

function BottomNav() {
  return (
    <div className="bottom-nav">
      <div className="nav-item">
        <FiHome className="nav-icon" />
        <span className="nav-label">Home</span>
      </div>
      <div className="nav-item active">
        <FiCoffee className="nav-icon" />
        <span className="nav-label">Food</span>
      </div>
      <div className="nav-item">
        <FiHeart className="nav-icon" />
        <span className="nav-label">Favorites</span>
      </div>
      <div className="nav-item">
        <FiList className="nav-icon" />
        <span className="nav-label">List</span>
      </div>
      <div className="nav-item">
        <FiHeadphones className="nav-icon" />
        <span className="nav-label">Support</span>
      </div>
    </div>
  )
}

export default BottomNav

