import React, { useState } from "react";

export default function Profile() {
  const [form, setForm] = useState({
    name: "Algie Badana",
    dob: "09 / 10 /1991",
    email: "example@example.com",
    phone: "+123 567 891012"
  });

  const update = (key, val) => {
    setForm({ ...form, [key]: val });
  };

  return (
    <div className="screen">
      <div className="topbar">
        <button className="back">{'<'}</button>
        <h1>My profile</h1>
      </div>

      <div className="card">

        <div className="profile-pic">
          <img src="https://i.imgur.com/4AiXzf8.jpeg" alt="avatar" />
        </div>

        <label className="lbl">Full Name</label>
        <input
          className="inp"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
        />

        <label className="lbl">Date of Birth</label>
        <input
          className="inp"
          value={form.dob}
          onChange={(e) => update("dob", e.target.value)}
        />

        <label className="lbl">Email</label>
        <input
          className="inp"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
        />

        <label className="lbl">Phone Number</label>
        <input
          className="inp"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
        />

        <button className="update-btn">Update Profile</button>
      </div>

      <div className="bottom-nav">
        <div className="nav-item">🏠</div>
        <div className="nav-item">🍔</div>
        <div className="nav-item">❤️</div>
        <div className="nav-item">🧾</div>
        <div className="nav-item">👤</div>
      </div>
    </div>
  );
}
