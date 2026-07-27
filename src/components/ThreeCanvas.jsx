import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas({ page = 'home' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene & Renderer Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
      precision: 'highp',
      stencil: false,
      depth: true
    });

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 2. Texture Loader for Official Blueidealteck Logo using Relative Path
    const textureLoader = new THREE.TextureLoader();
    let logoMesh, logoRing, logoNodesGroup;

    textureLoader.load('./logo.png', (texture) => {
      texture.generateMipmaps = true;
      texture.minFilter = THREE.LinearMipmapLinearFilter;

      // 3D Emblem Mesh
      const planeGeo = new THREE.PlaneGeometry(6.5, 6.5);
      const planeMat = new THREE.MeshPhongMaterial({
        map: texture,
        transparent: true,
        opacity: 0.92,
        side: THREE.DoubleSide,
        emissive: 0x0284c7,
        emissiveIntensity: 0.25,
        shininess: 90
      });
      logoMesh = new THREE.Mesh(planeGeo, planeMat);
      logoMesh.position.z = 0.5;
      mainGroup.add(logoMesh);

      // Backing Glow Plate
      const backGeo = new THREE.CircleGeometry(3.6, 32);
      const backMat = new THREE.MeshBasicMaterial({
        color: 0x00a3ff,
        transparent: true,
        opacity: 0.2,
        side: THREE.DoubleSide
      });
      const backPlate = new THREE.Mesh(backGeo, backMat);
      backPlate.position.z = -0.1;
      mainGroup.add(backPlate);
    });

    // 3. 3D Circuit Nodes & Ring Architecture
    logoNodesGroup = new THREE.Group();

    const torusGeo1 = new THREE.TorusGeometry(6.2, 0.05, 16, 120);
    const torusMat1 = new THREE.MeshBasicMaterial({
      color: 0x00a3ff,
      transparent: true,
      opacity: 0.6
    });
    logoRing = new THREE.Mesh(torusGeo1, torusMat1);
    logoRing.rotation.x = Math.PI / 3;
    logoNodesGroup.add(logoRing);

    const torusGeo2 = new THREE.TorusGeometry(7.5, 0.03, 16, 100);
    const torusMat2 = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.45
    });
    const ring2 = new THREE.Mesh(torusGeo2, torusMat2);
    ring2.rotation.y = Math.PI / 4;
    logoNodesGroup.add(ring2);

    const nodeGeo = new THREE.SphereGeometry(0.18, 16, 16);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x00a3ff });

    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.position.set(Math.cos(angle) * 6.2, Math.sin(angle) * 6.2, (i % 2 === 0 ? 0.8 : -0.8));
      logoNodesGroup.add(node);
    }
    mainGroup.add(logoNodesGroup);

    // 4. 3D Particles Stream
    const pCount = page === 'techstack' ? 1200 : (page === 'blog' ? 1000 : 900);
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    const pColors = new Float32Array(pCount * 3);

    const cSky = new THREE.Color(0x00a3ff);
    const cAzure = new THREE.Color(0x0284c7);
    const cWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < pCount * 3; i += 3) {
      const radius = 8 + Math.random() * 18;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      pPos[i] = radius * Math.sin(phi) * Math.cos(theta);
      pPos[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pPos[i + 2] = radius * Math.cos(phi);

      const c = Math.random() > 0.6 ? cWhite : (Math.random() > 0.5 ? cSky : cAzure);
      pColors[i] = c.r;
      pColors[i + 1] = c.g;
      pColors[i + 2] = c.b;
    }

    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    pGeo.setAttribute('color', new THREE.BufferAttribute(pColors, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.NormalBlending
    });
    const particleSystem = new THREE.Points(pGeo, pMat);
    mainGroup.add(particleSystem);

    // 5. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00a3ff, 2.5, 60);
    pointLight1.position.set(12, 12, 12);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x38bdf8, 2, 60);
    pointLight2.position.set(-12, -12, -12);
    scene.add(pointLight2);

    // 6. Smooth Mouse Parallax Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleClick = () => {
      if (mainGroup) {
        mainGroup.scale.set(1.15, 1.15, 1.15);
        setTimeout(() => {
          mainGroup.scale.set(1, 1, 1);
        }, 250);
      }
    };
    window.addEventListener('click', handleClick, { passive: true });

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || window.innerWidth;
      const newH = container.clientHeight || window.innerHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // 7. 120 FPS High-Precision Render Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      const lerpSpeed = Math.min(delta * 4, 0.1);
      targetX += (mouseX - targetX) * lerpSpeed;
      targetY += (mouseY - targetY) * lerpSpeed;

      mainGroup.rotation.y = elapsedTime * 0.1 + targetX * 0.45;
      mainGroup.rotation.x = Math.sin(elapsedTime * 0.1) * 0.12 + targetY * 0.45;

      if (logoMesh) {
        logoMesh.rotation.z = Math.sin(elapsedTime * 0.5) * 0.05;
        const pulse = 1 + Math.sin(elapsedTime * 2) * 0.03;
        logoMesh.scale.set(pulse, pulse, pulse);
      }

      if (logoRing) logoRing.rotation.z += delta * 0.25;
      if (ring2) ring2.rotation.z -= delta * 0.3;
      if (particleSystem) particleSystem.rotation.y -= delta * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [page]);

  return (
    <div 
      ref={mountRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        willChange: 'transform',
        transform: 'translateZ(0)'
      }}
    />
  );
}
