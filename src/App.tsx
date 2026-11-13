import React from 'react';
import { HeaderOverlay } from './components/HeaderOverlay';
import { FloatingControls } from './components/FloatingControls';
import { MapPlaceholder } from './components/MapPlaceholder';
import { MapOverlay } from './components/MapOverlay';
import { ScaleIndicator } from './components/ScaleIndicator';
import { Legend } from './components/Legend';
import './App.css';

// Mock selected location data (used by overlays)
const mockLocation = {
  name: 'London, United Kingdom',
  lat: 51.505,
  lng: -0.09,
  zoom: 13,
};

const App: React.FC = () => {
  return (
    <div className="app-root">
      <HeaderOverlay />
      <div className="map-area">
        <MapPlaceholder />
        <FloatingControls />
        <MapOverlay lat={mockLocation.lat} lng={mockLocation.lng} zoom={mockLocation.zoom} />
        <ScaleIndicator />
        <Legend />
      </div>
    </div>
  );
};

export default App;
