import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { Effects } from '@react-three/drei';
import { UnrealBloomPass } from 'three-stdlib';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Sparkles, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

extend({ UnrealBloomPass });

// --- 3D PARTICLE SWARM with original brand colors ---
const ParticleSwarm = () => {
  const meshRef = useRef();
  const count = 2500;
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const target = useMemo(() => new THREE.Vector3(), []);
  const pColor = useMemo(() => new THREE.Color(), []);
  
  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      pos.push(new THREE.Vector3(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 35,
        (Math.random() - 0.5) * 50
      ));
    }
    return pos;
  }, []);

  const material = useMemo(() => new THREE.MeshStandardMaterial({ 
    color: 0xffffff,
    emissive: 0x00d2ff,
    emissiveIntensity: 0.3,
    roughness: 0.4,
    metalness: 0.6
  }), []);
  
  const geometry = useMemo(() => new THREE.TetrahedronGeometry(0.1), []);

  const PARAMS = useMemo(() => ({ pull: 0.12, chaos: 0.02, speed: 0.06 }), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      const { pull, chaos, speed } = PARAMS;
      const angle = i * 0.12 + time * speed;
      const baseRadius = 50;

      let x0 = Math.cos(angle) * baseRadius;
      let z0 = Math.sin(angle) * baseRadius;
      let y0 = (Math.random() - 0.5) * 15;

      const tiltX = Math.PI / 18;
      const tiltZ = Math.PI / 50;

      let x1 = x0 * Math.cos(tiltZ) - y0 * Math.sin(tiltZ);
      let y1 = x0 * Math.sin(tiltZ) + y0 * Math.cos(tiltZ);
      let yFinal = y1 * Math.cos(tiltX) - z0 * Math.sin(tiltX);
      let zFinal = y1 * Math.sin(tiltX) + z0 * Math.cos(tiltX);
      let xFinal = x1;

      xFinal += Math.sin(i * 6.98 + time * chaos) * 2.5;
      yFinal += Math.cos(i * 48.23 + time * chaos) * 2.5;
      zFinal += Math.sin(i * 28.16 + time * chaos) * 1.5;

      target.set(xFinal * (1 - pull), yFinal * (1 - pull), zFinal * (1 - pull));

      // Original brand colors: Electric Blue (#00d2ff) to Deep Purple (#7928ca)
      // Blue hue range (0.55-0.6 is blue, 0.65-0.75 is purple)
      const hue = 0.58 + (Math.sin(angle * 0.5) * 0.12);
      const saturation = 0.9;
      const lightness = 0.7;
      pColor.setHSL(hue, saturation, lightness);

      positions[i].lerp(target, 0.06);
      dummy.position.copy(positions[i]);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
      meshRef.current.setColorAt(i, pColor);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  });

  return <instancedMesh ref={meshRef} args={[geometry, material, count]} />;
};

// --- 3D Particle Background Component ---
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" style={{ width: '100%', height: '100%' }}>
      <Canvas 
        camera={{ position: [0, 0, 65], fov: 55 }} 
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.6} color="#00d2ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#7928ca" />
        
        <ParticleSwarm />
        
        <Effects disableGamma>
          <unrealBloomPass threshold={0.1} strength={0.6} radius={0.4} />
        </Effects>
      </Canvas>
    </div>
  );
};

// Framer Motion Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-brand-bg via-brand-surface to-brand-bg">
      
      {/* 3D Particle Background */}
      <ParticleBackground />
      
      {/* Decorative Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 max-w-5xl space-y-8"
      >
        {/* Upper Accent Badge */}
        <motion.div variants={itemVariants} className="inline-flex justify-center">
          <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase text-brand-accent backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '3s' }} />
            Next-Gen Web Architecture
          </div>
        </motion.div>

        {/* Master Copy Typography Stack */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.1]">
            We Engineer High-End <br />
            <span className="bg-gradient-to-r from-brand-accent to-white bg-clip-text text-transparent">
              Digital Flagships
            </span>
          </h1>
          
          <p className="text-text-secondary text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
            Denkar builds elite custom software systems, scalable e-commerce platforms, and immersive user experiences designed to scale.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}