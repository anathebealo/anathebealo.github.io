import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import 'leaflet/dist/leaflet.css';
import './about.css';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const places = [
  { "position": [53.7798, -7.3055], "name": "Ireland 2015", "year": 2015 },
  { "position": [43.1566, -77.6088], "name": "Rochester 2011-2015", "year": 2015 },
  { "position": [55.6761, 12.5683], "name": "Copenhagen 2016", "year": 2016 },
  { "position": [19.076, 72.8777], "name": "Mumbai 2017, 2018", "year": 2017 },
  { "position": [51.5072, 0.1276], "name": "London 2010, 2018", "year": 2018 },
  { "position": [37.7749, -122.4194], "name": "San Francisco 2014, 2015, 2018", "year": 2018 },
  { "position": [47.3769, 8.5417], "name": "Zurich 2018", "year": 2018 },
  { "position": [44.5646, -123.262], "name": "Oregon 2018", "year": 2018 },
  { "position": [48.7758, 9.1829], "name": "Stutgart 2019", "year": 2019 },
  { "position": [47.6061, -122.3328], "name": "Seattle 2014, 2018, 2019", "year": 2019 },
  { "position": [52.3676, 4.9041], "name": "Amsterdam 2019", "year": 2019 },
  { "position": [38.9517, -92.3341], "name": "Missouri 2019", "year": 2019 },
  { "position": [57.2736, -6.2155], "name": "Isle of Skye 2022", "year": 2022 },
  { "position": [-50.9423, -73.4068], "name": "Patagonia 2022", "year": 2022 },
  { "position": [32.0809, -81.0912], "name": "Savannah 2022", "year": 2022 },
  { "position": [36.8065, 10.1815], "name": "Tunis 2023", "year": 2023 },
  { "position": [48.8566, 2.3522], "name": "Paris 2010, 2023", "year": 2023 },
  { "position": [43.7696, 11.2558], "name": "Florence 2023", "year": 2023 },
  { "position": [45.4408, 12.3155], "name": "Venice 2010, 2023", "year": 2023 },
  { "position": [21.1619, -86.8515], "name": "Cancun 2023", "year": 2023}
]

const MapComponent = () => {
  return <div>
    <h1>Places I've Traveled</h1>
    <MapContainer style={{ height: "700px", width: "70%" }} center={[10, -12]} zoom={2} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places.map(x => <Marker position={x.position}> <Popup>{x.name}</Popup></Marker>)}
    </MapContainer>
  </div>
}

export default MapComponent;

