// import React from 'react';
// import { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import {
//   Decal,
//   Float,
//   OrbitControls,
//   Preload,
//   useGLTF,
//   useTexture,
// } from '@react-three/drei';

// import CanvasLoader from '../Loader';

// const Earth = () => {
//   const earth = useGLTF('../planet/scene.gltf');
//   return (
//     <primitive object={earth.scene} scale={2} position-y={0} position-x={0} />
//   );
// };

// const EarthCanvas = () => {
//   return (
//     <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }} camera={{}}>
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           autoRotate={true}
//           minPolarAngle={Math.PI / 2}
//           maxPolarAngle={Math.PI / 2}
//           minAzimuthAngle={-Math.PI / 2}
//           maxAzimuthAngle={Math.PI / 2} 
//         />
//         <Earth />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default EarthCanvas;


import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF('../earth_cartoon/scene.gltf');

  return (
    <primitive object={earth.scene} scale={2.0} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
        
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
         <ambientLight intensity={1} /> {/* Soft ambient light */}
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1} 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024}
        /> 
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
