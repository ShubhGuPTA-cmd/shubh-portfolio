import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Generates a set of nodes scattered in a sphere volume, plus the
// line segments connecting nearby nodes — a loose "neural network" look.
function useNetworkGeometry(count: number, radius: number, linkDistance: number) {
  return useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const v = new THREE.Vector3(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
      )
      v.normalize().multiplyScalar(radius * (0.35 + Math.random() * 0.65))
      positions.set([v.x, v.y, v.z], i * 3)
    }

    const linePositions: number[] = []
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = positions[i * 3] - positions[j * 3]
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2]
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz)
        if (d < linkDistance) {
          linePositions.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2],
          )
        }
      }
    }

    return { positions, linePositions: new Float32Array(linePositions) }
  }, [count, radius, linkDistance])
}

function Network() {
  const group = useRef<THREE.Group>(null)
  const { positions, linePositions } = useNetworkGeometry(26, 2.6, 1.9)
  const pointer = useRef({ x: 0, y: 0 })

  useFrame((state, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * 0.08
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      pointer.current.y * 0.15,
      0.03,
    )
    group.current.rotation.y += pointer.current.x * 0.0006
    pointer.current.x = state.pointer.x
    pointer.current.y = state.pointer.y
  })

  return (
    <group ref={group}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#8b5cf6" transparent opacity={0.35} />
      </lineSegments>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#22d3ee" size={0.075} sizeAttenuation transparent opacity={0.9} />
      </points>
      <mesh>
        <icosahedronGeometry args={[1.65, 1]} />
        <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.28} />
      </mesh>
    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.2], fov: 42 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <ambientLight intensity={0.6} />
      <Network />
    </Canvas>
  )
}
