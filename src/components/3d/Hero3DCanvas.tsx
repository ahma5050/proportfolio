import { useEffect, useRef, useState, Suspense, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '@/contexts/ThemeContext';
import { Zap, EyeOff } from 'lucide-react';

interface ConstellationProps {
  isGold: boolean;
}

const Constellation = ({ isGold }: ConstellationProps) => {
  const pointsRef = useRef<THREE.Points>(null);
  const meshGroupRef = useRef<THREE.Group>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // 400 lightweight particles in 3D space - extremely low draw calls, 0% CPU impact
  const count = 400;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
    }
    return pos;
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (meshGroupRef.current) {
      // Gentle floating rotation and mouse tilt
      meshGroupRef.current.rotation.y += delta * 0.08;
      meshGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        meshGroupRef.current.rotation.x,
        mouseRef.current.y * 0.15 + Math.sin(time * 0.3) * 0.05,
        0.04
      );
      meshGroupRef.current.rotation.z = THREE.MathUtils.lerp(
        meshGroupRef.current.rotation.z,
        mouseRef.current.x * 0.15,
        0.04
      );
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
      pointsRef.current.rotation.x = Math.sin(time * 0.2) * 0.03;
    }
  });

  const primaryColor = isGold ? '#10b981' : '#06b6d4';
  const secondaryColor = isGold ? '#059669' : '#3b82f6';

  return (
    <group>
      {/* Dynamic Star/Node Cloud */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color={primaryColor}
          transparent
          opacity={0.7}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Hero 3D Geometric Sculptures floating in space */}
      <group ref={meshGroupRef}>
        {/* Main Central Geometric Wireframe Polyhedron */}
        <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.6}>
          <mesh position={[3.5, 0.5, -2]}>
            <icosahedronGeometry args={[2.2, 1]} />
            <meshStandardMaterial
              color={primaryColor}
              wireframe
              transparent
              opacity={0.45}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>

          {/* Inner Glowing Crystal Core */}
          <Sphere position={[3.5, 0.5, -2]} args={[0.9, 24, 24]}>
            <MeshDistortMaterial
              color={secondaryColor}
              distort={0.35}
              speed={1.5}
              roughness={0.4}
              metalness={0.6}
              transparent
              opacity={0.6}
            />
          </Sphere>
        </Float>

        {/* Orbiting Gyroscope Rings */}
        <mesh position={[3.5, 0.5, -2]} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[3.2, 0.015, 16, 64]} />
          <meshBasicMaterial color={primaryColor} transparent opacity={0.4} />
        </mesh>
        <mesh position={[3.5, 0.5, -2]} rotation={[-Math.PI / 4, 0, 0]}>
          <torusGeometry args={[3.6, 0.012, 16, 64]} />
          <meshBasicMaterial color={secondaryColor} transparent opacity={0.3} />
        </mesh>

        {/* Left Side Floating Subtle Octahedron */}
        <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.8}>
          <mesh position={[-5.5, -1.5, -3]}>
            <octahedronGeometry args={[1.5, 0]} />
            <meshStandardMaterial
              color={primaryColor}
              wireframe
              transparent
              opacity={0.3}
            />
          </mesh>
        </Float>

        {/* Top Left Subtle Dodecahedron */}
        <Float speed={1.0} rotationIntensity={0.4} floatIntensity={0.5}>
          <mesh position={[-4, 3, -4]}>
            <dodecahedronGeometry args={[1.2, 0]} />
            <meshStandardMaterial
              color={secondaryColor}
              wireframe
              transparent
              opacity={0.25}
            />
          </mesh>
        </Float>
      </group>
    </group>
  );
};

export const Hero3DCanvas = () => {
  const { isGold } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(true);
  const [ecoMode, setEcoMode] = useState(false);

  useEffect(() => {
    // Only render when hero is in view - 0% CPU consumption when scrolled down!
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* 3D Canvas rendering across the entire hero background */}
      {!ecoMode && isInView && (
        <Canvas
          camera={{ position: [0, 0, 7.5], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{
            powerPreference: 'high-performance',
            antialias: true,
            alpha: true,
          }}
          className="w-full h-full"
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 10]} intensity={1.2} />
          <pointLight
            position={[-10, -10, -5]}
            intensity={0.6}
            color={isGold ? '#10b981' : '#06b6d4'}
          />
          <Suspense fallback={null}>
            <Constellation isGold={isGold} />
          </Suspense>
        </Canvas>
      )}

      {/* Blurred overlay layers to ensure maximum text readability and luxury depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/65 to-background/40 backdrop-blur-[1.5px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />

      {/* Radial soft glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[400px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[300px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
};

export default Hero3DCanvas;
