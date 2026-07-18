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

/** 페이지 전환 등으로 컨테이너가 제거된 뒤에도 RAF/observer가 실행되며 Leaflet 예외 방지 */
function mapIsMounted(map) {
  try {
    const c = map.getContainer();
    return Boolean(c && c.isConnected);
  } catch {
    return false;
  }
}

function safeMapExec(map, fn) {
  if (!mapIsMounted(map)) return;
  try {
    fn();
  } catch {
    /* map 제거 진행 중 */
  }
}

function MapInvalidateOnResize() {
  const map = useMap();

  useEffect(() => {
    const el = map.getContainer();
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() =>
      queueMicrotask(() => safeMapExec(map, () => map.invalidateSize()))
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

    let disposed = false;
    const sched = {
      outer: /** @type {number | undefined} */ (undefined),
      inner: /** @type {number | undefined} */ (undefined),
    };

    const cancelSched = () => {
      if (sched.outer != null) cancelAnimationFrame(sched.outer);
      if (sched.inner != null) cancelAnimationFrame(sched.inner);
      sched.outer = undefined;
      sched.inner = undefined;
    };

    const runOuter = () => {
      sched.outer = undefined;
      if (disposed) return;

      safeMapExec(map, () => {
        let bounds;
        try {
          bounds = L.latLngBounds(stores.map((s) => [s.lat, s.lng]));
        } catch {
          return;
        }
        if (!bounds.isValid()) return;

        for (const m of Object.values(markerRefs.current ?? {})) {
          try {
            m?.closePopup?.();
          } catch {
            /* */
          }
        }

        const store = focusedStoreId
          ? stores.find((s) => s.id === focusedStoreId)
          : null;

        if (!store) {
          map.flyToBounds(bounds, {
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

        sched.inner = requestAnimationFrame(() => {
          sched.inner = undefined;
          if (disposed) return;
          safeMapExec(map, () => {
            const marker = markerRefs.current?.[focusedStoreId];
            try {
              marker?.openPopup?.();
            } catch {
              /* */
            }
          });
        });
      });
    };

    sched.outer = requestAnimationFrame(runOuter);

    return () => {
      disposed = true;
      cancelSched();
    };
  }, [focusedStoreId, stores, map, markerRefs]);

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
              <p className="store-map-popup-hours">
                {store.hours}
                {store.holiday ? ` · ${store.holiday}` : ""}
              </p>
              <a href={telHref(store.phone || "1899-0964")}>
                {store.phone || "1899-0964"}
              </a>
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
