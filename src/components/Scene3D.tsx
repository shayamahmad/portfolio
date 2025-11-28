import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Box, Torus, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape({ position, shape = "sphere" }: { position: [number, number, number]; shape?: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
    }
  });

  const color = shape === "sphere" ? "#00f0ff" : shape === "box" ? "#a855f7" : "#ff006e";

  return (
    <mesh ref={meshRef} position={position}>
      {shape === "sphere" && <Sphere args={[0.5, 32, 32]} />}
      {shape === "box" && <Box args={[0.8, 0.8, 0.8]} />}
      {shape === "torus" && <Torus args={[0.5, 0.2, 16, 32]} />}
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}

export const Scene3D = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#a855f7" intensity={0.5} />
        
        <FloatingShape position={[-3, 2, -2]} shape="sphere" />
        <FloatingShape position={[3, -1, -3]} shape="box" />
        <FloatingShape position={[0, 3, -4]} shape="torus" />
        <FloatingShape position={[-2, -2, -2]} shape="sphere" />
        <FloatingShape position={[2, 1, -5]} shape="box" />
        
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  );
};
