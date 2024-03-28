import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapExample = () => {
  return <div>
    <MapContainer style={{ height: "700px", width: "70%" }} center={[10, -12]} zoom={2} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[55.6761, 12.5683]} > <Popup>Copenhagen 2016</Popup></Marker>
      <Marker position={[19.0760, 72.8777]} > <Popup>Mumbai 2017, 2018</Popup></Marker>
      <Marker position={[51.5072, 0.1276]} > <Popup>London 2018</Popup></Marker>
      <Marker position={[57.2736, -6.2155]} > <Popup>Isle of Skye 2022</Popup></Marker>
      <Marker position={[53.7798, -7.3055]} > <Popup>Ireland 2015</Popup></Marker>
      <Marker position={[48.7758, 9.1829]} > <Popup>Stutgart 2019</Popup></Marker>
      <Marker position={[36.8065, 10.1815]} > <Popup>Tunis 2023</Popup></Marker>
      <Marker position={[-50.9423, -73.4068]} > <Popup>Patagonia 2022</Popup></Marker>
      <Marker position={[47.6061, -122.3328]} > <Popup>Seattle 2014, 2018, 2019</Popup></Marker>
      <Marker position={[37.7749, -122.4194]} > <Popup>San Francisco 2014, 2015, 2018</Popup></Marker>
      <Marker position={[43.1566, -77.6088]} > <Popup>Rochester 2011-2015</Popup></Marker>
      <Marker position={[48.8566, 2.3522]} > <Popup>Paris 2023</Popup></Marker>
      <Marker position={[52.3676, 4.9041]} > <Popup>Amsterdam 2019</Popup></Marker>
      <Marker position={[43.7696, 11.2558]} > <Popup>Florence 2023</Popup></Marker>
      <Marker position={[45.4408, 12.3155]} > <Popup>Venice 2023</Popup></Marker>
      <Marker position={[21.1619, -86.8515]} > <Popup>Cancun 2023</Popup></Marker>
      <Marker position={[32.0809, -81.0912]} > <Popup>Savannah 2022</Popup></Marker>
      <Marker position={[47.3769, 8.5417]} > <Popup>Zurich 2018</Popup></Marker>
    </MapContainer>
  </div>
}

export default MapExample;
