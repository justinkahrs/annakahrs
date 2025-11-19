"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

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

    // Shared geometry
    const sphereGeometry = new THREE.SphereGeometry(3, 64, 64);

    // Materials in your palette
    const materials = [
      new THREE.MeshStandardMaterial({
        color: 0x60a5fa,
        emissive: 0x1d4ed8,
        emissiveIntensity: 0.3,
        metalness: 0.1,
        roughness: 0.6,
        transparent: true,
        opacity: 0.65,
      }),
      new THREE.MeshStandardMaterial({
        color: 0xf472b6,
        emissive: 0xbe185d,
        emissiveIntensity: 0.35,
        metalness: 0.15,
        roughness: 0.6,
        transparent: true,
        opacity: 0.6,
      }),
      new THREE.MeshStandardMaterial({
        color: 0xa855f7,
        emissive: 0x6d28d9,
        emissiveIntensity: 0.35,
        metalness: 0.2,
        roughness: 0.55,
        transparent: true,
        opacity: 0.6,
      }),
      new THREE.MeshStandardMaterial({
        color: 0xf472b6,
        emissive: 0xbe185d,
        emissiveIntensity: 0.35,
        metalness: 0.15,
        roughness: 0.6,
        transparent: true,
        opacity: 0.6,
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
    const keyLight = new THREE.DirectionalLight(0xffffff, 0.7);
    keyLight.position.set(4, 6, 8);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.4);
    fillLight.position.set(-4, -3, 6);
    scene.add(fillLight);

    const ambient = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(ambient);

    const clock = new THREE.Clock();
    let frameId: number;

    const animate = () => {
      const t = clock.getElapsedTime();

      orbs.forEach((orb, i) => {
        const offset = i * 1.4;

        orb.position.x = Math.cos(t * 0.35 + offset) * (i === 1 ? 3.5 : 2.8);
        orb.position.y =
          Math.sin(t * 0.28 + offset) * (i === 2 ? 2.2 : 1.6) +
          (i === 2 ? 1 : 0);
        orb.position.z = Math.sin(t * 0.22 + offset) * -2.5;

        orb.rotation.x += 0.002 + i * 0.001;
        orb.rotation.y += 0.003 + i * 0.001;
      });

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

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
        blur-3xl
        fixed inset-0 -z-10
        overflow-hidden
        opacity-[0.9]
        bg-gradient-to-br
        from-[rgba(96,165,250,0.16)]
        to-[rgba(244,114,182,0.16)]
        pointer-events-none
      "
    />
  );
}