import React from 'react';
import { ZoomIn, ZoomOut, Target } from 'lucide-react';
import './MapPlaceholder.css';

export const MapPlaceholder: React.FC = () => (
  <div className="map-placeholder">
    <div className="map-bg" />
    <div className="map-controls">
      <button className="control-button"><ZoomIn size={18} /></button>
      <button className="control-button"><ZoomOut size={18} /></button>
      <button className="control-button"><Target size={18} /></button>
    </div>
    <div className="marker-placeholder" />
  </div>
);
