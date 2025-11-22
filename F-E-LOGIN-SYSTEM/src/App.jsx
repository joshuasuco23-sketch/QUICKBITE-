import React, { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const handleLogin = async () => {
    const res = await fetch('http://localhost:4000/api/login',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({email, password:pw})
    });
    alert(await res.text());
  };

  return (
    <div style={{padding:40, fontFamily:'sans-serif'}}>
      <h2>Log In</h2>
      <input placeholder="Email or Mobile" value={email} onChange={e=>setEmail(e.target.value)} /><br/><br/>
      <input placeholder="Password" type="password" value={pw} onChange={e=>setPw(e.target.value)} /><br/><br/>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}
