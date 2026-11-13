import React, { useState } from 'react';
import { Search, Layers } from 'lucide-react';
import './Sidebar.css';

// Mock data for recent locations and layers
const recentLocations = [
  { name: 'New York, USA' },
  { name: 'Paris, France' },
  { name: 'Tokyo, Japan' },
];

const mapLayers = [
  { id: 'roads', label: 'Roads' },
  { id: 'terrain', label: 'Terrain' },
  { id: 'satellite', label: 'Satellite' },
];

interface Props {
  selected: { name: string; lat: number; lng: number; zoom: number };
}

export const Sidebar: React.FC<Props> = ({ selected }) => {
  const [search, setSearch] = useState('');
  const [activeLayers, setActiveLayers] = useState<string[]>(['roads']);

  const toggleLayer = (id: string) => {
    setActiveLayers(prev =>
      prev.includes(id) ? prev.filter(l => l !== id) : [...prev, id]
    );
  };

  return (
    <aside className="sidebar">
      <div className="search-section">
        <div className="search-box">
          <Search size={16} className="icon" />
          <input
            type="text"
            placeholder="Search location…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="section">
        <h3>Recent Locations</h3>
        <ul>
          {recentLocations.map(loc => (
            <li key={loc.name}>{loc.name}</li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h3>Map Layers</h3>
        <ul className="layers-list">
          {mapLayers.map(layer => (
            <li key={layer.id}>
              <label>
                <input
                  type="checkbox"
                  checked={activeLayers.includes(layer.id)}
                  onChange={() => toggleLayer(layer.id)}
                />
                {layer.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="section selected-info">
        <h3>Selected Location</h3>
        <p>{selected.name}</p>
        <p>
          Lat: {selected.lat.toFixed(5)}
          <br />
          Lng: {selected.lng.toFixed(5)}
        </p>
        <p>Zoom: {selected.zoom}</p>
      </div>
    </aside>
  );
};
