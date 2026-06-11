"use client";

import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sparkles, Stars } from "@react-three/drei";
import { Maximize2, Minimize2, RotateCw, Moon, Sun, Layout, HelpCircle } from "lucide-react";

// Procedural Palm Tree component for Waterfront/Island models
function PalmTree({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Trunk */}
      <mesh position={[0, 1.25, 0]}>
        <cylinderGeometry args={[0.08, 0.12, 2.5, 8]} />
        <meshStandardMaterial color="#5C4033" roughness={0.9} />
      </mesh>
      {/* Leaves */}
      <group position={[0, 2.5, 0]}>
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i * Math.PI) / 3;
          return (
            <mesh
              key={i}
              rotation={[0.3, angle, 0]}
              position={[Math.sin(angle) * 0.4, 0.1, Math.cos(angle) * 0.4]}
            >
              <boxGeometry args={[0.8, 0.02, 0.25]} />
              <meshStandardMaterial color="#2d7a4d" roughness={0.6} />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}

// Procedural Water Pool for Waterfront models
function WaterPool({ position, wireframe }: { position: [number, number, number]; wireframe: boolean }) {
  return (
    <group position={position}>
      {/* Water Surface */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <planeGeometry args={[3.2, 1.8]} />
        <meshStandardMaterial
          color="#3ba9e0"
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.75}
          wireframe={wireframe}
        />
      </mesh>
      {/* Pool Boarder/Frame */}
      <mesh position={[0, -0.05, 0]}>
        <boxGeometry args={[3.4, 0.12, 2.0]} />
        <meshStandardMaterial color="#e2e8f0" roughness={0.4} wireframe={wireframe} />
      </mesh>
    </group>
  );
}

// Procedural Solar Panels for Smart Homes
function SolarPanels({ position, rotation, wireframe }: { position: [number, number, number]; rotation: [number, number, number]; wireframe: boolean }) {
  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <boxGeometry args={[1.5, 0.05, 0.8]} />
        <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.1} wireframe={wireframe} />
      </mesh>
      {/* Grid Lines */}
      <mesh position={[0, 0.03, 0]}>
        <boxGeometry args={[1.48, 0.01, 0.78]} />
        <meshStandardMaterial color="#475569" wireframe={true} />
      </mesh>
    </group>
  );
}

