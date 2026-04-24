'use client';

import { MapContainer, TileLayer, CircleMarker, Tooltip, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import L from 'leaflet';

// Fix Leaflet's default icon path issues with Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Zamfara Center coordinates
const zamfaraCenter: [number, number] = [12.1628, 6.6698];

// Mock Data for LGAs (Green, Yellow, Red) based on Safe Schools Initiative
const lgaData = [
  { id: 1, name: "Gusau", coords: [12.1628, 6.6698], status: "green", count: 45 },
  { id: 2, name: "Tsafe", coords: [11.9500, 6.9167], status: "yellow", count: 22 },
  { id: 3, name: "Maru", coords: [11.8333, 6.2667], status: "red", count: 8 },
  { id: 4, name: "Bungudu", coords: [12.2667, 6.5500], status: "green", count: 35 },
  { id: 5, name: "Kauran Namoda", coords: [12.5833, 6.5833], status: "yellow", count: 18 },
  { id: 6, name: "Zurmi", coords: [12.7667, 6.7833], status: "red", count: 5 },
  { id: 7, name: "Talata Mafara", coords: [12.3333, 6.0500], status: "green", count: 30 },
  { id: 8, name: "Anka", coords: [11.9833, 5.9333], status: "red", count: 2 },
  { id: 9, name: "Bakura", coords: [12.6333, 5.8667], status: "yellow", count: 15 },
  { id: 10, name: "Bukkuyum", coords: [12.1333, 5.4667], status: "red", count: 4 },
  { id: 11, name: "Gummi", coords: [12.1333, 5.1167], status: "green", count: 25 },
  { id: 12, name: "Shinkafi", coords: [13.0667, 6.5833], status: "red", count: 6 },
  { id: 13, name: "Maradun", coords: [12.5667, 6.0667], status: "yellow", count: 12 },
  { id: 14, name: "Birnin Magaji/Kiyaw", coords: [12.5167, 6.9167], status: "yellow", count: 14 },
];

const getColor = (status: string) => {
  switch (status) {
    case 'green': return '#10B981'; // Tailwind emerald-500
    case 'yellow': return '#F59E0B'; // Tailwind amber-500
    case 'red': return '#EF4444'; // Tailwind red-500
    default: return '#9CA3AF';
  }
};

export default function MapContent() {
  const [geoData, setGeoData] = useState<any>(null);

  useEffect(() => {
    // Attempt to fetch public Nigerian shapefiles to get LGA borders.
    // In a full production app, you should download the zamfara_lgas.geojson and serve it from /public.
    fetch('https://raw.githubusercontent.com/Zubair-ab/Nigeria-Local-Government-Areas/master/Nigeria_LGA.geojson')
      .then((res) => res.json())
      .then((data) => {
        // Filter specifically for Zamfara state LGAs
        const zamfaraData = {
          ...data,
          features: data.features.filter((f: any) => f.properties.state === "Zamfara" || f.properties.admin1Name === "Zamfara")
        };
        setGeoData(zamfaraData);
      })
      .catch((err) => console.log('Error fetching GeoJSON:', err));
  }, []);

  return (
    <MapContainer 
      center={zamfaraCenter} 
      zoom={8} 
      scrollWheelZoom={false} 
      className="w-full h-full z-0 relative bg-[#090a0f]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />
      {geoData && geoData.features && geoData.features.length > 0 && (
        <GeoJSON 
          data={geoData} 
          style={() => ({
            color: '#008751',
            weight: 2,
            fillColor: 'transparent',
            dashArray: '5, 5'
          })} 
        />
      )}
      {lgaData.map((lga) => (
        <CircleMarker
          key={lga.id}
          center={lga.coords as [number, number]}
          radius={Math.max(10, Math.min(30, lga.count * 0.8))}
          pathOptions={{ 
            fillColor: getColor(lga.status),
            color: '#ffffff',
            weight: 2,
            fillOpacity: 0.8
          }}
        >
          <Tooltip direction="top" offset={[0, -10]} opacity={1}>
            <div className="font-sans text-sm">
              <span className="font-bold">{lga.name}</span>
              <br/>
              Safe Schools: <span className="font-bold" style={{color: getColor(lga.status)}}>{lga.count}</span>
            </div>
          </Tooltip>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}