import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';

class Map extends Component {
  render() {
    const streetCoordinates = [
        [42.842992, 74.592382],
        [42.852146, 74.629626],
        [42.84405, 74.644305],
        // ... дополнительные координаты для полигона
      ];
    
      return (
        <MapContainer center={[42.8746, 74.5698]} zoom={13} style={{ height: '800px' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <Polygon  pathOptions={{ color: 'red' }} positions={streetCoordinates} />
        </MapContainer>
      );
  }
}

export default Map;
