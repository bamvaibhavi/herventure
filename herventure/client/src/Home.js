import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="fade-in" style={{ minHeight: '100vh', background: 'white' }}>
      
      {/* NAVBAR */}
      <nav style={{ padding: '20px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backdropFilter: 'blur(10px)', background: 'rgba(255,255,255,0.8)', position: 'sticky', top: 0, zIndex: 100 }}>
        <h2 style={{ color: '#be185d', fontSize: '28px', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
          🚀 HerVenture
        </h2>
        <Link to="/login" className="glow-btn" style={{ padding: '12px 25px', color: 'white', textDecoration: 'none', borderRadius: '30px', fontWeight: 'bold' }}>
          Login
        </Link>
      </nav>

      {/* HERO SECTION (Text + Image) */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '50px 80px', flexWrap: 'wrap' }}>
        
        {/* Left Text */}
        <div style={{ flex: 1, minWidth: '400px' }}>
          
          <h1 style={{ fontSize: '3.5rem', color: '#1f2937', lineHeight: '1.2', marginTop: '20px' }}>
            Empowering Women to <br/>
            <span style={{ color: '#be185d' }}>Build & Scale</span> their <br/>
            Own Business.
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#6b7280', margin: '20px 0 40px 0', maxWidth: '500px' }}>
            We bridge the gap between your ambition and the right opportunities. Instantly find verified <b>Government Schemes, Grants, and Financial Aid</b> tailored to your skills and industry.
          </p>
          <Link to="/login" className="glow-btn" style={{ padding: '15px 40px', color: 'white', textDecoration: 'none', borderRadius: '10px', fontSize: '18px', fontWeight: 'bold' }}>
            Find My Scheme ➜
          </Link>
        </div>

        {/* Right Image */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
            alt="Woman Entrepreneur" 
            style={{ borderRadius: '30px 0 30px 0', boxShadow: '20px 20px 0px #fce7f3', width: '100%', maxWidth: '500px' }} 
          />
        </div>
      </div>

      {/* FEATURES STRIP */}
      <div style={{ background: '#fdf2f8', padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '50px', color: '#333' }}>How HerVenture Supports Your Business Journey</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
           
           {/* Card 1 */}
           <div className="hover-card" style={{ background: 'white', padding: '30px', borderRadius: '20px', width: '280px' }}>
              <div style={{ fontSize: '40px', marginBottom: '10px' }}>⚡</div>
              <h3>Skill-Based Matching</h3>
              <p style={{ color: '#666' }}>Our system finds relevant government schemes that align with your specific skills and business sector.</p>
           </div>

           {/* Card 2 */}
           <div className="hover-card" style={{ background: 'white', padding: '30px', borderRadius: '20px', width: '280px' }}>
              <div style={{ fontSize: '40px', marginBottom: '10px' }}>🛡️</div>
              <h3>Verified Information</h3>
              <p style={{ color: '#666' }}>We eliminate fake ads and consultants, bringing you 100% authentic data straight from .gov.in domains.</p>
           </div>

           {/* Card 3 */}
           <div className="hover-card" style={{ background: 'white', padding: '30px', borderRadius: '20px', width: '280px' }}>
              <div style={{ fontSize: '40px', marginBottom: '10px' }}>🔗</div>
              <h3>Direct Access</h3>
              <p style={{ color: '#666' }}>No more endless browsing. Get direct, clickable application links to official government portals instantly.</p>
           </div>

        </div>
      </div>
    </div>
  );
}

export default Home;