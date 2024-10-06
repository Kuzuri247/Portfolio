import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useGLTF,
  useTexture,
} from '@react-three/drei';

import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('../earth_cartoon/scene.gltf');
  return (
    <primitive
    object={earth.scene}  
    scale={2}
    position-y={0}
    position-x={0}
    
    />
  )

}

const EarthCanvas = () => {
return(
  <Canvas
    shadows
    frameloop="demand"
    gl={{ preserveDrawingBuffer: true }}
    camera={{ }}>
    <Suspense fallback={<CanvasLoader />}>
    <OrbitControls
    enableZoom={false}
    autoRotate={true}
    minPolarAngle={Math.PI / 2}
    maxPolarAngle={Math.PI / 2}
    minAzimuthAngle={-Math.PI / 2}
    maxAzimuthAngle={Math.PI / 2}
    />
    <Earth/>
    </Suspense>
  </Canvas>
)

}

export default EarthCanvas;
