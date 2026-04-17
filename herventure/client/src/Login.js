import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Login({ setUserName }) {
  const [inputName, setInputName] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (inputName.trim() !== "") {
      setUserName(inputName);
      navigate('/dashboard');
    } else {
      alert("Please enter your name!");
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      
      {/* LEFT SIDE: IMAGE */}
     <div className="fade-in" style={{ flex: 1, background: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80) center/cover', position: 'relative' }}>
  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', color: 'white' }}>
    <h2>"Empowering Women to Lead & Succeed."</h2>
    <p>Join thousands of women building and scaling their businesses today.</p>
  </div>
</div>

      {/* RIGHT SIDE: FORM */}
      <div style={{ flex: 0.8, display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'white' }}>
        <div style={{ width: '350px', textAlign: 'center' }}>
            <h1 style={{ color: '#be185d', fontSize: '3rem', marginBottom: '10px' }}>Welcome!</h1>
            <p style={{ color: '#888', marginBottom: '40px' }}>Please login to access your dashboard.</p>
            
            <input 
              type="text" 
              placeholder="Enter your Name" 
              style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '16px', marginBottom: '20px', background: '#f9fafb' }}
              onChange={(e) => setInputName(e.target.value)}
            />
            
            <button 
              onClick={handleLogin} 
              className="glow-btn"
              style={{ width: '100%', padding: '15px', color: 'white', border: 'none', borderRadius: '10px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' }}
            >
              Let's Go ➜
            </button>
        </div>
      </div>

    </div>
  );
}

export default Login;