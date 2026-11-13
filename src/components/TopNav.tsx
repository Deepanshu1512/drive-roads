import React from 'react';
import './TopNav.css';
import { MapPin, Settings, User } from 'lucide-react';

export const TopNav: React.FC = () => (
  <header className="top-nav">
    <div className="logo">
      <MapPin size={24} className="icon" />
      <span className="title">DRIVES ROAD</span>
    </div>
    <nav className="nav-links">
      <button className="nav-button active">Map Explorer</button>
      <button className="nav-button">Explore</button>
    </nav>
    <div className="actions">
      <Settings size={20} className="icon" />
      <User size={20} className="icon" />
    </div>
  </header>
);
