import React from 'react'
import ordersImg1 from './assets/food1.jpg'
import ordersImg2 from './assets/food2.jpg'
import ordersImg3 from './assets/food3.jpg'
import ordersImg4 from './assets/water.jpg'

const orders = [
  { id:1, title: 'Rice with Sausage', price: '₱55.00', datetime: '29 Nov, 01:20 pm', items: '2 items', img: ordersImg1 },
  { id:2, title: 'Longganisa with Rice egg', price: '₱55.00', datetime: '10 Nov, 06:05 pm', items: '2 items', img: ordersImg2 },
  { id:3, title: 'AMPALAYA', price: '₱30.00', datetime: '10 Nov, 08:30 am', items: '1 item', img: ordersImg3 },
  { id:4, title: 'MINERAL WATER', price: '₱15.00', datetime: '03 Oct, 03:40 pm', items: '2 items', img: ordersImg4 }
]

export default function App(){
  return (
    <div className="app">
      <header className="topbar">
        <button className="back">‹</button>
        <h1>My Orders</h1>
      </header>

      <div className="card">
        <div className="tabs">
          <button className="tab">Active</button>
          <button className="tab active">Completed</button>
          <button className="tab">Cancelled</button>
        </div>

        <div className="orders-list">
          {orders.map(o => (
            <div className="order" key={o.id}>
              <img src={o.img} alt={o.title} className="thumb"/>
              <div className="order-body">
                <div className="order-top">
                  <h3>{o.title}</h3>
                  <div className="price">{o.price}</div>
                </div>
                <div className="meta">{o.datetime} • <span className="items">{o.items}</span></div>
                <div className="status">Order delivered</div>
                <div className="order-actions">
                  <button className="btn outline">Leave a review</button>
                  <button className="btn">Order Again</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <nav className="bottomnav">
        <div className="navitem">🏠</div>
        <div className="navitem">🍔</div>
        <div className="navitem">❤️</div>
        <div className="navitem">🧾</div>
        <div className="navitem">👤</div>
      </nav>
    </div>
  )
}
