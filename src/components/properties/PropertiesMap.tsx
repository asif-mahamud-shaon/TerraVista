"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import Link from "next/link";
import { Property } from "@/data/properties";

interface PropertiesMapProps {
  properties: Property[];
  center?: [number, number];
  zoom?: number;
}

// Custom gold pulsing Leaflet marker icon
const goldMarkerIcon = typeof window !== "undefined"
  ? L.divIcon({
      className: "custom-gold-marker",
      html: `
        <div class="relative w-8 h-8 flex items-center justify-center">
          <span class="absolute inline-flex h-full w-full rounded-full bg-gold/40 animate-ping opacity-75"></span>
          <div class="relative w-4.5 h-4.5 rounded-full bg-gold border-2 border-primary shadow-xl"></div>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -16],
    })
  : null;

// Helper component to center/zoom map when property list changes
function MapRecenter({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

export default function PropertiesMap({
  properties,
  center = [25.0, 10.0],
  zoom = 2,
}: PropertiesMapProps) {
  // Determine map center based on first property if available, to avoid generic coordinates
  const activeCenter: [number, number] =
    properties.length > 0
      ? [properties[0].coordinates.lat, properties[0].coordinates.lng]
      : center;

  const activeZoom = properties.length === 1 ? 12 : properties.length > 0 ? 3 : zoom;

  return (
    <div className="w-full h-full dark-leaflet rounded-lg overflow-hidden border border-gold/15 relative z-0">
      <MapContainer
        center={activeCenter}
        zoom={activeZoom}
        style={{ width: "100%", height: "100%" }}
        zoomControl={true}
      >
        <TileLayer
          url="https://mt1.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}"
          attribution='&copy; Google Maps'
        />
        {properties.map((prop) => {
          if (!goldMarkerIcon) return null;
          return (
            <Marker
              key={prop.id}
              position={[prop.coordinates.lat, prop.coordinates.lng]}
              icon={goldMarkerIcon}
            >
              <Popup>
                <div className="w-48 text-primary p-1 space-y-2">
                  <div className="h-24 w-full rounded-sm overflow-hidden relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={prop.images[0]}
                      alt={prop.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-sm text-gold leading-tight">
                      {prop.title}
                    </h4>
                    <p className="text-[10px] text-slate-500 font-light mt-0.5">
                      {prop.location}
                    </p>
                    <p className="font-semibold text-xs text-primary mt-1.5">
                      {prop.priceFormatted}
                    </p>
                    <div className="mt-2 flex justify-between items-center pt-1 border-t border-primary/10">
                      <span className="text-[9px] text-gold font-medium">ROI: {prop.roi}</span>
                      <Link
                        href={`/properties/${prop.id}`}
                        className="text-[9px] underline uppercase tracking-wider text-primary hover:text-gold font-bold"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
        <MapRecenter center={activeCenter} zoom={activeZoom} />
      </MapContainer>
    </div>
  );
}