// Procedural Building elements based on category
function BuildingModel({
  category,
  wireframe,
  isNight,
}: {
  category: string;
  wireframe: boolean;
  isNight: boolean;
}) {
  const normalizedCategory = category.toLowerCase();

  // Glass Material helper
  const glassMaterial = (
    <meshStandardMaterial
      color="#d1fae5"
      transparent
      opacity={0.35}
      roughness={0.1}
      metalness={0.9}
      wireframe={wireframe}
    />
  );

  // Concrete/Wall Material helper
  const wallMaterial = (color: string = "#ffffff") => (
    <meshStandardMaterial color={color} roughness={0.5} wireframe={wireframe} />
  );

  // Gold luxury trim Material
  const goldMaterial = (
    <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.2} wireframe={wireframe} />
  );

  if (
    normalizedCategory.includes("waterfront") ||
    normalizedCategory.includes("island") ||
    normalizedCategory.includes("mansion")
  ) {
    // Luxury Waterfront Villa / Mansion
    return (
      <group>
        {/* Large Ground Base (Island sand / Garden lawn) */}
        <mesh position={[0, -0.1, 0]}>
          <boxGeometry args={[7, 0.2, 5.5]} />
          <meshStandardMaterial
            color={normalizedCategory.includes("waterfront") || normalizedCategory.includes("island") ? "#eaddca" : "#557a46"}
            roughness={0.8}
            wireframe={wireframe}
          />
        </mesh>

        {/* Swimming Pool & Wood Deck */}
        {normalizedCategory.includes("waterfront") || normalizedCategory.includes("island") ? (
          <>
            <WaterPool position={[-1.6, 0.02, 1.4]} wireframe={wireframe} />
            {/* Wooden Deck */}
            <mesh position={[-1.6, 0.02, 0.2]}>
              <boxGeometry args={[3.2, 0.04, 0.8]} />
              <meshStandardMaterial color="#8B5A2B" roughness={0.7} wireframe={wireframe} />
            </mesh>
            {/* Sunbeds (small blocks) */}
            <mesh position={[-2.4, 0.08, 0.2]} rotation={[0.1, 0, 0]}>
              <boxGeometry args={[0.3, 0.08, 0.5]} />
              <meshStandardMaterial color="#ffffff" roughness={0.8} wireframe={wireframe} />
            </mesh>
            <mesh position={[-1.8, 0.08, 0.2]} rotation={[0.1, 0, 0]}>
              <boxGeometry args={[0.3, 0.08, 0.5]} />
              <meshStandardMaterial color="#ffffff" roughness={0.8} wireframe={wireframe} />
            </mesh>
            {/* Palm Trees */}
            <PalmTree position={[2.8, 0, 2.0]} />
            <PalmTree position={[2.9, 0, -2.0]} />
          </>
        ) : (
          /* Mansion Front Garden Driveway */
          <>
            <mesh position={[-2.0, 0.01, 1.5]}>
              <boxGeometry args={[1.5, 0.02, 2.0]} />
              <meshStandardMaterial color="#334155" roughness={0.9} wireframe={wireframe} />
            </mesh>
            {/* Classic columns */}
            <mesh position={[1.2, 0.8, 1.4]}>
              <cylinderGeometry args={[0.08, 0.08, 1.6, 8]} />
              <meshStandardMaterial color="#ffffff" wireframe={wireframe} />
            </mesh>
            <mesh position={[2.2, 0.8, 1.4]}>
              <cylinderGeometry args={[0.08, 0.08, 1.6, 8]} />
              <meshStandardMaterial color="#ffffff" wireframe={wireframe} />
            </mesh>
          </>
        )}

        {/* Villa Structure - Ground Floor */}
        <mesh position={[1.2, 0.5, -0.4]}>
          <boxGeometry args={[3.2, 1.0, 2.8]} />
          {wallMaterial("#ffffff")}
        </mesh>
        
        {/* Large Front Glass Windows */}
        <mesh position={[1.2, 0.5, 1.01]}>
          <boxGeometry args={[2.8, 0.8, 0.02]} />
          {glassMaterial}
        </mesh>

        {/* Upper Level / Balcony Floor */}
        <mesh position={[0.8, 1.5, -0.4]}>
          <boxGeometry args={[4.0, 1.0, 2.8]} />
          {wallMaterial("#1e293b")}
        </mesh>
        {/* Upper Level Balcony Glass Balustrade */}
        <mesh position={[-0.8, 1.2, 0.8]}>
          <boxGeometry args={[1.2, 0.4, 0.02]} />
          {glassMaterial}
        </mesh>

        {/* Gold Accent Pillars / Architectural Trims */}
        <mesh position={[-1.2, 0.6, 0.8]}>
          <cylinderGeometry args={[0.06, 0.06, 1.2, 6]} />
          {goldMaterial}
        </mesh>
        <mesh position={[2.8, 1.5, 1.01]}>
          <boxGeometry args={[0.05, 1.0, 0.05]} />
          {goldMaterial}
        </mesh>

        {/* Night lights inside the building */}
        {isNight && (
          <group>
            <pointLight position={[1.2, 0.5, 0]} color="#fcd34d" intensity={2.5} distance={4} />
            <pointLight position={[0.8, 1.5, 0]} color="#fcd34d" intensity={2.5} distance={4} />
          </group>
        )}
      </group>
    );
  } else if (normalizedCategory.includes("penthouse") || normalizedCategory.includes("commercial")) {
    // Sky Penthouse / Commercial Duplex Tower Section
    return (
      <group>
        {/* Base Tower Core (Substructure) */}
        <mesh position={[0, -0.6, 0]}>
          <boxGeometry args={[4.5, 1.2, 4.5]} />
          {wallMaterial("#475569")}
        </mesh>
        {/* Balcony deck floor */}
        <mesh position={[0, 0.05, 0]}>
          <boxGeometry args={[4.8, 0.1, 4.8]} />
          {wallMaterial("#e2e8f0")}
        </mesh>

        {/* Penthouse Lower Suite (Glass Box) */}
        <mesh position={[0, 0.7, 0]}>
          <boxGeometry args={[3.6, 1.2, 3.6]} />
          {glassMaterial}
        </mesh>
        {/* Core Pillars inside the glass */}
        {Array.from({ length: 4 }).map((_, i) => {
          const x = i < 2 ? -1.6 : 1.6;
          const z = i % 2 === 0 ? -1.6 : 1.6;
          return (
            <mesh key={i} position={[x, 0.7, z]}>
              <boxGeometry args={[0.15, 1.2, 0.15]} />
              {wallMaterial("#0f172a")}
            </mesh>
          );
        })}

        {/* Mid-Floor Divider with Gold Luxury Rim */}
        <mesh position={[0, 1.35, 0]}>
          <boxGeometry args={[3.8, 0.1, 3.8]} />
          {goldMaterial}
        </mesh>

        {/* Penthouse Upper Suite (Offset Glass Box) */}
        <mesh position={[-0.3, 1.9, -0.3]}>
          <boxGeometry args={[2.8, 1.0, 2.8]} />
          {glassMaterial}
        </mesh>

        {/* Rooftop with Helipad */}
        <mesh position={[-0.3, 2.45, -0.3]}>
          <boxGeometry args={[3.0, 0.1, 3.0]} />
          {wallMaterial("#334155")}
        </mesh>
        {/* Helipad Circle */}
        <mesh position={[-0.3, 2.51, -0.3]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.7, 0.8, 32]} />
          <meshStandardMaterial color="#fcd34d" roughness={0.9} />
        </mesh>
        {/* Helipad 'H' letter representation */}
        <mesh position={[-0.3, 2.51, -0.3]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.1, 0.8]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <mesh position={[-0.3, 2.51, -0.3]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          <planeGeometry args={[0.1, 0.5]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Lounge chair on the sky terrace */}
        <mesh position={[1.5, 0.2, 1.5]} rotation={[0, -0.7, 0]}>
          <boxGeometry args={[0.4, 0.15, 0.8]} />
          {wallMaterial("#ffffff")}
        </mesh>
        <mesh position={[1.8, 0.1, 1.8]}>
          <boxGeometry args={[0.5, 0.05, 0.5]} />
          {goldMaterial}
        </mesh>

        {/* Night illumination glows inside core */}
        {isNight && (
          <group>
            <pointLight position={[0, 0.7, 0]} color="#f59e0b" intensity={3.5} distance={5} />
            <pointLight position={[-0.3, 1.9, -0.3]} color="#fcd34d" intensity={3.0} distance={4} />
          </group>
        )}
      </group>
    );
  } else {
    // Smart Home / Custom Estates
    return (
      <group>
        {/* Green Base lawn */}
        <mesh position={[0, -0.1, 0]}>
          <boxGeometry args={[6.5, 0.2, 5.0]} />
          <meshStandardMaterial color="#557a46" roughness={0.9} wireframe={wireframe} />
        </mesh>

        {/* Main Smart Villa Body */}
        <mesh position={[-0.5, 0.6, 0]}>
          <boxGeometry args={[3.2, 1.2, 3.0]} />
          {wallMaterial("#ffffff")}
        </mesh>
        {/* Smart Glass Facade */}
        <mesh position={[0.3, 0.6, 1.51]}>
          <boxGeometry args={[1.2, 0.9, 0.02]} />
          {glassMaterial}
        </mesh>
        
        {/* Attached Garage / Tech room block */}
        <mesh position={[1.8, 0.4, -0.5]}>
          <boxGeometry args={[1.4, 0.8, 2.0]} />
          {wallMaterial("#334155")}
        </mesh>
        {/* Glowing Smart strip line */}
        <mesh position={[1.8, 0.81, 0.51]}>
          <boxGeometry args={[1.2, 0.04, 0.02]} />
          <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" />
        </mesh>

        {/* Angled Roof with Solar Panels */}
        <mesh position={[-0.5, 1.4, 0]} rotation={[0, 0, 0.15]}>
          <boxGeometry args={[3.4, 0.1, 3.2]} />
          {wallMaterial("#1e293b")}
        </mesh>
        
        <SolarPanels position={[-0.6, 1.5, 0.6]} rotation={[0.15, 0, 0.15]} wireframe={wireframe} />
        <SolarPanels position={[-0.6, 1.5, -0.6]} rotation={[-0.15, 0, 0.15]} wireframe={wireframe} />

        {/* Landscaped garden box */}
        <mesh position={[-2.4, 0.1, 1.5]}>
          <boxGeometry args={[1.0, 0.2, 1.0]} />
          {wallMaterial("#451a03")}
        </mesh>
        <mesh position={[-2.4, 0.25, 1.5]}>
          <sphereGeometry args={[0.3, 8, 8]} />
          <meshStandardMaterial color="#15803d" roughness={0.9} wireframe={wireframe} />
        </mesh>

        {/* Dynamic night lights */}
        {isNight && (
          <group>
            <pointLight position={[-0.5, 0.6, 0]} color="#38bdf8" intensity={2.8} distance={4.5} />
            <pointLight position={[1.8, 0.4, -0.5]} color="#fcd34d" intensity={2.0} distance={3.5} />
          </group>
        )}
      </group>
    );
  }
}

