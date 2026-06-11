"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { DESTINATIONS, Destination } from "@/data/properties";

interface WorldGlobeProps {
  onSelectDestination?: (dest: Destination) => void;
  interactive?: boolean;
}

export default function WorldGlobe({ onSelectDestination, interactive = true }: WorldGlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredDest, setHoveredDest] = useState<Destination | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight || 500;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 18;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = interactive;
    controls.enableRotate = interactive;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    // Atmosphere Globe (Translucent dark base)
    const globeRadius = 5;
    const globeGeometry = new THREE.SphereGeometry(globeRadius, 64, 64);
    const globeMaterial = new THREE.MeshBasicMaterial({
      color: 0x0f172a,
      transparent: true,
      opacity: 0.85,
    });
    const globeMesh = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globeMesh);

    // Add luxury gold grid outline (wireframe sphere slightly larger)
    const gridGeometry = new THREE.SphereGeometry(globeRadius + 0.02, 32, 32);
    const gridMaterial = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const gridMesh = new THREE.Mesh(gridGeometry, gridMaterial);
    scene.add(gridMesh);

    // Space particles (Starfield)
    const particlesCount = 200;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Random coordinates around the globe
      const radius = 10 + Math.random() * 10;
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);

      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xd4af37,
      size: 0.04,
      transparent: true,
      opacity: 0.5,
    });
    const starField = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(starField);

    // Spherical coordinate converter
    const convertLatLngToVector3 = (lat: number, lng: number, radius: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);

      const x = -(radius * Math.sin(phi) * Math.sin(theta));
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.cos(theta);

      return new THREE.Vector3(x, y, z);
    };

    // Add Hotspots (destinations)
    const hotspotsGroup = new THREE.Group();
    const hotspotMeshes: { mesh: THREE.Mesh; dest: Destination }[] = [];

    DESTINATIONS.forEach((dest) => {
      const position = convertLatLngToVector3(dest.coordinates.lat, dest.coordinates.lng, globeRadius);

      // Core anchor dot (Gold)
      const dotGeo = new THREE.SphereGeometry(0.12, 16, 16);
      const dotMat = new THREE.MeshBasicMaterial({ color: 0xd4af37 });
      const dotMesh = new THREE.Mesh(dotGeo, dotMat);
      dotMesh.position.copy(position);

      // Glow Ring
      const ringGeo = new THREE.RingGeometry(0.18, 0.24, 16);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xd4af37,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.copy(position);
      ringMesh.lookAt(new THREE.Vector3(0, 0, 0)); // Look inwards to orient flat against globe surface

      const hotspotContainer = new THREE.Mesh();
      hotspotContainer.add(dotMesh);
      hotspotContainer.add(ringMesh);

      // Add to array for raycasting and animating
      hotspotsGroup.add(hotspotContainer);
      hotspotMeshes.push({ mesh: dotMesh, dest });
    });

    scene.add(hotspotsGroup);

    // Raycaster for interactions
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onPointerMove = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(
        hotspotMeshes.map((h) => h.mesh)
      );

      if (intersects.length > 0) {
        const hitMesh = intersects[0].object as THREE.Mesh;
        const matching = hotspotMeshes.find((h) => h.mesh === hitMesh);
        if (matching) {
          setHoveredDest(matching.dest);
          document.body.style.cursor = "pointer";
          return;
        }
      }

      setHoveredDest(null);
      document.body.style.cursor = "default";
    };

    const onClick = (event: MouseEvent) => {
      if (!onSelectDestination) return;

      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(
        hotspotMeshes.map((h) => h.mesh)
      );

      if (intersects.length > 0) {
        const hitMesh = intersects[0].object as THREE.Mesh;
        const matching = hotspotMeshes.find((h) => h.mesh === hitMesh);
        if (matching) {
          onSelectDestination(matching.dest);
          // Gently focus camera towards hotspot position
          const targetPos = matching.mesh.position.clone().normalize().multiplyScalar(15);
          controls.autoRotate = false;
          
          // Animate camera focus
          let steps = 0;
          const animateCamera = () => {
            if (steps < 30) {
              camera.position.lerp(targetPos, 0.1);
              camera.lookAt(0, 0, 0);
              steps++;
              requestAnimationFrame(animateCamera);
            }
          };
          animateCamera();
        }
      }
    };

    if (interactive) {
      window.addEventListener("mousemove", onPointerMove);
      window.addEventListener("click", onClick);
    }

    // Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Slow rotate starfield
      starField.rotation.y = elapsedTime * 0.02;

      // Animate hotspot glow rings (scaling up and down)
      hotspotsGroup.children.forEach((hContainer) => {
        const ring = hContainer.children[1];
        if (ring) {
          const scale = 1 + Math.sin(elapsedTime * 4) * 0.25;
          ring.scale.set(scale, scale, 1);
        }
      });

      controls.update();
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight || 500;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (interactive) {
        window.removeEventListener("mousemove", onPointerMove);
        window.removeEventListener("click", onClick);
      }
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
      document.body.style.cursor = "default";
    };
  }, [interactive, onSelectDestination]);

  return (
    <div className="relative w-full h-full min-h-[400px]">
      <div ref={containerRef} className="w-full h-full absolute inset-0" />
      {hoveredDest && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 glass-panel py-2 px-4 rounded-full text-xs font-semibold tracking-wider text-gold shadow-lg flex items-center space-x-2 pointer-events-none select-none">
          <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
          <span>{hoveredDest.name.toUpperCase()} PROPERTY HUB</span>
        </div>
      )}
    </div>
  );
}
