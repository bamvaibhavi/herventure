import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Dashboard({ userName }) {
  const navigate = useNavigate();
  
  
  const [formData, setFormData] = useState({ skill: 'IT', education: 'Degree' });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Searching...");

  useEffect(() => {
    if (!userName) navigate('/login');
  }, [userName, navigate]);

  useEffect(() => {
    let interval;
    if (loading) {
      const messages = [
        "Connecting to Govt Portals... 🏛️",
        `Analyzing schemes for ${formData.skill}... 🔍`,
        "Fetching Direct Links... 🔗",
        "Finalizing Results... 🚀"
      ];
      let i = 0;
      setLoadingText(messages[0]);
      interval = setInterval(() => {
        i = (i + 1) % messages.length;
        setLoadingText(messages[i]);
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [loading, formData]);

  const handleMatch = async () => {
    
    setLoading(true);
    setResults([]);
    try {
      const res = await axios.post('http://localhost:5000/api/match', formData);
      setResults(res.data);
    } catch (err) { 
      alert("Server Busy! Please try again."); 
    }
    setLoading(false);
  };

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh', paddingBottom: '50px' }}>
      
      {/* TOP BAR */}
      <div style={{ background: 'white', padding: '15px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', position: 'sticky', top: 0, zIndex: 10 }}>
        <h2 style={{ color: '#be185d', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
             HerVenture <span style={{fontSize: '14px', background: '#fce7f3', padding: '4px 10px', borderRadius: '10px'}}>Dashboard</span>
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ color: '#555' }}>Hello, <b>{userName}</b> 👋</span>
            <button onClick={() => navigate('/')} style={{ padding: '8px 20px', border: '1px solid #ddd', background: 'transparent', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold' }}>Logout</button>
        </div>
      </div>

      <div style={{ maxWidth: '1000px', margin: '40px auto', padding: '0 20px' }}>
        
        {/* MAIN TITLE */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h1 style={{ color: '#1f2937' }}>Find Your Perfect Scheme</h1>
            <p style={{ color: '#6b7280' }}>Select your details to fetch 100% Live government opportunities.</p>
        </div>

        {/* GLASS CARD FORM */}
        <div className="fade-in" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0' }}>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '30px', justifyContent: 'center' }}>
                
                <div style={{ flex: 1, minWidth: '200px', maxWidth: '400px' }}>
                    <label style={{ fontWeight: '600', display: 'block', marginBottom: '10px', color: '#4b5563' }}>I want to start:</label>
                    <select style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid #e5e7eb', background: '#f9fafb', fontSize: '16px' }} onChange={(e) => setFormData({...formData, skill: e.target.value})}>
                        <option value="IT">IT / Freelancing</option>
                        <option value="Cooking">Cooking / Food Business</option>
                        <option value="Tailoring">Tailoring / Fashion</option>
                        <option value="Beauty">Beauty Parlour / Salon</option>
                        <option value="Tuition">Tuition / Coaching</option>
                    </select>
                </div>

                <div style={{ flex: 1, minWidth: '200px', maxWidth: '400px' }}>
                    <label style={{ fontWeight: '600', display: 'block', marginBottom: '10px', color: '#4b5563' }}>My Education:</label>
                    <select style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid #e5e7eb', background: '#f9fafb', fontSize: '16px' }} onChange={(e) => setFormData({...formData, education: e.target.value})}>
                        <option value="Degree">Graduate / Degree</option>
                        <option value="12th Pass">12th Pass</option>
                        <option value="10th Pass">10th Pass</option>
                    </select>
                </div>
                
                

            </div>
            
            <button onClick={handleMatch} disabled={loading} className="glow-btn" style={{ width: '100%', padding: '18px', color: 'white', border: 'none', borderRadius: '12px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', opacity: loading ? 0.7 : 1 }}>
                {loading ? <span>⏳ {loadingText}</span> : "🔍 Search Live Opportunities"}
            </button>
        </div>

        {/* RESULTS GRID */}
        <div style={{ marginTop: '50px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            
            {results.length === 0 && !loading && (
                 <div style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#6b7280', padding: '20px' }}>
                     Select options and click search to view schemes.
                 </div>
            )}

            {results.map((scheme, index) => (
                <div key={index} className="hover-card" style={{ background: 'white', padding: '25px', borderRadius: '15px', border: '1px solid #f0f0f0', position: 'relative', overflow: 'hidden' }}>
                    
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'linear-gradient(to right, #be185d, #ec4899)' }}></div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                        <span style={{ background: '#ecfdf5', color: '#047857', padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold' }}>LIVE VERIFIED</span>
                        <span style={{ fontSize: '20px' }}>🏛️</span>
                    </div>

                    <h3 style={{ margin: '15px 0 10px 0', fontSize: '1.25rem', color: '#111827' }}>{scheme.title}</h3>

                    <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6', marginBottom: '20px' }}>{scheme.description}</p>
                    
                    {/* THE MAGIC BUTTON (Apply Now with Link) */}
                    <a href={scheme.link} target="_blank" rel="noreferrer" style={{ display: 'block', textAlign: 'center', background: '#2563eb', color: 'white', padding: '12px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', transition: '0.3s' }}>
                        Apply Now ↗
                    </a>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;