interface Property3DModelProps {
  category: string;
  title: string;
  area: string;
}

export default function Property3DModel({ category, title, area }: Property3DModelProps) {
  const [wireframe, setWireframe] = useState(false);
  const [isNight, setIsNight] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleToggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch((err) => {
        console.error("Fullscreen error:", err);
      });
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false));
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative border border-gold/15 bg-[#0b1320] rounded-[36px] overflow-hidden shadow-2xl flex flex-col transition-all duration-300 ${
        isFullscreen ? "w-screen h-screen z-50 fixed inset-0 rounded-none border-none" : "w-full aspect-[4/3] max-w-[620px]"
      }`}
    >
      {/* 3D Canvas rendering */}
      <div className="flex-grow relative w-full h-full">
        {/* Dynamic Atmosphere Background Gradients */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            isNight
              ? "bg-gradient-to-b from-[#020617] via-[#0b1329] to-[#1e1b4b] opacity-100"
              : "bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] opacity-100"
          }`}
        />

        <Canvas camera={{ position: [5, 4, 6], fov: 45 }} shadows className="relative z-10 w-full h-full">
          {/* Night mode skies */}
          {isNight ? (
            <>
              <color attach="background" args={["#0b1329"]} />
              <fog attach="fog" args={["#0b1329", 8, 25]} />
              <ambientLight intensity={0.15} color="#1e1b4b" />
              <directionalLight
                position={[-5, 5, -5]}
                intensity={0.25}
                color="#c084fc"
              />
              <Stars radius={100} depth={50} count={300} factor={4} saturation={0.5} fade speed={1} />
              <Sparkles count={45} scale={6} size={2.5} speed={0.4} color="#fcd34d" />
            </>
          ) : (
            <>
              <color attach="background" args={["#f1f5f9"]} />
              <fog attach="fog" args={["#f1f5f9", 10, 25]} />
              <ambientLight intensity={0.7} color="#ffffff" />
              <directionalLight
                position={[5, 8, 5]}
                intensity={1.2}
                color="#ffffff"
                castShadow
              />
            </>
          )}

          {/* Render procedural model based on Category */}
          <group position={[0, -0.4, 0]}>
            <BuildingModel category={category} wireframe={wireframe} isNight={isNight} />
          </group>

          {/* Interactive Camera controls */}
          <OrbitControls
            enableDamping
            dampingFactor={0.05}
            minDistance={3.5}
            maxDistance={12}
            autoRotate={autoRotate}
            autoRotateSpeed={1.2}
            maxPolarAngle={Math.PI / 2.1} // Prevent orbiting below ground floor
          />
        </Canvas>

        {/* Overlay Badges */}
        <div className="absolute top-5 left-5 z-20 flex flex-col space-y-1.5 pointer-events-none select-none">
          <span className="bg-primary/95 text-gold text-[8px] font-bold tracking-[0.2em] px-3 py-1 rounded-full border border-gold/30 uppercase shadow-lg">
            Interactive 3D Simulation
          </span>
          <h4 className="font-playfair text-white text-sm font-semibold tracking-wide filter drop-shadow">
            {title}
          </h4>
          <span className="text-[10px] text-slate-350 filter drop-shadow">
            Category: {category} &bull; {area}
          </span>
        </div>

        {/* Controls Panel Overlay */}
        <div className="absolute bottom-5 left-5 right-5 z-20 flex justify-between items-center pointer-events-none">
          {/* Left Controls: Day/Night & Wireframe */}
          <div className="flex space-x-2 pointer-events-auto">
            <button
              onClick={() => setIsNight(!isNight)}
              className={`p-2.5 rounded-full border border-white/10 text-white transition-all cursor-pointer shadow-lg hover:scale-105 flex items-center justify-center ${
                isNight ? "bg-gold" : "bg-primary/90 hover:bg-gold"
              }`}
              title={isNight ? "Switch to Day Mode" : "Switch to Night Mode"}
            >
              {isNight ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setWireframe(!wireframe)}
              className={`p-2.5 rounded-full border border-white/10 text-white transition-all cursor-pointer shadow-lg hover:scale-105 flex items-center justify-center ${
                wireframe ? "bg-gold" : "bg-primary/90 hover:bg-gold"
              }`}
              title="Toggle Architectural Wireframe/Blueprint"
            >
              <Layout className="w-4 h-4" />
            </button>
          </div>

          {/* Right Controls: Auto-spin & Fullscreen */}
          <div className="flex space-x-2 pointer-events-auto">
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className={`p-2.5 rounded-full border border-white/10 text-white transition-all cursor-pointer shadow-lg hover:scale-105 flex items-center justify-center ${
                autoRotate ? "bg-gold" : "bg-primary/90 hover:bg-gold"
              }`}
              title="Toggle Auto Rotate"
            >
              <RotateCw className={`w-4 h-4 ${autoRotate ? "animate-spin [animation-duration:12s]" : ""}`} />
            </button>

            <button
              onClick={handleToggleFullscreen}
              className="p-2.5 rounded-full border border-white/10 bg-primary/90 hover:bg-gold text-white transition-all cursor-pointer shadow-lg hover:scale-105 flex items-center justify-center"
              title="Toggle Fullscreen simulation"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Small Tooltip Guide */}
        <div className="absolute top-5 right-5 z-20 pointer-events-auto group">
          <button className="p-1.5 rounded-full bg-primary/90 border border-white/10 text-slate-350 hover:text-white cursor-pointer shadow-lg">
            <HelpCircle className="w-3.5 h-3.5" />
          </button>
          <div className="absolute right-0 top-8 bg-primary/95 border border-gold/25 p-3 rounded-xl text-[10px] text-slate-300 w-44 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none leading-relaxed shadow-xl">
            <p className="font-bold text-gold mb-1">Navigation Guide</p>
            <p>• <strong>Left-Click & Drag:</strong> Rotate Model</p>
            <p>• <strong>Right-Click & Drag:</strong> Pan camera</p>
            <p>• <strong>Scroll Wheel:</strong> Zoom In/Out</p>
          </div>
        </div>
      </div>
    </div>
  );
}
