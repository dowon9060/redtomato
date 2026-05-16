import { useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const markerIcon = L.divIcon({
  className: "store-marker-pin",
  html: '<span class="store-marker-dot" aria-hidden="true"></span>',
  iconSize: [28, 28],
  iconAnchor: [14, 28],
  popupAnchor: [0, -24],
});

function FitBounds({ stores }) {
  const map = useMap();

  useEffect(() => {
    if (!stores.length) return;
    const bounds = L.latLngBounds(stores.map((s) => [s.lat, s.lng]));
    map.fitBounds(bounds, { padding: [48, 48], maxZoom: 13 });
  }, [map, stores]);

  return null;
}

function telHref(phone) {
  return `tel:${phone.replace(/[^\d]/g, "")}`;
}

export default function StoreMap({ stores }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const center = useMemo(() => {
    const { lat, lng } = stores.reduce(
      (acc, s) => ({ lat: acc.lat + s.lat, lng: acc.lng + s.lng }),
      { lat: 0, lng: 0 }
    );
    const n = stores.length || 1;
    return [lat / n, lng / n];
  }, [stores]);

  if (!mounted) {
    return <div className="store-map-shell" aria-hidden />;
  }

  return (
    <MapContainer
      center={center}
      zoom={11}
      className="store-map"
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {stores.map((store) => (
        <Marker
          key={store.id}
          position={[store.lat, store.lng]}
          icon={markerIcon}
        >
          <Popup>
            <div className="store-map-popup">
              <strong>{store.name}</strong>
              <p>{store.address}</p>
              <p className="store-map-popup-hours">{store.hours}</p>
              <a href={telHref(store.phone)}>{store.phone}</a>
            </div>
          </Popup>
        </Marker>
      ))}
      <FitBounds stores={stores} />
    </MapContainer>
  );
}
