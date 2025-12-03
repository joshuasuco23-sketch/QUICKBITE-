import React, { useState } from 'react'

export default function NotificationSettings(){

  const [toggles, setToggles] = useState({
    general: true,
    sound: true,
    soundCall: true,
    vibrate: false,
    offers: false,
    payments: false,
    promo: false,
    cashback: true
  })

  const toggle = (key) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const list = [
    { key:'general', label:'General Notification' },
    { key:'sound', label:'Sound' },
    { key:'soundCall', label:'Sound Call' },
    { key:'vibrate', label:'Vibrate' },
    { key:'offers', label:'Special Offers' },
    { key:'payments', label:'Payments' },
    { key:'promo', label:'Promo and discount' },
    { key:'cashback', label:'Cashback' },
  ]

  return (
    <div className="screen">

      <div className="topbar">
        <button className="back">{'<'}</button>
        <h1>Notification Setting</h1>
      </div>

      <div className="card">
        {list.map(item => (
          <div className="row" key={item.key}>
            <span>{item.label}</span>
            <div
              className={toggles[item.key] ? "switch on" : "switch"}
              onClick={() => toggle(item.key)}
            >
              <div className="circle"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="bottom-nav">
        <div className="nav-item">🏠</div>
        <div className="nav-item">🍔</div>
        <div className="nav-item">❤️</div>
        <div className="nav-item">🧾</div>
        <div className="nav-item">👤</div>
      </div>

    </div>
  )
}
