import React from 'react';
import { MapPin } from 'lucide-react';
import './HeaderOverlay.css';

export const HeaderOverlay: React.FC = () => (
  <header className="header-overlay">
    <div className="logo">
      <MapPin size={28} className="logo-icon" />
      <span className="wordmark">DRIVES ROAD</span>
    </div>
  </header>
);
