"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const getDimensions = () => ({
      width: container.offsetWidth,
      height: container.offsetHeight,
    });

    const { width, height } = getDimensions();

    // Scene + camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 10;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Shared geometry - Massive size
    const sphereGeometry = new THREE.SphereGeometry(12, 64, 64);

    // Materials in your palette - Maxed out for absolute visibility
    const materials = [
      new THREE.MeshStandardMaterial({
        color: 0x2563eb, // Solid Blue
        emissive: 0x2563eb,
        emissiveIntensity: 1.5,
        metalness: 0.1,
        roughness: 0.3,
        transparent: true,
        opacity: 0.95,
      }),
      new THREE.MeshStandardMaterial({
        color: 0xdb2777, // Solid Pink
        emissive: 0xdb2777,
        emissiveIntensity: 1.5,
        metalness: 0.1,
        roughness: 0.3,
        transparent: true,
        opacity: 0.95,
      }),
      new THREE.MeshStandardMaterial({
        color: 0x7c3aed, // Solid Purple
        emissive: 0x7c3aed,
        emissiveIntensity: 1.5,
        metalness: 0.1,
        roughness: 0.3,
        transparent: true,
        opacity: 0.95,
      }),
      new THREE.MeshStandardMaterial({
        color: 0xdb2777,
        emissive: 0xdb2777,
        emissiveIntensity: 1.5,
        metalness: 0.1,
        roughness: 0.3,
        transparent: true,
        opacity: 0.95,
      }),
    ];

    // Orbs
    const orbs: THREE.Mesh[] = materials.map((mat, index) => {
      const mesh = new THREE.Mesh(sphereGeometry, mat);
      mesh.position.set(
        index === 0 ? -3 : index === 1 ? 3 : 0,
        index === 2 ? 2 : -1,
        index === 1 ? -2 : 0,
      );
      scene.add(mesh);
      return mesh;
    });

    // Lights
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(4, 6, 8);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.8);
    fillLight.position.set(-4, -3, 6);
    scene.add(fillLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.5, 50);
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);

    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);

    const clock = new THREE.Clock();
    let frameId: number;

    const animate = () => {
      const t = clock.getElapsedTime() * 2; // High speed

      orbs.forEach((orb, i) => {
        const offset = i * 1.4;

        orb.position.x = Math.cos(t * 0.45 + offset) * (i === 1 ? 8 : 6);
        orb.position.y =
          Math.sin(t * 0.35 + offset) * (i === 2 ? 5 : 4) +
          (i === 2 ? 1 : 0);
        orb.position.z = Math.sin(t * 0.3 + offset) * -5;

        orb.rotation.x += 0.005 + i * 0.002;
        orb.rotation.y += 0.006 + i * 0.002;
      });

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      const { width: newWidth, height: newHeight } = getDimensions();

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);

      orbs.forEach((orb) => {
        scene.remove(orb);
        (orb.material as THREE.Material).dispose();
      });

      sphereGeometry.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="
        absolute inset-0 z-0
        overflow-hidden
        opacity-100
        pointer-events-none
        rounded-3xl
      "
    />
  );
}