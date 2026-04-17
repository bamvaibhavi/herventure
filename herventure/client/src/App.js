import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  // saving user name
  const [userName, setUserName] = useState('');

  return (
    <Router>
      <Routes>
        {/* 1. Home Page */}
        <Route path="/" element={<Home />} />
        
        {/* 2. Login Page */}
        <Route path="/login" element={<Login setUserName={setUserName} />} />
        
        {/* 3. Dashboard (Main Logic) */}
        <Route path="/dashboard" element={<Dashboard userName={userName} />} />
      </Routes>
    </Router>
  );
}

export default App;