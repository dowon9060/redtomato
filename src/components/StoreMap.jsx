import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
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

function MapInvalidateOnResize() {
  const map = useMap();

  useEffect(() => {
    const el = map.getContainer();
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() =>
      queueMicrotask(() => map.invalidateSize())
    );
    ro.observe(el);
    return () => ro.disconnect();
  }, [map]);

  return null;
}

function MapCameraSync({ stores, focusedStoreId, markerRefs }) {
  const map = useMap();

  useLayoutEffect(() => {
    if (!stores.length) return;

    const bounds = () =>
      L.latLngBounds(stores.map((s) => [s.lat, s.lng]));

    const run = () => {
      const store = stores.find((s) => s.id === focusedStoreId);

      Object.values(markerRefs.current).forEach((m) => {
        try {
          m?.closePopup?.();
        } catch (_) {}
      });

      if (!store) {
        map.flyToBounds(bounds(), {
          padding: [52, 52],
          duration: 0.45,
          maxZoom: 13,
        });
        return;
      }

      map.flyTo(L.latLng(store.lat, store.lng), 15, {
        duration: 0.45,
        animate: true,
      });

      const open = () => {
        const marker = markerRefs.current[focusedStoreId];
        if (marker?.openPopup) marker.openPopup();
      };
      queueMicrotask(() =>
        requestAnimationFrame(() =>
          requestAnimationFrame(open)
        )
      );
    };

    requestAnimationFrame(run);
  }, [focusedStoreId, stores, map]);

  return null;
}

function telHref(phone) {
  return `tel:${phone.replace(/[^\d]/g, "")}`;
}

export default function StoreMap({ stores, focusedStoreId = null }) {
  const [mounted, setMounted] = useState(false);
  const markerRefs = useRef({});

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
      <MapInvalidateOnResize />
      {stores.map((store) => (
        <Marker
          key={store.id}
          ref={(instance) => {
            markerRefs.current[store.id] = instance ?? null;
          }}
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
      <MapCameraSync
        stores={stores}
        focusedStoreId={focusedStoreId}
        markerRefs={markerRefs}
      />
    </MapContainer>
  );
}
