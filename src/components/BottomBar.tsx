import React from 'react';
import './BottomBar.css';

interface Props {
  location: { name: string; lat: number; lng: number; zoom: number };
}

import './BottomBar.css';

export const BottomBar: React.FC<Props> = ({ location }) => (
  <footer className="bottom-bar">
    <div className="info-item">Lat: {location.lat.toFixed(5)}</div>
    <div className="info-item">Lng: {location.lng.toFixed(5)}</div>
    <div className="info-item">Zoom: {location.zoom}</div>
    <div className="info-item version">v0.1.0</div>
  </footer>
);
