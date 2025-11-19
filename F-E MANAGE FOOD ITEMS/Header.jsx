import React from 'react'
import { FiSearch, FiCamera, FiShoppingCart } from 'react-icons/fi'
import './Header.css'

function Header({ cartCount }) {
  return (
    <div className="header">
      <div className="status-bar">
        <span className="time">16:04</span>
        <div className="status-icons">
          <span className="signal">📶</span>
          <span className="wifi">📶</span>
          <span className="battery">🔋</span>
        </div>
      </div>
      <div className="header-content">
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="header-actions">
          <FiCamera className="action-icon" />
          <div className="cart-icon-wrapper">
            <FiShoppingCart className="action-icon" />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </div>
          <div className="profile-icons">
            <div className="profile-icon"></div>
            <div className="profile-icon"></div>
            <div className="profile-icon"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

