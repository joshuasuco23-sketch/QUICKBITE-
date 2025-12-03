import React from 'react'

const methods = [
  { id: 1, title: 'MasterCard Or Visa', icon: 'card' },
  { id: 2, title: 'Cash On Delivery', icon: 'cash' },
  { id: 3, title: 'Paypal', icon: 'paypal' },
  { id: 4, title: 'Gcash', icon: 'gcash' },
]

function Icon({name}){
  // simple inline icons (SVG)
  if(name === 'card') return (
    <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="3" width="34" height="18" rx="3" stroke="#7A5C4A" strokeWidth="1.2" fill="none"/>
      <rect x="4" y="9" width="8" height="2" rx="0.5" fill="#7A5C4A"/>
    </svg>
  )
  if(name === 'cash') return (
    <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="4" width="34" height="16" rx="2" stroke="#7A5C4A" strokeWidth="1.2" fill="none"/>
      <circle cx="18" cy="12" r="3" stroke="#7A5C4A" strokeWidth="1.2" fill="none"/>
    </svg>
  )
  if(name === 'paypal') return (
    <svg width="36" height="24" viewBox="0 0 36 24" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="16" fontFamily="Arial" fontSize="12" fill="#7A5C4A">P</text>
    </svg>
  )
  if(name === 'gcash') return (
    <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="16" fill="#0A0A0A"/>
      <text x="9" y="22" fontFamily="Arial" fontSize="10" fill="#fff">G</text>
    </svg>
  )
  return null
}

export default function PaymentMethods(){
  return (
    <div className="screen">
      <div className="topbar">
        <button className="back">{'<'}</button>
        <h1>Payment Methods</h1>
      </div>

      <div className="card">
        {methods.map(m => (
          <div key={m.id} className="method-row">
            <div className="left">
              <div className="icon-wrap"><Icon name={m.icon} /></div>
              <div className="title">{m.title}</div>
            </div>
            <div className="right">
              <div className="radio" />
            </div>
          </div>
        ))}

        <div className="add-row">
          <button className="add-btn">Add New Card</button>
        </div>
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
